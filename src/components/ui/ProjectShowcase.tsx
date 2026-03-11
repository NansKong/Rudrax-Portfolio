import { useState, useEffect, useRef, useCallback } from 'react';
import './ProjectShowcase.css';

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    badge: string;
    accentColor: string; // tailwind color name, e.g. "purple"
    icon: React.ReactNode;
}

interface ProjectShowcaseProps {
    projects: Project[];
    autoPlayInterval?: number; // ms
}

export const ProjectShowcase = ({ projects, autoPlayInterval = 4000 }: ProjectShowcaseProps) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((idx: number, dir: 'left' | 'right' = 'right') => {
        if (isAnimating || idx === activeIdx) return;
        setDirection(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIdx(idx);
            setIsAnimating(false);
        }, 400);
    }, [isAnimating, activeIdx]);

    const goNext = useCallback(() => {
        const next = (activeIdx + 1) % projects.length;
        goTo(next, 'right');
    }, [activeIdx, projects.length, goTo]);

    const goPrev = useCallback(() => {
        const prev = (activeIdx - 1 + projects.length) % projects.length;
        goTo(prev, 'left');
    }, [activeIdx, projects.length, goTo]);

    // Autoplay
    useEffect(() => {
        if (isHovered) {
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(() => {
            setDirection('right');
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIdx(prev => (prev + 1) % projects.length);
                setIsAnimating(false);
            }, 400);
        }, autoPlayInterval);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isHovered, projects.length, autoPlayInterval]);

    const project = projects[activeIdx];

    const colorMap: Record<string, { bg: string; border: string; text: string; grad: string; dot: string }> = {
        purple: { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', text: '#c084fc', grad: 'from-purple-500 to-pink-500', dot: '#a855f7' },
        pink:   { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.35)', text: '#f472b6', grad: 'from-pink-500 to-orange-500', dot: '#ec4899' },
        amber:  { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)', text: '#fbbf24', grad: 'from-amber-400 to-yellow-500', dot: '#f59e0b' },
        blue:   { bg: 'rgba(59,130,246,0.12)',  border: 'rgba(59,130,246,0.35)', text: '#60a5fa', grad: 'from-blue-500 to-cyan-500', dot: '#3b82f6' },
        rose:   { bg: 'rgba(244,63,94,0.12)',   border: 'rgba(244,63,94,0.35)',  text: '#fb7185', grad: 'from-rose-500 to-red-500', dot: '#f43f5e' },
        cyan:   { bg: 'rgba(6,182,212,0.12)',   border: 'rgba(6,182,212,0.35)', text: '#22d3ee', grad: 'from-cyan-500 to-sky-500', dot: '#06b6d4' },
    };

    const colors = colorMap[project.accentColor] || colorMap['purple'];

    return (
        <div
            className="project-showcase"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background accent gradient tied to current project */}
            <div
                className="showcase-bg-glow"
                style={{ background: `radial-gradient(ellipse 70% 60% at 60% 50%, ${colors.bg.replace('0.12', '0.08')} 0%, transparent 70%)` }}
            />

            {/* Main card */}
            <div className={`showcase-card ${isAnimating ? (direction === 'right' ? 'exit-left' : 'exit-right') : 'enter'}`}>
                <div className="showcase-content">
                    {/* Left — text */}
                    <div className="showcase-text">
                        <span className="showcase-badge" style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
                            {project.badge}
                        </span>
                        <h3 className="showcase-title">{project.title}</h3>
                        <p className="showcase-desc">{project.description}</p>
                        <div className="showcase-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="showcase-tag" style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showcase-cta"
                            style={{ background: `linear-gradient(135deg, ${colors.dot}, ${colors.dot}88)` }}
                        >
                            View on GitHub
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </a>
                    </div>

                    {/* Right — icon display */}
                    <div className="showcase-icon-wrap">
                        <div className="showcase-icon-ring" style={{ borderColor: colors.border, boxShadow: `0 0 60px ${colors.dot}44, 0 0 120px ${colors.dot}22` }}>
                            <div className="showcase-icon-inner" style={{ background: colors.bg, color: colors.text }}>
                                {project.icon}
                            </div>
                        </div>
                        {/* Orbiting dots */}
                        <div className="orbit-dot orbit-1" style={{ background: colors.dot }} />
                        <div className="orbit-dot orbit-2" style={{ background: colors.dot }} />
                        <div className="orbit-dot orbit-3" style={{ background: colors.dot }} />
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="showcase-controls">
                {/* Prev arrow */}
                <button className="showcase-arrow" onClick={goPrev} aria-label="Previous project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>

                {/* Dots */}
                <div className="showcase-dots">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            className={`showcase-dot ${i === activeIdx ? 'active' : ''}`}
                            style={i === activeIdx ? { background: colors.dot, transform: 'scale(1.4)' } : {}}
                            onClick={() => goTo(i, i > activeIdx ? 'right' : 'left')}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Next arrow */}
                <button className="showcase-arrow" onClick={goNext} aria-label="Next project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>
            </div>

            {/* Progress bar */}
            <div className="showcase-progress" key={`${activeIdx}-${isHovered}`}>
                {!isHovered && (
                    <div
                        className="showcase-progress-fill"
                        style={{ animationDuration: `${autoPlayInterval}ms`, background: colors.dot }}
                    />
                )}
            </div>
        </div>
    );
};
