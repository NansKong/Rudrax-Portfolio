import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

/**
 * ReactBits-style Card Component
 * Features glassmorphism and optional hover effects
 */
function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div
            className={`glass-card p-6 rounded-2xl transition-all duration-300 ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''
                } ${className}`}
        >
            {children}
        </div>
    )
}

export default Card
