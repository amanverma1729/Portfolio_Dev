import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Github, Linkedin, Instagram } from 'lucide-react';
import profile from '../assets/profile.jpg';

const TypingText = ({ texts, speed = 100, wait = 2000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), wait);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts, speed, wait]);

    return (
        <span className="text-neon-cyan">
            {texts[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = ({
    name = "Aman Verma",
    role = "Full Stack Engineer"
}) => {
    const typingTexts = [
        "Engineering high-performance solutions with weightless precision.",
        "Designing user-focused web solutions with architectural integrity.",
        "Bridging the gap between complex logic and seamless design.",
        "Defying limits to build the next generation of web interfaces."
    ];

    // Mouse Parallax Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Transformations for different layers
    const x1 = useTransform(mouseX, [-500, 500], [-30, 30]);
    const y1 = useTransform(mouseY, [-500, 500], [-30, 30]);

    const x2 = useTransform(mouseX, [-500, 500], [40, -40]);
    const y2 = useTransform(mouseY, [-500, 500], [40, -40]);

    const x3 = useTransform(mouseX, [-500, 500], [-15, 15]);
    const y3 = useTransform(mouseY, [-500, 500], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 text-center lg:text-left relative pt-32 pb-20 overflow-hidden">
            {/* Parallax Background Blobs */}
            <motion.div
                style={{ x: x1, y: y1 }}
                className="absolute top-1/4 left-1/4 w-40 h-40 glass-card rounded-full blur-2xl neon-glow-cyan opacity-10 dark:opacity-20 pointer-events-none"
            />
            <motion.div
                style={{ x: x2, y: y2 }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 glass-card rounded-full blur-2xl neon-glow-violet opacity-10 dark:opacity-20 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col w-full">
                {/* Main Split Layout */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-12 w-full mt-10">
                    
                    {/* LEFT COLUMN: Profile & Identity */}
                    <div className="flex flex-col items-center flex-1 w-full lg:max-w-xl text-center">
                        {/* Profile Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="relative mb-10"
                        >
                            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full p-2 glass-card neon-glow-cyan overflow-hidden animate-float-slow hover:neon-glow-violet group transition-all duration-500">
                                <img
                                    src={profile}
                                    alt={name}
                                    className="w-full h-full object-cover rounded-full transition-all duration-700 hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400?text=Aman+Verma";
                                        e.target.className = "w-full h-full object-cover rounded-full opacity-50";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                            </div>

                            {/* Orbital Rings */}
                            <motion.div style={{ x: x3, y: y3 }} className="absolute -inset-6 border border-neon-violet/30 rounded-full animate-orbit pointer-events-none" />
                            <motion.div style={{ animationDirection: 'reverse', animationDuration: '30s', x: x2, y: y2 }} className="absolute -inset-10 border border-neon-cyan/20 rounded-full animate-orbit pointer-events-none opacity-40" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="inline-flex items-center justify-center gap-3 px-6 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm md:text-base font-black text-neon-cyan mb-8 shadow-lg shadow-neon-cyan/5 transition-colors"
                        >
                            <Sparkles size={18} />
                            <span>SYSTEM ACCESS GRANTED</span>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Info & Actions */}
                    <div className="flex flex-col items-center lg:items-start flex-1 w-full lg:max-w-2xl lg:pt-8">
                        <motion.h1
                            className="text-fluid-h1 font-black tracking-tighter mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            I'm <span className="text-gradient leading-[1.2]">{name}</span><br />
                            <span className="text-fluid-h2 text-space-900/80 dark:text-white/80 transition-colors uppercase tracking-tighter mt-2 block">{role}</span>
                        </motion.h1>

                        <motion.p
                            className="text-fluid-p text-space-900/50 dark:text-white/50 mb-12 max-w-2xl leading-relaxed font-bold min-h-[5rem] lg:min-h-[8rem] transition-colors"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            <TypingText texts={typingTexts} speed={80} wait={2500} />
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        >
                            <motion.a
                                href="#projects"
                                className="w-full sm:w-auto px-10 py-5 border border-neon-cyan/50 bg-neon-cyan/10 font-black text-lg hover:neon-glow-cyan transition-all text-space-950 dark:text-white uppercase tracking-widest relative overflow-hidden group/btn text-center"
                                whileHover={{ y: -6, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Access Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                            </motion.a>
                            <motion.a
                                href="https://a-manverma.github.io/Portfolio/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 font-black text-lg text-space-950/70 dark:text-white/70 hover:text-neon-violet transition-all uppercase tracking-widest flex items-center justify-center gap-3 group/cv"
                                whileHover={{ x: 10 }}
                            >
                                <span className="group-hover/cv:underline decoration-neon-violet underline-offset-8">Download CV</span>
                                <ChevronDown size={24} className="-rotate-90 group-hover/cv:translate-x-2 transition-transform" />
                            </motion.a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-6 w-full mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        >
                            <a href="https://github.com/amanverma1729" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-cyan hover:text-neon-cyan hover:neon-glow-cyan transition-all text-space-950 dark:text-white rounded-full group">
                                <Github size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://in.linkedin.com/in/amanverma1729" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-blue hover:text-neon-blue transition-all text-space-950 dark:text-white rounded-full group">
                                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.instagram.com/aman_verma1729" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-rose hover:text-neon-rose transition-all text-space-950 dark:text-white rounded-full group">
                                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Technical Impact HUD */}
                <motion.div
                    className="mt-20 mx-auto flex flex-wrap justify-center gap-10 md:gap-24 border-y border-black/5 dark:border-white/5 py-12 w-full max-w-5xl relative shadow-2xl shadow-black/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                >
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-neon-cyan" />
                    <div className="absolute top-0 right-0 w-8 h-[1px] bg-neon-violet" />
                    <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-neon-cyan" />
                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-neon-violet" />

                    {[
                        { label: "Projects Delivered", value: "12+", color: "text-neon-cyan" },
                        { label: "System Uptime", value: "99.9%", color: "text-neon-emerald" },
                        { label: "Core Integrity", value: "100%", color: "text-neon-violet" },
                        { label: "Optimization", value: "Extreme", color: "text-neon-rose" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group/stat">
                            <span className={`text-fluid-h3 font-black transition-all duration-500 group-hover:scale-110 ${stat.color}`}>{stat.value}</span>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-space-900/40 dark:text-white/40 font-black">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-space-950/20 dark:text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-[0.5em] font-black">Scroll Exploration</span>
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={28} />
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Hero;
