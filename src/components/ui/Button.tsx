import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

/**
 * ReactBits-style Button Component
 * Multiple variants with consistent styling
 */
function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseClasses = 'rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'glass-card hover:scale-105 text-white',
        secondary: 'bg-gradient-to-r from-accent-purple to-accent-pink hover:shadow-lg hover:shadow-purple-500/50 text-white',
        ghost: 'border border-white/20 hover:bg-white/10 text-white',
    }

    const sizeClasses = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3 text-lg',
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
