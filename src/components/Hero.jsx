import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import profile from '../assets/profile.jpg';

const Hero = ({
    name = "Aman Verma",
    role = "Full Stack Developer"
}) => {
    // Mouse Parallax Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Transformations for different layers
    const x1 = useTransform(mouseX, [-500, 500], [-30, 30]);
    const y1 = useTransform(mouseY, [-500, 500], [-30, 30]);

    const x2 = useTransform(mouseX, [-500, 500], [40, -40]);
    const y2 = useTransform(mouseY, [-500, 500], [40, -40]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center px-6 relative pt-32 pb-20 overflow-hidden">
            {/* Dark Background Base */}
            <div className="absolute inset-0 bg-space-950 pointer-events-none" />

            {/* Glowing Orbs */}
            <motion.div style={{ x: x1, y: y1 }} className="absolute top-1/4 right-1/3 w-64 h-64 bg-neon-blue rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-violet rounded-full blur-[120px] opacity-20 pointer-events-none" />

            {/* Floating CSS "3D" Shapes */}
            <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-[15%] w-16 h-16 bg-gradient-to-tr from-neon-blue to-neon-violet rounded-lg shadow-lg opacity-80 backdrop-blur-md"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)' }}
            />
            <motion.div 
                animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-[5%] w-24 h-24 rounded-full bg-gradient-to-bl from-neon-pink to-neon-violet opacity-60 blur-[2px]"
            />
            <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/4 right-[45%] w-12 h-12 bg-gradient-to-tr from-neon-cyan to-neon-blue opacity-50 rotate-45"
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12 w-full mt-10">
                    
                    {/* LEFT COLUMN: Text & CTAs */}
                    <div className="flex flex-col items-center lg:items-start flex-1 w-full lg:max-w-2xl text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                        >
                            <span className="text-sm font-medium text-gray-300">{role}</span>
                        </motion.div>

                        <motion.h1
                            className="text-fluid-h1 font-black tracking-tight mb-6 leading-tight text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Hi, I'm <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink">
                                {name}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-fluid-base text-gray-400 mb-10 max-w-lg leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            I build scalable web applications and exceptional digital experiences.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-violet text-white font-medium hover:opacity-90 transition-opacity text-center shadow-lg shadow-neon-blue/20"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-colors text-center"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-4 w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        >
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/amanverma1729" },
                                { icon: <Linkedin size={20} />, href: "https://in.linkedin.com/in/amanverma1729" },
                                { icon: <Twitter size={20} />, href: "https://x.com/AmanVerma1729" },
                                { icon: <Instagram size={20} />, href: "https://www.instagram.com/aman_verma1729" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-300 hover:text-white rounded-full">
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Profile Image */}
                    <div className="flex flex-col items-center justify-center flex-1 w-full lg:max-w-xl relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        >
                            {/* Glowing Gradient Border Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-neon-violet to-neon-pink opacity-80 blur-[2px] -rotate-12" />
                            <div className="absolute inset-[3px] rounded-full bg-space-950 z-10" />
                            
                            {/* Profile Image */}
                            <div className="absolute inset-[6px] rounded-full overflow-hidden z-20">
                                <img
                                    src={profile}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400?text=Aman+Verma";
                                    }}
                                />
                            </div>

                            {/* Status Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-space-900/80 backdrop-blur-md">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-medium text-gray-300">Available for work</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
