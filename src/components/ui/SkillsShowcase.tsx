import React from 'react';
import './SkillsShowcase.css';

import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, SiCplusplus, SiGnubash,
    SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiJupyter, SiOpenai,
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, SiFlask, SiDjango, SiPostgresql, SiMongodb, SiRedis,
    SiDocker, SiKubernetes, SiGit, SiGithub, SiLinux, SiNginx, SiGooglecloud, SiZapier, SiReplit,
    SiPostman, SiVercel, SiFirebase
} from 'react-icons/si';

import { FaRobot, FaBrain, FaAws, FaNetworkWired, FaVial, FaProjectDiagram } from 'react-icons/fa';

// Row 1: Languages
export const skillsRow1 = [
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: SiCss, color: "#1572B6" },
    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
    { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
];

// Row 2: AI/ML
export const skillsRow2 = [
    { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
    { name: "Transformers", Icon: FaProjectDiagram, color: "#FFD21E" },
    { name: "Scikit-Learn", Icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", Icon: SiNumpy, color: "#013243" },
    { name: "Pandas", Icon: SiPandas, color: "#150458" },
    { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },
    { name: "HuggingFace", Icon: FaRobot, color: "#FFD21E" },
    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
    { name: "n8n", Icon: FaBrain, color: "#FF6D5A" },
];

export const skillsRow3 = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express", Icon: SiExpress, color: "#ffffff" },
    { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    { name: "Flask", Icon: SiFlask, color: "#ffffff" },
    { name: "Django", Icon: SiDjango, color: "#092E20" },
    { name: "REST API", Icon: FaNetworkWired, color: "#00E676" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
];

// Row 4: Tools, CI/CD, Cloud, Other
export const skillsRow4 = [
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#181717" },
    { name: "AWS", Icon: FaAws, color: "#232F3E" },
    { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
    { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { name: "API Design", Icon: FaNetworkWired, color: "#00E676" },
    { name: "Test Automation", Icon: FaVial, color: "#F06292" },
    { name: "Linux", Icon: SiLinux, color: "#FCC624" },
    { name: "Nginx", Icon: SiNginx, color: "#009639" },
    { name: "Zapier", Icon: SiZapier, color: "#FF4A00" },
    { name: "Replit", Icon: SiReplit, color: "#F26207" },
];

const MarqueeRow = ({ skills, direction = 'left', speed = 40 }: { skills: any[], direction?: 'left' | 'right', speed?: number }) => {
    // Duplicate the list of skills to ensure smooth infinite scrolling
    const repeatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="marquee-container" style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}>
            <div className={`marquee-track ${direction === 'right' ? 'marquee-track-reverse' : ''}`}>
                {repeatedSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="skill-item group"
                        style={{ '--brand-color': skill.color } as React.CSSProperties}
                    >
                        <skill.Icon className="skill-icon" />
                        <span className="skill-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SkillsShowcase = () => {
    return (
        <div className="skills-showcase">
            <MarqueeRow skills={skillsRow1} direction="left" speed={30} />
            <MarqueeRow skills={skillsRow2} direction="right" speed={40} />
            <MarqueeRow skills={skillsRow3} direction="left" speed={45} />
            <MarqueeRow skills={skillsRow4} direction="right" speed={35} />
        </div>
    );
};

export default SkillsShowcase;
