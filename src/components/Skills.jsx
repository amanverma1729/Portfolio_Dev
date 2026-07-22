import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Terminal, Database, Server, Layers, Cpu, Wrench, Globe,
    Zap, Sparkles, Box, GitBranch, Github, Layout, ShieldCheck, Flame,
    Bot, FileCode, CheckCircle2
} from 'lucide-react';

// Coffee icon component for Java
const CoffeeIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

const Skills = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Languages', 'Backend', 'Frontend', 'Database', 'Tools', 'AI', 'Deployment'];

    const allSkills = [
        // Languages
        { name: "Java", category: "Languages", icon: <CoffeeIcon size={24} />, level: "Expert", color: "from-[#F89820] to-[#5382A1]" },
        { name: "JavaScript", category: "Languages", icon: <Terminal size={24} />, level: "Advanced", color: "from-[#F7DF1E] to-[#E5A00D]" },
        { name: "SQL", category: "Languages", icon: <Database size={24} />, level: "Advanced", color: "from-[#00758F] to-[#F29111]" },
        { name: "HTML", category: "Languages", icon: <Code2 size={24} />, level: "Advanced", color: "from-[#E34F26] to-[#EF652A]" },
        { name: "CSS", category: "Languages", icon: <FileCode size={24} />, level: "Advanced", color: "from-[#1572B6] to-[#339933]" },

        // Backend
        { name: "Spring Boot", category: "Backend", icon: <Flame size={24} />, level: "Expert", color: "from-[#6DB33F] to-[#347206]" },
        // { name: "Spring MVC", category: "Backend", icon: <Layers size={24} />, level: "Advanced", color: "from-[#6DB33F] to-[#2B5208]" },
        { name: "REST API", category: "Backend", icon: <Zap size={24} />, level: "Expert", color: "from-[#6C4DFF] to-[#00D4FF]" },
        { name: "Node.js", category: "Backend", icon: <Server size={24} />, level: "Advanced", color: "from-[#339933] to-[#215732]" },
        // { name: "Express.js", category: "Backend", icon: <Box size={24} />, level: "Advanced", color: "from-[#9D4EDD] to-[#6C4DFF]" },

        // Frontend
        { name: "React", category: "Frontend", icon: <Globe size={24} />, level: "Expert", color: "from-[#61DAFB] to-[#0088CC]" },
        { name: "Tailwind CSS", category: "Frontend", icon: <Layout size={24} />, level: "Expert", color: "from-[#06B6D4] to-[#0B93AC]" },
        { name: "Material UI", category: "Frontend", icon: <Sparkles size={24} />, level: "Intermediate", color: "from-[#007FFF] to-[#0059B2]" },
        { name: "Redux", category: "Frontend", icon: <Cpu size={24} />, level: "Intermediate", color: "from-[#764ABC] to-[#593196]" },

        // Database
        { name: "MySQL", category: "Database", icon: <Database size={24} />, level: "Expert", color: "from-[#4479A1] to-[#00546B]" },
        // { name: "MongoDB", category: "Database", icon: <Database size={24} />, level: "Intermediate", color: "from-[#47A248] to-[#116149]" },

        // Tools
        { name: "Git", category: "Tools", icon: <GitBranch size={24} />, level: "Advanced", color: "from-[#F05032] to-[#C0371D]" },
        { name: "GitHub", category: "Tools", icon: <Github size={24} />, level: "Advanced", color: "from-[#6e5494] to-[#333333]" },
        { name: "Postman", category: "Tools", icon: <Zap size={24} />, level: "Advanced", color: "from-[#FF6C37] to-[#D64413]" },
        { name: "VS Code", category: "Tools", icon: <Code2 size={24} />, level: "Expert", color: "from-[#007ACC] to-[#005999]" },
        { name: "Eclipse", category: "Tools", icon: <Wrench size={24} />, level: "Intermediate", color: "from-[#2C2255] to-[#7B5294]" },
        // { name: "IntelliJ IDEA", category: "Tools", icon: <Wrench size={24} />, level: "Expert", color: "from-[#FE315D] to-[#000000]" },

        // AI
        // { name: "LangChain", category: "AI", icon: <Bot size={24} />, level: "Intermediate", color: "from-[#00D4FF] to-[#6C4DFF]" },
        { name: "OpenAI API", category: "AI", icon: <Bot size={24} />, level: "Advanced", color: "from-[#10A37F] to-[#07624B]" },
        // { name: "FAISS", category: "AI", icon: <Cpu size={24} />, level: "Intermediate", color: "from-[#9D4EDD] to-[#00D4FF]" },

        // Deployment
        { name: "Render", category: "Deployment", icon: <Globe size={24} />, level: "Intermediate", color: "from-[#46E3B7] to-[#000000]" },
        { name: "Vercel", category: "Deployment", icon: <Globe size={24} />, level: "Advanced", color: "from-[#000000] to-[#666666]" },
    ];

    const filteredSkills = filter === 'All' ? allSkills : allSkills.filter(skill => skill.category === filter);

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <Wrench size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Technical Proficiency</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Technologies</span>
                    </h2>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-4xl"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white shadow-lg shadow-[#6C4DFF]/30 scale-105'
                                : 'bg-[#120E26]/80 text-gray-400 hover:text-white hover:bg-white/10 border border-[#6C4DFF]/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 w-full"
                >
                    <AnimatePresence>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 border border-[#6C4DFF]/20 relative group overflow-hidden"
                            >
                                {/* Background Accent Glow on Hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 pointer-events-none`} />

                                {/* Icon Wrapper */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-[#080812] rounded-[11px] flex items-center justify-center text-white">
                                        {skill.icon}
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="text-center z-10">
                                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">{skill.name}</h4>
                                    <span className="text-[10px] text-gray-400 font-mono block mt-0.5">{skill.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
