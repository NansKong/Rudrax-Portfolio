import React, { useState, useMemo } from 'react';
import Layout from '../layout/Layout';
import Navbar from '../ui/Navbar';

// Type definition for a Certificate
interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    category: string;
    verifyLink: string;
    orgInitials: string;
    accentColor: string;
}

// Dummy data placeholder - will be replaced with real data
const certificatesData: Certificate[] = [
    {
        id: '1',
        name: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google (Coursera)',
        date: 'Sep 13, 2024',
        category: 'Networking',
        verifyLink: 'https://coursera.org/share/35f9a0631ff3345dcb83d417a7fa8173',
        orgInitials: 'G',
        accentColor: '#3b82f6', // blue
    },
    {
        id: '2',
        name: 'Build Generative AI Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'Aug 19, 2025',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/1NwP_8cHZoLATQnAMc6RuA15eTbQpchQG/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '3',
        name: 'ChatGPT Made Easy: AI Essentials for Beginners',
        issuer: 'Udemy',
        date: 'Aug 22, 2025',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/1w8-UzLPnvHSLpGykAztcIP9PjiTkcbZt/view?usp=drive_link',
        orgInitials: 'U',
        accentColor: '#8b5cf6', // purple
    },
    {
        id: '4',
        name: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
        issuer: 'Infosys Springboard',
        date: 'Aug 22, 2025',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/1_nFJuC8NilBwrkrtuorRpNdarb-P3rKF/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '5',
        name: 'Fundamentals of Network Communication',
        issuer: 'Coursera (University of Colorado)',
        date: 'Aug 14, 2024',
        category: 'Networking',
        verifyLink: 'https://drive.google.com/file/d/1iGb6g8tf7_P3wgtaJc8FK1Ftl83AcPjX/view?usp=drive_link',
        orgInitials: 'CU',
        accentColor: '#f59e0b', // amber
    },
    {
        id: '6',
        name: 'Computational Theory: Language Principle & Finite Automata Theory',
        issuer: 'Infosys Springboard',
        date: 'Aug 17, 2025',
        category: 'Computer Science',
        verifyLink: 'https://drive.google.com/file/d/1mCnxo2fqElJKRJq_PAPU_MDcTn6655Os/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '7',
        name: 'Introduction to Artificial Intelligence',
        issuer: 'Infosys Springboard',
        date: 'Jan 7, 2026',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/1wc_H8SzhZm6GLcUiV3m4IZUo2GdhxD_F/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '8',
        name: 'Introduction to Data Science',
        issuer: 'Infosys Springboard',
        date: 'Dec 11, 2025',
        category: 'Data Science',
        verifyLink: 'https://drive.google.com/file/d/1PsKkbPR5p5XeeaDoMxThoDkjk9wS0yM4/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '9',
        name: 'Introduction to Natural Language Processing',
        issuer: 'Infosys Springboard',
        date: 'Dec 11, 2025',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/1zZvx3TRIGQ_88zEn24gOuSFiyrH5kq8U/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '10',
        name: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
        issuer: 'Infosys Springboard',
        date: 'Aug 22, 2025',
        category: 'AI & GenAI',
        verifyLink: 'https://drive.google.com/file/d/19ODvBvhaukFD2YCnCM00dxJpZn_T8kFm/view?usp=drive_link',
        orgInitials: 'IN',
        accentColor: '#10b981', // emerald
    },
    {
        id: '11',
        name: 'The Project Management Course: Beginner to PRO Project Manager',
        issuer: 'Udemy',
        date: 'Oct 26, 2023',
        category: 'Management',
        verifyLink: 'https://drive.google.com/file/d/1s39tzkWP5W2Hn4fubu4_7YJtKCtwASmx/view?usp=drive_link',
        orgInitials: 'U',
        accentColor: '#8b5cf6', // purple
    },
    {
        id: '12',
        name: 'Peer-to-Peer Protocols and Local Area Networks',
        issuer: 'University of Colorado Boulder',
        date: 'Oct 10, 2024',
        category: 'Networking',
        verifyLink: 'https://drive.google.com/file/d/1oD3YPTqZ0GeV6jae5do_KUYig7yPVEY5/view?usp=drive_link',
        orgInitials: 'CU',
        accentColor: '#f59e0b', // amber
    },
    {
        id: '13',
        name: 'TCP/IP and Advanced Topics',
        issuer: 'University of Colorado Boulder',
        date: 'Nov 16, 2024',
        category: 'Networking',
        verifyLink: 'https://drive.google.com/file/d/1SNHzKXLgEZtLw7oFX1o9RF1Yvlq5VrX-/view?usp=drive_link',
        orgInitials: 'CU',
        accentColor: '#f59e0b', // amber
    },
    {
        id: '14',
        name: 'The Complete 2024 Web Development Bootcamp',
        issuer: 'Udemy',
        date: 'Oct 25, 2023',
        category: 'Development',
        verifyLink: 'https://drive.google.com/file/d/11lGmDEP36ll66YCCi7EVu1laUoF1bHlt/view?usp=drive_link',
        orgInitials: 'U',
        accentColor: '#8b5cf6', // purple
    },
];

