import { ReactNode, CSSProperties } from 'react'

interface SectionProps {
    id: string
    children: ReactNode
    className?: string
    style?: CSSProperties
}

/**
 * ReactBits-style Section Component
 * Reusable section container with proper spacing and responsive design
 */
function Section({ id, children, className = '', style }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative w-full px-6 md:px-12 lg:px-24 py-20 ${className}`}
            style={style}
        >
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </section>
    )
}

export default Section
