import { useRef, ReactNode, useState, useEffect } from 'react';
import './ProjectCarousel.css';

interface ProjectCarouselProps {
  children: ReactNode;
  categoryName: string;
  description?: string;
}

export const ProjectCarousel = ({ children, categoryName, description }: ProjectCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by roughly one card width (assuming ~350px card + gap)
      // or simply half the container width for responsive scrolling
      const scrollAmount = Math.max(container.clientWidth * 0.75, 300);
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="project-carousel-section">
      <div className="carousel-header">
        <h3 className="carousel-title">{categoryName}</h3>
        {description && <p className="carousel-description">{description}</p>}
      </div>

      <div className="carousel-container-wrapper group">
        
        {/* Left Arrow */}
        <button 
          className={`carousel-nav-btn left ${canScrollLeft ? 'visible' : 'hidden'}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Scroll Container */}
        <div 
          className="carousel-scroll-container" 
          ref={scrollContainerRef}
          onScroll={checkScroll}
        >
          {children}
          
          {/* spacer at the end to allow the last card to scroll fully into view */}
          <div className="carousel-spacer"></div>
        </div>

        {/* Right Arrow */}
        <button 
          className={`carousel-nav-btn right ${canScrollRight ? 'visible' : 'hidden'}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

      </div>
    </div>
  );
};
