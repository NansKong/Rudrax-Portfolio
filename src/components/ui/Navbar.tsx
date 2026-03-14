import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Modern AI/ML Portfolio Navbar
 * Floating glassmorphic design with purple-pink gradient accents
 */
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const navLinks = [
        { href: isHomePage ? '#hero' : '/#hero', label: 'Home' },
        { href: isHomePage ? '#about' : '/#about', label: 'About' },
        { href: isHomePage ? '#skills' : '/#skills', label: 'Skills' },
        { href: isHomePage ? '#projects' : '/#projects', label: 'Projects' },
        { href: '/certifications', label: 'Certifications' }
    ]

    const resumeLink = 'https://drive.google.com/file/d/1o3J1R6fWFTtGQbzrdFhDQFoVP6x26Q08/view?usp=sharing'

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <div
                    className={`
                        max-w-5xl w-[90vw]
                        px-8 py-3
                        rounded-full
                        bg-black/40
                        backdrop-blur-xl
                        border border-purple-500/20
                        shadow-[0_8px_30px_rgba(139,92,246,0.2)]
                        flex items-center justify-between
                        transition-all duration-300
                        ${isScrolled ? 'shadow-[0_8px_40px_rgba(139,92,246,0.3)]' : ''}
                    `}
                >
                    {/* Logo */}
                    <a
                        href={isHomePage ? '#hero' : '/'}
                        className="
                            text-xl font-semibold tracking-tight
                            bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                            bg-clip-text text-transparent
                            hover:scale-105 transition-transform duration-300
                        "
                    >
                        Rudrax
                    </a>

                    {/* Center Links */}
                    <ul className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="
                                        text-gray-300 
                                        hover:text-purple-400 
                                        transition-all duration-300
                                        text-base
                                        relative
                                        group
                                    "
                                >
                                    {link.label}
                                    <span className="
                                        absolute -bottom-1 left-0 
                                        w-0 h-0.5 
                                        bg-gradient-to-r from-purple-400 to-pink-500
                                        group-hover:w-full 
                                        transition-all duration-300
                                    " />
                                </a>
                            </li>
                        ))}
                        {/* Resume Button */}
                        <li>
                            <a
                                href={resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-gray-300 
                                    hover:text-purple-400 
                                    transition-all duration-300
                                    text-base
                                    relative
                                    group
                                "
                            >
                                Resume
                                <span className="
                                    absolute -bottom-1 left-0 
                                    w-0 h-0.5 
                                    bg-gradient-to-r from-purple-400 to-pink-500
                                    group-hover:w-full 
                                    transition-all duration-300
                                " />
                            </a>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <a
                        href={isHomePage ? '#contact' : '/#contact'}
                        className="
                            px-5 py-2
                            rounded-full
                            bg-gradient-to-r from-purple-500 to-pink-500
                            text-white text-sm font-medium
                            hover:scale-105
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                            transition-all duration-300
                        "
                    >
                        Let's Talk
                    </a>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden">
                <div
                    className="
                        px-6 py-3
                        rounded-full
                        bg-black/40
                        backdrop-blur-xl
                        border border-purple-500/20
                        shadow-[0_8px_30px_rgba(139,92,246,0.2)]
                        flex items-center justify-between
                    "
                >
                    {/* Logo */}
                    <a
                        href={isHomePage ? '#hero' : '/'}
                        onClick={handleLinkClick}
                        className="
                            text-lg font-semibold tracking-tight
                            bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                            bg-clip-text text-transparent
                        "
                    >
                        Rudrax
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        className="
                            absolute top-full mt-4 left-0 right-0
                            px-6 py-4
                            rounded-3xl
                            bg-black/40
                            backdrop-blur-xl
                            border border-purple-500/20
                            shadow-[0_8px_30px_rgba(139,92,246,0.2)]
                            animate-in fade-in slide-in-from-top-5
                            duration-300
                        "
                    >
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="
                                            block
                                            text-gray-300 
                                            hover:text-purple-400 
                                            transition-all duration-300
                                            text-base
                                            py-2
                                        "
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            {/* Resume Button */}
                            <li>
                                <a
                                    href={resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="
                                        block
                                        text-gray-300 
                                        hover:text-purple-400 
                                        transition-all duration-300
                                        text-base
                                        py-2
                                    "
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>

                        {/* Mobile CTA Button */}
                        <a
                            href={isHomePage ? '#contact' : '/#contact'}
                            onClick={handleLinkClick}
                            className="
                                block mt-4
                                px-5 py-2.5
                                rounded-full
                                bg-gradient-to-r from-purple-500 to-pink-500
                                text-white text-sm font-medium text-center
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                                transition-all duration-300
                            "
                        >
                            Let's Talk
                        </a>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
