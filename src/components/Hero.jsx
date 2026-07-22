import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Download, ArrowRight, Sparkles } from 'lucide-react';
import profile from '../assets/profile.jpg';

const roles = [
    "Java Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "AI Enthusiast"
];

const Hero = () => {
    // Typing Effect State
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timer;

        if (!isDeleting && displayedText.length < currentRole.length) {
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }, 80);
        } else if (!isDeleting && displayedText.length === currentRole.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && displayedText.length > 0) {
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
            }, 40);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    // Mouse Parallax Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x1 = useTransform(mouseX, [-500, 500], [-25, 25]);
    const y1 = useTransform(mouseY, [-500, 500], [-25, 25]);

    const x2 = useTransform(mouseX, [-500, 500], [35, -35]);
    const y2 = useTransform(mouseY, [-500, 500], [35, -35]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="home" className="min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 relative pt-28 pb-16 overflow-hidden">
            {/* Ambient Lighting Orbs */}
            <motion.div style={{ x: x1, y: y1 }} className="absolute top-1/4 right-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-[#6C4DFF] rounded-full blur-[130px] opacity-25 pointer-events-none" />
            <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-[#9D4EDD] rounded-full blur-[150px] opacity-20 pointer-events-none" />
            <div className="absolute top-1/3 left-10 w-64 h-64 bg-[#00D4FF] rounded-full blur-[120px] opacity-15 pointer-events-none" />

            {/* Floating 3D/Abstract Shapes */}
            <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute top-1/4 right-[12%] w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C4DFF]/30 to-[#00D4FF]/30 border border-white/10 backdrop-blur-xl shadow-2xl shadow-[#6C4DFF]/20"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg) rotateY(30deg)' }}
            />
            <motion.div
                animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden lg:block absolute bottom-1/3 right-[4%] w-20 h-20 rounded-full bg-gradient-to-tr from-[#9D4EDD]/40 to-[#00D4FF]/20 border border-white/10 backdrop-blur-md"
            />
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="hidden md:block absolute top-1/3 left-[6%] w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00D4FF]/25 to-[#6C4DFF]/25 border border-white/10 backdrop-blur-md rotate-12"
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12 w-full">

                    {/* LEFT COLUMN: Hero Content */}
                    <div className="flex flex-col items-center lg:items-start flex-1 w-full text-center lg:text-left z-10">

                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/80 backdrop-blur-md mb-6 shadow-lg shadow-[#6C4DFF]/10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
                            </span>
                            <span className="text-xs font-mono text-[#00D4FF] tracking-wide font-medium">Available for Opportunities</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="text-fluid-h1 font-extrabold tracking-tight mb-4 text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Hi, I'm <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">
                                Aman Verma
                            </span>
                        </motion.h1>

                        {/* Typing Animation Subtitle */}
                        <motion.div
                            className="h-10 sm:h-12 flex items-center mb-6 text-xl sm:text-2xl md:text-3xl font-bold font-mono text-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-[#00D4FF] mr-2">&gt;</span>
                            <span className="text-white">{displayedText}</span>
                            <span className="animate-pulse text-[#6C4DFF] ml-1">|</span>
                        </motion.div>

                        {/* Tagline & Short Bio */}
                        <motion.p
                            className="text-fluid-p text-gray-300 mb-8 max-w-xl leading-relaxed font-normal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Building scalable full-stack applications using <span className="text-white font-semibold">Java, Spring Boot, React and SQL</span>. Passionate Computer Science graduate dedicated to clean architecture and exceptional web experiences.
                        </motion.p>

                        {/* Call to Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a
                                href="https://a-manverma.github.io/Portfolio/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full sm:w-auto text-sm sm:text-base gap-2 group"
                            >
                                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                Download Resume
                            </a>
                            <a
                                href="#projects"
                                className="btn-secondary w-full sm:w-auto text-sm sm:text-base gap-2 group"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#00D4FF]" />
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-3 w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {[
                                {
                                    name: "GitHub",
                                    icon: <Github size={20} />,
                                    href: "https://github.com/amanverma1729",
                                    external: true,
                                },
                                {
                                    name: "LinkedIn",
                                    icon: <Linkedin size={20} />,
                                    href: "https://www.linkedin.com/in/amanverma1729/",
                                    external: true,
                                },
                                {
                                    name: "Email",
                                    icon: <Mail size={20} />,
                                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=amanverma0202004@gmail.com",
                                    external: true,
                                },
                                {
                                    name: "LeetCode",
                                    icon: <Code2 size={20} />,
                                    href: "https://leetcode.com/u/amanverma1729_/",
                                    external: true,
                                },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target={social.external ? "_blank" : "_self"}
                                    rel={social.external ? "noopener noreferrer" : ""}
                                    title={social.name}
                                    aria-label={social.name}
                                    className="p-3 rounded-xl bg-[#120E26]/80 border border-[#6C4DFF]/25 hover:border-[#00D4FF] hover:bg-[#6C4DFF]/20 text-gray-300 hover:text-[#00D4FF] transition-all duration-300 hover:scale-110 shadow-lg shadow-black/40"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Glowing Profile Visual */}
                    <div className="flex flex-col items-center justify-center flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.2 }}
                            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group"
                        >
                            {/* Outer Spinning Glowing Gradient Ring */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] opacity-80 blur-lg animate-pulse-glow group-hover:opacity-100 transition-opacity" />
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#6C4DFF] to-[#9D4EDD] opacity-60 animate-spin-slow" />

                            {/* Inner Ring Mask */}
                            <div className="absolute inset-[4px] rounded-full bg-[#080812] z-10" />

                            {/* Profile Image Wrapper */}
                            <div className="absolute inset-[8px] rounded-full overflow-hidden z-20 border-2 border-white/20 shadow-2xl">
                                <img
                                    src={profile}
                                    alt="Aman Verma"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                                    }}
                                />
                            </div>

                            {/* Floating Tech Badge (Java / Full Stack) */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-2 z-30 px-4 py-2 rounded-2xl bg-[#120E26]/90 border border-[#6C4DFF]/40 backdrop-blur-xl shadow-xl flex items-center gap-2"
                            >
                                <Sparkles size={16} className="text-[#00D4FF]" />
                                <span className="text-xs font-semibold text-white">Full Stack Java</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
