import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Layout, Terminal, Code, Server, Coffee, Database, Layers, GitBranch, Github, Palette, Sparkles } from 'lucide-react';

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Frontend', 'Backend', 'Tools'];

    const allSkills = [
        { name: "React JS", category: "Frontend", icon: <Atom size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", category: "Frontend", icon: <Layout size={32} />, color: "from-cyan-400 to-cyan-600" },
        { name: "JavaScript", category: "Frontend", icon: <Terminal size={32} />, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML5 / CSS3", category: "Frontend", icon: <Code size={32} />, color: "from-orange-400 to-orange-600" },
        
        { name: "Node.js", category: "Backend", icon: <Server size={32} />, color: "from-green-400 to-green-600" },
        { name: "Java", category: "Backend", icon: <Coffee size={32} />, color: "from-red-400 to-red-600" },
        { name: "MongoDB", category: "Backend", icon: <Database size={32} />, color: "from-green-500 to-green-700" },
        { name: "Python", category: "Backend", icon: <Layers size={32} />, color: "from-blue-500 to-yellow-500" },
        
        { name: "Git", category: "Tools", icon: <GitBranch size={32} />, color: "from-orange-500 to-red-500" },
        { name: "GitHub", category: "Tools", icon: <Github size={32} />, color: "from-gray-600 to-gray-800" },
        { name: "Figma", category: "Tools", icon: <Palette size={32} />, color: "from-purple-400 to-pink-600" },
        { name: "Framer", category: "Tools", icon: <Sparkles size={32} />, color: "from-blue-400 to-purple-600" },
    ];

    const filteredSkills = filter === 'All' ? allSkills : allSkills.filter(skill => skill.category === filter);

    return (
        <section id="skills" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-10"
                >
                    My Skills
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

                {/* Skills Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full"
                >
                    <AnimatePresence>
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group aspect-square"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
