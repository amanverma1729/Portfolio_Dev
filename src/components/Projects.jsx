import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Web Apps', 'AI/ML', 'Full Stack'];

    const projectsData = [
        {
            title: "Video Conferencing",
            description: "Real-time communication platform with high-concurrency support. Implemented with sub-millisecond precision for seamless delivery.",
            tags: ["WebRTC", "Socket.io", "React"],
            category: "Full Stack",
            github: "https://github.com/amanverma1729/Video-Conferencing",
            link: "https://github.com/amanverma1729/Video-Conferencing",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            title: "RAG AI Assistant",
            description: "High-intelligence retrieval system using vector embeddings to provide specialized knowledge responses with zero hallucination drift.",
            tags: ["Python", "LangChain", "OpenAI"],
            category: "AI/ML",
            github: "https://github.com/amanverma1729/RAG-AI-Assistant",
            link: "https://github.com/amanverma1729/RAG-AI-Assistant",
            gradient: "from-violet-500 to-fuchsia-500"
        },
        {
            title: "E-commerce Engine",
            description: "Multi-tenant digital storefront with atomic transaction handling, secure vault payments, and real-time inventory telemetry.",
            tags: ["React", "Express", "Stripe"],
            category: "Full Stack",
            github: "https://github.com/amanverma1729/E-commerce-Engine",
            link: "https://github.com/amanverma1729/E-commerce-Engine",
            gradient: "from-emerald-400 to-cyan-500"
        },
        {
            title: "ResumeGen",
            description: "Architected a professional career artifact generator with a focus on atomic design principles and seamless data-to-PDF serialization.",
            tags: ["MongoDB", "Express", "React"],
            category: "Web Apps",
            github: "https://github.com/amanverma1729/ResumeGen",
            link: "https://github.com/amanverma1729/ResumeGen",
            gradient: "from-orange-500 to-pink-500"
        },
        {
            title: "Spotify Replica",
            description: "High-performance audio streaming interface with kinetic playback controls and a fully responsive orbital layout.",
            tags: ["JavaScript", "Framer Motion"],
            category: "Web Apps",
            github: "https://github.com/amanverma1729/Spotify-Replica",
            link: "https://github.com/amanverma1729/Spotify-Replica",
            gradient: "from-green-400 to-emerald-600"
        }
    ];

    const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-10"
                >
                    Featured Projects
                </motion.h2>

                {/* Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                filter === cat 
                                    ? 'bg-gradient-to-r from-neon-blue to-neon-violet text-white shadow-lg shadow-neon-blue/25' 
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
