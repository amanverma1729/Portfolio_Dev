import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Full Stack', 'AI / ML', 'Web Apps'];

    const projectsData = [
        {
            title: "Video Conferencing & Live Chat Application",
            description: "Real-time communication platform built with WebRTC and Socket.io for low-latency video streaming, interactive meeting rooms, and instant peer messaging.",
            features: [
                "Real-time video calling",
                "Screen sharing",
                "Chat",
                "Meeting rooms"
            ],
            tags: ["React", "Node.js", "Express", "Socket.io", "WebRTC", "Tailwind CSS", "Material UI"],
            category: "Full Stack",
            github: "https://github.com/amanverma1729/Video-Conferencing",
            link: "https://github.com/amanverma1729/Video-Conferencing",
            gradient: "from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]"
        },
        {
            title: "RAG Based AI Assistant",
            description: "Retrieval-Augmented Generation AI assistant enabling multi-format document indexing, vector similarity search, and context-aware responses with zero hallucination drift.",
            features: [
                "Document upload",
                "Semantic search",
                "AI chatbot",
                "Context-aware answers"
            ],
            tags: ["React", "Node.js", "LangChain", "FAISS", "OpenAI API", "Express"],
            category: "AI / ML",
            github: "https://github.com/amanverma1729_/RAG-AI-Assistant",
            link: "https://github.com/amanverma1729/RAG-AI-Assistant",
            gradient: "from-[#9D4EDD] via-[#6C4DFF] to-[#00D4FF]"
        },
        {
            title: "ResumeGen",
            description: "Professional resume generation suite allowing developers and job seekers to curate atomic design resume templates and serialize them directly into PDF format.",
            features: [
                "Professional resume builder",
                "Download PDF",
                "Responsive design"
            ],
            tags: ["React", "Node.js", "Express", "MySQL"],
            category: "Full Stack",
            github: "https://github.com/amanverma1729/ResumeGen",
            link: "https://github.com/amanverma1729/ResumeGen",
            gradient: "from-[#00D4FF] via-[#6C4DFF] to-[#9D4EDD]"
        },
        {
            title: "Spotify Replica",
            description: "High-performance audio streaming client mirroring Spotify's signature dark UI, custom kinetic audio player controls, and responsive layout across desktop and mobile screens.",
            features: [
                "Spotify UI Clone",
                "Responsive Design"
            ],
            tags: ["React", "Tailwind CSS"],
            category: "Web Apps",
            github: "https://github.com/amanverma1729/Spotify-Replica",
            link: "https://github.com/amanverma1729/Spotify-Replica",
            gradient: "from-[#1DB954] via-[#00D4FF] to-[#6C4DFF]"
        },
        {
            title: "Developer Portfolio",
            description: "Modern, high-performance personal developer portfolio showcasing full-stack projects, skills, education, and career timeline with smooth Framer Motion animations.",
            features: [
                "Responsive UI"
            ],
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            category: "Web Apps",
            github: "https://github.com/amanverma1729/Portfolio",
            link: "https://github.com/amanverma1729/Portfolio",
            gradient: "from-[#6C4DFF] via-[#00D4FF] to-[#9D4EDD]"
        }
    ];

    const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <FolderGit2 size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Portfolio Showcase</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Projects</span>
                    </h2>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white shadow-lg shadow-[#6C4DFF]/30 scale-105'
                                : 'bg-[#120E26]/80 text-gray-400 hover:text-white hover:bg-white/10 border border-[#6C4DFF]/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                delay={index * 0.1}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
