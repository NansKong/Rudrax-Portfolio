import { useLayoutEffect, useRef, useCallback, ReactNode } from 'react';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

/**
 * Returns a stable viewport height that doesn't fluctuate with mobile
 * browser chrome (address bar appearing / disappearing).
 * Uses window.innerHeight as fallback for browsers without visualViewport.
 */
function getStableVH(): number {
  // visualViewport.height is the pinned visible area — excludes browser chrome
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).visualViewport?.height ?? window.innerHeight;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration: _scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll: _useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const rafPendingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Cached document-relative offsets — computed once, never during scroll
  const cardOffsetsRef = useRef<number[]>([]);
  const endOffsetRef = useRef(0);
  // Stable viewport height — won't jitter when mobile address bar hides
  const stableVHRef = useRef(getStableVH());

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  /** Compute and cache the document-top offset for an element (no forced reflow during scroll) */
  const measureOffsets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Snapshot stable viewport height at measure time
    stableVHRef.current = getStableVH();

    cardOffsetsRef.current = cards.map(card => {
      let top = 0;
      let el: HTMLElement | null = card;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      return top;
    });

    const endEl = document.querySelector('.scroll-stack-end') as HTMLElement | null;
    if (endEl) {
      let top = 0;
      let el: HTMLElement | null = endEl;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      endOffsetRef.current = top;
    }
  }, []);

  const applyTransforms = useCallback(() => {
    rafPendingRef.current = false;
    const cards = cardsRef.current;
    const offsets = cardOffsetsRef.current;
    if (!cards.length || offsets.length !== cards.length) return;

    const scrollTop = window.scrollY;
    // Use the stable cached VH — never recalculate during scroll to prevent jitter
    const containerHeight = stableVHRef.current;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endOffsetRef.current;

    cards.forEach((card, i) => {
      const cardTop = offsets[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      // Scale progress (0→1 as card approaches stack position)
      let scaleProgress = 0;
      if (scrollTop > triggerStart && scrollTop < triggerEnd) {
        scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollTop >= triggerEnd) {
        scaleProgress = 1;
      }

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTriggerStart = offsets[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      // Let native CSS sticky handle the translation pinning!
      card.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = blur > 0 ? `blur(${blur}px)` : '';

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    // Batch DOM writes into one rAF — prevents multiple writes per scroll tick
    if (!rafPendingRef.current) {
      rafPendingRef.current = true;
      animationFrameRef.current = requestAnimationFrame(applyTransforms);
    }
  }, [applyTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      document.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Initial style setup
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      // Native Sticky CSS
      card.style.position = 'sticky';
      card.style.top = typeof stackPosition === 'number' 
        ? `${stackPosition + itemStackDistance * i}px`
        : `calc(${stackPosition} + ${itemStackDistance * i}px)`;
    });

    // Measure once after layout is ready
    // Use rAF to ensure the browser has done initial layout
    requestAnimationFrame(() => {
      measureOffsets();
      applyTransforms();
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Re-measure on resize (layout may shift)
    // Use a debounce timer so rapid mobile resize events don't thrash layout
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureOffsets();
        handleScroll();
      }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Mobile orientation change fires before the browser completes relayout.
    // Wait 300 ms to let the browser finish before re-measuring.
    const onOrientationChange = () => {
      setTimeout(() => {
        measureOffsets();
        handleScroll();
      }, 300);
    };
    window.addEventListener('orientationchange', onOrientationChange);

    // visualViewport resize — fires when mobile address bar shows/hides.
    // We DON'T re-measure here (that would cause jitter); we only update
    // the stable VH so that the NEXT explicit resize/orientationchange picks it up.
    const vv = (window as unknown as { visualViewport?: { addEventListener: (e: string, cb: () => void) => void; removeEventListener: (e: string, cb: () => void) => void } }).visualViewport;
    const onVVResize = () => {
      stableVHRef.current = getStableVH();
    };
    vv?.addEventListener('resize', onVVResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onOrientationChange);
      vv?.removeEventListener('resize', onVVResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      stackCompletedRef.current = false;
      rafPendingRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
    };
  }, [
    itemDistance,
    measureOffsets,
    applyTransforms,
    handleScroll,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