const Certifications: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // Extract unique categories for the filter bar
    const categories = useMemo(() => {
        const cats = new Set(certificatesData.map(cert => cert.category));
        return ['All', ...Array.from(cats)];
    }, []);

    // Filter and sort certificates
    const filteredCertificates = useMemo(() => {
        let filtered = certificatesData;
        if (activeCategory !== 'All') {
            filtered = certificatesData.filter(cert => cert.category === activeCategory);
        }
        
        // Sort chronologically (latest first)
        return filtered.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA; // Descending order
        });
    }, [activeCategory]);

    return (
        <Layout>
            <Navbar />
            
            <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col space-y-12">
                    
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="
                            font-playfair text-4xl md:text-5xl lg:text-6xl font-black mb-4
                            bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500
                            bg-clip-text text-transparent
                        ">
                            Certifications
                        </h1>
                        <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto">
                            A showcase of my professional certificates and ongoing learning journey across various technical domains.
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`
                                        px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300
                                        ${activeCategory === category 
                                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                                            : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-gray-200'}
                                    `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="text-gray-400 font-sans text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            Showing <span className="text-purple-400 font-semibold">{filteredCertificates.length}</span> credentials
                        </div>
                    </div>

                    {/* Certificate Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {filteredCertificates.map((cert) => (
                            <div 
                                key={cert.id}
                                className="
                                    bg-[#0f0f13] border border-white/10 rounded-2xl p-6
                                    flex flex-col h-full relative group
                                    hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
                                    hover:border-purple-500/30 transition-all duration-500
                                "
                            >
                                {/* Org Badge & Category */}
                                <div className="flex justify-between items-start mb-6">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg"
                                        style={{ 
                                            backgroundColor: `${cert.accentColor}20`,
                                            color: cert.accentColor,
                                            border: `1px solid ${cert.accentColor}40`
                                        }}
                                    >
                                        {cert.orgInitials}
                                    </div>
                                    <span 
                                        className="px-3 py-1 text-xs font-semibold rounded-full"
                                        style={{ 
                                            backgroundColor: `${cert.accentColor}15`,
                                            color: cert.accentColor,
                                            border: `1px solid ${cert.accentColor}30`
                                        }}
                                    >
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow flex flex-col justify-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                                    <p className="text-xs text-gray-500">Issued • {cert.date}</p>
                                </div>

                                {/* Action */}
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <a 
                                        href={cert.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center text-sm font-medium text-gray-300 
                                            hover:text-purple-400 group-hover:translate-x-1 transition-all
                                        "
                                    >
                                        Verify Credential
                                        <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State (just in case) */}
                    {filteredCertificates.length === 0 && (
                        <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10">
                            <p className="text-gray-400 text-lg">No certificates found in this category.</p>
                            <button 
                                onClick={() => setActiveCategory('All')}
                                className="mt-4 text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4"
                            >
                                View all certificates
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
};

export default Certifications;
