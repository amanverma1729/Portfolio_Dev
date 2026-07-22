import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GitFork, Cpu, Trophy, User, ArrowRight } from 'lucide-react';
import profile from '../assets/profile.jpg';

const CountUpNumber = ({ target, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    
    // Extract numeric value from string like "15+" or "300+"
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / numericTarget));
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= numericTarget) {
                clearInterval(timer);
            }
        }, Math.max(stepTime, 20));

        return () => clearInterval(timer);
    }, [isInView, numericTarget]);

    return (
        <span ref={ref}>
            {isInView ? count : 0}{suffix}
        </span>
    );
};

const About = () => {
    const stats = [
        {
            value: "15+",
            numeric: "15",
            label: "Projects Completed",
            icon: <Code2 size={24} className="text-[#00D4FF]" />,
            gradient: "from-[#6C4DFF]/20 to-[#00D4FF]/20"
        },
        {
            value: "25+",
            numeric: "25",
            label: "GitHub Repositories",
            icon: <GitFork size={24} className="text-[#9D4EDD]" />,
            gradient: "from-[#9D4EDD]/20 to-[#6C4DFF]/20"
        },
        {
            value: "18+",
            numeric: "18",
            label: "Technologies Learned",
            icon: <Cpu size={24} className="text-[#00D4FF]" />,
            gradient: "from-[#00D4FF]/20 to-[#9D4EDD]/20"
        },
        {
            value: "300+",
            numeric: "300",
            label: "Problem Solving (DSA)",
            icon: <Trophy size={24} className="text-[#6C4DFF]" />,
            gradient: "from-[#6C4DFF]/20 to-[#9D4EDD]/20"
        }
    ];

    return (
        <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <User size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Get To Know Me</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Me</span>
                    </h2>
                </motion.div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Column: Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-3 group border border-[#6C4DFF]/30 hover:border-[#00D4FF]/50 transition-all duration-500 shadow-2xl">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <img
                                    src={profile}
                                    alt="Aman Verma"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent opacity-80" />
                                
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080812]/80 backdrop-blur-md border border-white/10">
                                    <h4 className="text-lg font-bold text-white">Aman Verma</h4>
                                    <p className="text-xs text-[#00D4FF] font-mono">B.Tech Computer Science (2026)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#6C4DFF]/20 space-y-4 shadow-xl">
                            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                                I'm <span className="font-bold text-white">Aman Verma</span>, a Computer Science graduate passionate about building modern full-stack applications using <span className="text-[#00D4FF] font-semibold">Java, Spring Boot, React, SQL, REST APIs</span>, and <span className="text-[#9D4EDD] font-semibold">AI technologies</span>.
                            </p>
                            
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                I enjoy transforming ideas into scalable software products with clean architecture, responsive user interfaces, and optimized backend systems. I continuously improve my development skills through real-world projects, open-source learning, and problem solving.
                            </p>

                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                When I'm not coding, I explore new technologies, improve my Java backend skills, and work on AI-powered applications.
                            </p>

                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <a
                                    href="#contact"
                                    className="btn-primary text-xs sm:text-sm gap-2"
                                >
                                    <span>Get In Touch</span>
                                    <ArrowRight size={16} />
                                </a>
                                <a
                                    href="#experience"
                                    className="btn-secondary text-xs sm:text-sm"
                                >
                                    View Experience
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* STATS GRID */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group border border-[#6C4DFF]/20"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono">
                                <CountUpNumber target={stat.numeric} />
                            </h3>
                            <p className="text-xs sm:text-sm font-medium text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
