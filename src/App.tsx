import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import Navbar from './components/ui/Navbar'
import Section from './components/ui/Section'
import LogoLoop, { type LogoItem } from './components/ui/LogoLoop'

const row1Skills = [
    { src: '/assets/images/python.svg', alt: 'Python', title: 'Python' },
    { src: '/assets/images/tensorflow.svg', alt: 'TensorFlow', title: 'TensorFlow' },
    { src: '/assets/images/pytorch.svg', alt: 'PyTorch', title: 'PyTorch' },
    { src: '/assets/images/scikitlearn.svg', alt: 'Scikit-Learn', title: 'Scikit-Learn' },
    { src: '/assets/images/huggingface.svg', alt: 'HuggingFace', title: 'HuggingFace' },
    { src: '/assets/images/numpy.svg', alt: 'NumPy', title: 'NumPy' },
    { src: '/assets/images/pandas.svg', alt: 'Pandas', title: 'Pandas' },
    { src: '/assets/images/jupyter.svg', alt: 'Jupyter', title: 'Jupyter' },
    { src: '/assets/images/fastapi.svg', alt: 'FastAPI', title: 'FastAPI' },
    { src: '/assets/images/flask.svg', alt: 'Flask', title: 'Flask' },
    { src: '/assets/images/django.svg', alt: 'Django', title: 'Django' },
    { src: '/assets/images/langchain.svg', alt: 'LangChain', title: 'LangChain' },
    { src: '/assets/images/replicate.svg', alt: 'Replicate', title: 'Replicate' },
    { src: '/assets/images/openai-svgrepo-com.svg', alt: 'OpenAI', title: 'OpenAI' },
]

const row2Skills = [
    { src: '/assets/images/docker.svg', alt: 'Docker', title: 'Docker' },
    { src: '/assets/images/kubernetes.svg', alt: 'Kubernetes', title: 'Kubernetes' },
    { src: '/assets/images/postgresql.svg', alt: 'PostgreSQL', title: 'PostgreSQL' },
    { src: '/assets/images/mongodb.svg', alt: 'MongoDB', title: 'MongoDB' },
    { src: '/assets/images/redis.svg', alt: 'Redis', title: 'Redis' },
    { src: '/assets/images/n8n.svg', alt: 'n8n', title: 'n8n' },
    { src: '/assets/images/zapier.svg', alt: 'Zapier', title: 'Zapier' },
    { src: '/assets/images/replit.svg', alt: 'Replit', title: 'Replit' },
    { src: '/assets/images/git.svg', alt: 'Git', title: 'Git' },
    { src: '/assets/images/github.svg', alt: 'GitHub', title: 'GitHub' },
    { src: '/assets/images/linux.svg', alt: 'Linux', title: 'Linux' },
    { src: '/assets/images/nginx.svg', alt: 'Nginx', title: 'Nginx' },
    { src: '/assets/images/react.svg', alt: 'React', title: 'React' },
    { src: '/assets/images/tailwindcss.svg', alt: 'Tailwind CSS', title: 'Tailwind CSS' },
    { src: '/assets/images/deepl.svg', alt: 'DeepL', title: 'DeepL' },
    { src: '/assets/images/google.svg', alt: 'Google', title: 'Google' },
]

const skillBadges = [
    'Python', 'Machine Learning', 'Deep Learning', 'PyTorch / TensorFlow',
    'FastAPI / Flask / Django', 'Docker & Kubernetes', 'SQL & NoSQL', 'AWS / GCP',
    'Data Engineering', 'MLOps', 'Natural Language Processing', 'Computer Vision',
    'n8n / Zapier', 'LLM Integration / REST APIs',
]

function SkillsMarquee() {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills &amp; Expertise</h3>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4">
                {skillBadges.map((skill, index) => (
                    <div
                        key={index}
                        className="
                            glass-card px-4 py-3 rounded-xl text-center
                            text-gray-300 text-sm
                            hover:border-purple-500/50 hover:bg-purple-500/5
                            transition-all duration-300 group
                        "
                    >
                        <span className="group-hover:text-purple-400 transition-colors">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function BioSection() {
    return (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate AI & Python Developer specializing in building intelligent, scalable systems that bridge the gap between cutting-edge machine learning research and production-ready applications.
            </p>
            <p className="text-base leading-relaxed text-gray-400">
                I design end-to-end machine learning pipelines — from data preprocessing and feature engineering to model training, explainability, API development, and deployment. My work includes multi-label clinical risk prediction systems, high-accuracy ML models, and LLM-powered automation engines built for production environments.
            </p>
            <p className="text-base leading-relaxed text-gray-400">
                Beyond AI, I develop backend-driven web applications and automation systems that integrate APIs, databases, and cloud infrastructure to create complete, deployable products — not just prototypes.
            </p>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
                <a
                    href="#contact"
                    className="
                        px-6 py-3
                        rounded-full
                        bg-gradient-to-r from-purple-500 to-pink-500
                        text-white font-medium
                        hover:scale-105
                        hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                        transition-all duration-300
                    "
                >
                    Get In Touch
                </a>
                <a
                    href="https://drive.google.com/file/d/1o3J1R6fWFTtGQbzrdFhDQFoVP6x26Q08/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        px-6 py-3
                        rounded-full
                        border border-purple-500/50
                        text-purple-400
                        hover:bg-purple-500/10
                        hover:border-purple-400
                        transition-all duration-300
                    "
                >
                    View Resume
                </a>
            </div>
        </div>
    );
}

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 999,
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(168,85,247,0.5)',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    )
}

function App() {
    return (
        <Layout>
            <ScrollToTop />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
                        <Section
                            id="hero"
                            className="relative min-h-screen flex items-center"
                        >
                            {/* CONTENT CONTAINER */}
                            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12">

                                {/* CENTERED CONTENT */}
                                <div className="flex flex-col items-center justify-center text-center space-y-6">

                                    {/* "HI, I'M" - Small intro text */}
                                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide">
                                        HI, I'M
                                    </p>

                                    {/* "RUDRAX" - Large name */}
                                    <h1
                                        className="
                                            text-[4rem]
                                            sm:text-[5rem]
                                            md:text-[7rem]
                                            lg:text-[10rem]
                                            xl:text-[12rem]
                                            font-black
                                            tracking-tighter
                                            leading-none
                                            text-transparent
                                            bg-clip-text
                                            bg-gradient-to-r
                                            from-purple-400
                                            via-purple-500
                                            to-pink-500
                                        "
                                    >
                                        RUDRAX
                                    </h1>

                                    {/* JOB DESCRIPTION - Small text */}
                                    <div className="max-w-2xl space-y-4">
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                            AI/ML Engineer • Full-Stack Developer • Automation Architect
                                        </p>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                            AI & Python Developer building intelligent, scalable systems — from ML
                                            models to production-ready APIs. I turn complex data into reliable,
                                            explainable solutions that drive real-world impact.
                                        </p>

                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Available for opportunities
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Section>

                        {/* Blur overlay at bottom */}
                        <div
                            className="blur-fade-overlay"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '10rem',
                                zIndex: 20,
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* About Section */}
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
                        <Section
                            id="about"
                            className="min-h-screen flex items-center"
                        >
                            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 pb-36">

                                {/* Section Title */}
                                <div className="text-center mb-16">
                                    <h2 className="
                                        text-4xl md:text-6xl lg:text-7xl 
                                        font-black 
                                        mb-4
                                        bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                                        bg-clip-text text-transparent
                                    ">
                                        About Me
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                                </div>

                                {/* Content Grid */}
                                <div className="grid md:grid-cols-2 gap-12 items-center">

                                    {/* Left: Bio */}
                                    <BioSection />

                                    {/* Right: Skills grid */}
                                    <SkillsMarquee />

                                </div>

                                {/* Full-width skills icon marquee — below both columns */}
                                <div className="mt-12 space-y-4">
                                    <div className="overflow-hidden py-2">
                                        <LogoLoop
                                            logos={row1Skills}
                                            speed={55}
                                            direction="left"
                                            logoHeight={48}
                                            gap={48}
                                            hoverSpeed={0}
                                            fadeOut
                                            fadeOutColor="transparent"
                                            ariaLabel="AI and ML skills"
                                            renderItem={(item: LogoItem, key: string) => (
                                                <div key={key} className="flex items-center justify-center group cursor-default">
                                                    <img
                                                        src={(item as any).src}
                                                        alt={(item as any).alt ?? ''}
                                                        className="h-10 w-10 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                                        style={{ filter: 'brightness(0) invert(1)' }}
                                                        draggable={false}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="overflow-hidden py-2">
                                        <LogoLoop
                                            logos={row2Skills}
                                            speed={45}
                                            direction="right"
                                            logoHeight={48}
                                            gap={48}
                                            hoverSpeed={0}
                                            fadeOut
                                            fadeOutColor="transparent"
                                            ariaLabel="DevOps and engineering skills"
                                            renderItem={(item: LogoItem, key: string) => (
                                                <div key={key} className="flex items-center justify-center group cursor-default">
                                                    <img
                                                        src={(item as any).src}
                                                        alt={(item as any).alt ?? ''}
                                                        className="h-10 w-10 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                                        style={{ filter: 'brightness(0) invert(1)' }}
                                                        draggable={false}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Section>

                        {/* Blur overlay at bottom */}
                        <div
                            className="blur-fade-overlay"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '10rem',
                                zIndex: 20,
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Projects Section */}
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
                        <Section
                            id="projects"
                            className="min-h-screen"
                        >
                            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 pb-36">

                                {/* Section Title */}
                                <div className="text-center mb-16">
                                    <h2 className="
                                        text-4xl md:text-6xl lg:text-7xl
                                        font-black mb-4
                                        bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                                        bg-clip-text text-transparent
                                    ">
                                        Featured Projects
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        A selection of production-ready systems and experiments that showcase my range across AI, automation, and blockchain.
                                    </p>
                                </div>

                                {/* Project Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Card 1 — Production Travel Automation */}
                                    <a
                                        href="https://github.com/NansKong/Production-Travel-Automation-"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card rounded-2xl p-7
                                            flex flex-col gap-5
                                            hover:border-purple-500/50
                                            hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
                                            hover:-translate-y-1
                                            transition-all duration-300 group
                                            cursor-pointer
                                        "
                                    >
                                        {/* Top bar */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>

                                        {/* Title + description */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                                Production Travel Automation Engine
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                AI-powered n8n workflow that fully automates travel quotation — from client request intake to vendor coordination, dynamic pricing, PDF proposal generation, and automated client delivery.
                                            </p>
                                        </div>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {['n8n', 'GPT-4', 'PostgreSQL', 'Python', 'AI Automation'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>

                                    {/* Card 2 — Automated Startup Outreach System */}
                                    <a
                                        href="https://github.com/NansKong/Automated-Startup-Outreach-System"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card rounded-2xl p-7
                                            flex flex-col gap-5
                                            hover:border-pink-500/50
                                            hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
                                            hover:-translate-y-1
                                            transition-all duration-300 group
                                            cursor-pointer
                                        "
                                    >
                                        {/* Top bar */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                                                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>

                                        {/* Title + description */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                                Automated Startup Outreach System
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Discovers newly registered Indian startups, enriches their data via n8n workflows, generates personalized AI-written messages, and sends automated email & WhatsApp outreach at scale — zero manual work.
                                            </p>
                                        </div>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {['Python', 'n8n', 'AI/LLM', 'WhatsApp API', 'Scraping'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 border border-pink-500/20 text-pink-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>

                                    {/* Card 3 — Blockchain Integrated File System */}
                                    <a
                                        href="https://github.com/NansKong/Blockchain-Integrated-File-System"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card rounded-2xl p-7
                                            flex flex-col gap-5
                                            hover:border-blue-500/50
                                            hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                                            hover:-translate-y-1
                                            transition-all duration-300 group
                                            cursor-pointer
                                        "
                                    >
                                        {/* Top bar */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>

                                        {/* Title + description */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                Blockchain-Integrated File System
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Decentralized file storage and transfer system using Ethereum smart contracts (Solidity) and IPFS. File metadata is immutably recorded on-chain, while content lives on IPFS — bridged by a Python backend for secure, tamper-proof tracking.
                                            </p>
                                        </div>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {['Ethereum', 'Solidity', 'IPFS', 'Python', 'Web3'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>

                                    {/* Card 4 — This Portfolio Website */}
                                    <a
                                        href="https://github.com/NansKong/Rudrax-s-Portfolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card rounded-2xl p-7
                                            flex flex-col gap-5
                                            hover:border-emerald-500/50
                                            hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]
                                            hover:-translate-y-1
                                            transition-all duration-300 group
                                            cursor-pointer
                                            relative overflow-hidden
                                        "
                                    >
                                        {/* "This site" badge */}
                                        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                                            ✦ THIS SITE
                                        </div>

                                        {/* Top bar */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-1 mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>

                                        {/* Title + description */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                                3D Portfolio Website
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                This very site — a modern, immersive 3D portfolio built with React, Three.js, and Vite. Features an animated liquid-ether background, glassmorphism UI, smooth scroll sections, and a skills marquee. Designed to wow at first glance.
                                            </p>
                                        </div>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {['React', 'Three.js', 'TypeScript', 'Vite', 'Tailwind CSS'].map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </a>

                                </div>

                                {/* View all projects link */}
                                <div className="text-center mt-14">
                                    <a
                                        href="https://github.com/NansKong"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center gap-2
                                            px-8 py-3 rounded-full
                                            border border-purple-500/40
                                            text-purple-400 font-medium
                                            hover:bg-purple-500/10 hover:border-purple-400
                                            hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                                            transition-all duration-300
                                        "
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View All Projects on GitHub
                                    </a>
                                </div>

                            </div>
                        </Section>

                        {/* Blur overlay at bottom */}
                        <div
                            className="blur-fade-overlay"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '10rem',
                                zIndex: 20,
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Contact Section */}
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
                        <Section
                            id="contact"
                            className="min-h-screen flex items-center justify-center"
                        >
                            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 pb-36">

                                {/* Section Title */}
                                <div className="text-center mb-16">
                                    <h2 className="
                                        text-4xl md:text-6xl lg:text-7xl
                                        font-black mb-4
                                        bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                                        bg-clip-text text-transparent
                                    ">
                                        Get In Touch
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
                                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                                        Have a project in mind or just want to say hi? My inbox is always open.
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/NansKong"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card p-6 rounded-2xl
                                            flex flex-col items-center gap-4 text-center
                                            hover:border-purple-500/50 hover:bg-purple-500/5
                                            hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                                            transition-all duration-300 group
                                        "
                                    >
                                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                            <svg className="w-7 h-7 text-gray-300 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold mb-1">GitHub</p>
                                            <p className="text-gray-400 text-sm group-hover:text-purple-400 transition-colors">@NansKong</p>
                                        </div>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/rudrax-kongbrailatpam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            glass-card p-6 rounded-2xl
                                            flex flex-col items-center gap-4 text-center
                                            hover:border-purple-500/50 hover:bg-purple-500/5
                                            hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                                            transition-all duration-300 group
                                        "
                                    >
                                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                            <svg className="w-7 h-7 text-gray-300 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold mb-1">LinkedIn</p>
                                            <p className="text-gray-400 text-sm group-hover:text-purple-400 transition-colors">Rudrax Kongbrailatpam</p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="mailto:krudrax16@gmail.com"
                                        className="
                                            glass-card p-6 rounded-2xl
                                            flex flex-col items-center gap-4 text-center
                                            hover:border-pink-500/50 hover:bg-pink-500/5
                                            hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]
                                            transition-all duration-300 group
                                        "
                                    >
                                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/10 transition-colors">
                                            <svg className="w-7 h-7 text-gray-300 group-hover:text-pink-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold mb-1">Email</p>
                                            <p className="text-gray-400 text-sm group-hover:text-pink-400 transition-colors">krudrax16@gmail.com</p>
                                        </div>
                                    </a>

                                </div>

                                {/* CTA */}
                                <div className="text-center">
                                    <a
                                        href="mailto:krudrax16@gmail.com"
                                        className="
                                            inline-flex items-center gap-3
                                            px-10 py-4 rounded-full
                                            bg-gradient-to-r from-purple-500 to-pink-500
                                            text-white font-semibold text-lg
                                            hover:scale-105
                                            hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
                                            transition-all duration-300
                                        "
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Say Hello
                                    </a>
                                </div>

                            </div>
                        </Section>

                        {/* Blur overlay at bottom */}
                        <div
                            className="blur-fade-overlay"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '10rem',
                                zIndex: 20,
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default App
