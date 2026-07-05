import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingBackground from './components/FloatingBackground';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CustomCursor from './components/CustomCursor';
import MissionLoading from './components/MissionLoading';
import ScrollProgress from './components/ScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Globe, Rocket, Terminal, Code, Database, Server,
    Layers, GitBranch, Github, Palette, Layout, Atom, Coffee,
    Mail, Phone, MapPin, Linkedin, GraduationCap, Calendar, Star,
    FileText, Briefcase, CheckCircle2, Send, Sun, Moon,
    Instagram, Twitter, MessageCircle, Ghost, Sparkles
} from 'lucide-react';
import logo from './assets/logo.png';

function App() {
    const [loading, setLoading] = useState(true);
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const formData = new FormData(e.target);
            const response = await fetch("https://formsubmit.co/ajax/amanverma0202004@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const projects = [
        {
            title: "Video Conferencing",
            description: "Real-time communication platform with high-concurrency support. Implemented with sub-millisecond precision for seamless delivery.",
            impact: "Engineered sub-millisecond latency for 50+ concurrent streams using WebRTC and Socket.io.",
            tags: ["WebRTC", "Socket.io", "React", "Node.js"],
            github: "https://github.com/A-manverma/Video-Conferencing",
            link: "https://github.com/A-manverma/Video-Conferencing",
            accentColor: "rose"
        },
        {
            title: "RAG AI Assistant",
            description: "High-intelligence retrieval system using vector embeddings to provide specialized knowledge responses with zero hallucination drift.",
            impact: "Architected a vector-search pipeline that improved response relevance by 65% across technical documentation.",
            tags: ["Python", "LangChain", "VectorDB", "OpenAI"],
            github: "https://github.com/A-manverma/RAG-AI-Assistant",
            link: "https://github.com/A-manverma/RAG-AI-Assistant",
            accentColor: "rose"
        },
        {
            title: "E-commerce Engine",
            description: "Multi-tenant digital storefront with atomic transaction handling, secure vault payments, and real-time inventory telemetry.",
            impact: "Implemented atomic ACID transactions supporting 1,000+ daily orders with 0% data inconsistency.",
            tags: ["React", "Express", "Stripe", "MongoDB"],
            github: "https://github.com/A-manverma/E-commerce-Engine",
            link: "https://github.com/A-manverma/E-commerce-Engine",
            accentColor: "rose"
        },
        {
            title: "ResumeGen",
            description: "Architected a professional career artifact generator with a focus on atomic design principles and seamless data-to-PDF serialization.",
            impact: "Streamlined PDF generation overhead by 30% through advanced data-to-blob serialization techniques.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/A-manverma/ResumeGen",
            link: "https://github.com/A-manverma/ResumeGen",
            accentColor: "rose"
        },
        {
            title: "Spotify Replica",
            description: "High-performance audio streaming interface with kinetic playback controls and a fully responsive orbital layout.",
            impact: "Delivered a pixel-perfect, zero-gravity UI with 60fps animations across all modern web viewports.",
            tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
            github: "https://github.com/A-manverma/Spotify-Replica",
            link: "https://github.com/A-manverma/Spotify-Replica",
            accentColor: "rose"
        }
    ];

    const skillGroups = [
        {
            category: "Frontend Architecture",
            accent: "cyan",
            skills: [
                { icon: <Atom size={24} />, name: "React JS" },
                { icon: <Layout size={24} />, name: "Tailwind CSS" },
                { icon: <Terminal size={24} />, name: "JavaScript" },
                { icon: <Code size={24} />, name: "HTML5 / CSS3" }
            ]
        },
        {
            category: "Backend Infrastructure",
            accent: "violet",
            skills: [
                { icon: <Server size={24} />, name: "Node.js / Express" },
                { icon: <Coffee size={24} />, name: "Java / Spring" },
                { icon: <Database size={24} />, name: "MongoDB / MySQL" },
                { icon: <Layers size={24} />, name: "Python / AI" }
            ]
        },
        {
            category: "Systems & Logic",
            accent: "emerald",
            skills: [
                { icon: <Cpu size={24} />, name: "Data Structures" },
                { icon: <Code size={24} />, name: "OOPs Principles" },
                { icon: <GitBranch size={22} />, name: "Git / GitHub" },
                { icon: <Terminal size={24} />, name: "System Design" }
            ]
        },
        {
            category: "Design & UX",
            accent: "rose",
            skills: [
                { icon: <Palette size={22} />, name: "UI/UX Design" },
                { icon: <Sparkles size={22} />, name: "Framer Motion" },
                { icon: <Ghost size={22} />, name: "Lucide Icons" },
                { icon: <Layout size={22} />, name: "Atomic Design" }
            ]
        }
    ];

    const education = [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "NITRA Technical Campus, Ghaziabad",
            duration: "2022 – 2026",
            details: "CGPA: 6.8 | Specialized in Web Development & Java"
        },
        {
            degree: "Secondary Education (XII)",
            institution: "St. Kamal Children Senior Secondary School",
            duration: "2022",
            details: "Percentage: 71.33% | Science Stream"
        },
        {
            degree: "Primary Education (X)",
            institution: "St. Kamal Children Senior Secondary School",
            duration: "2020",
            details: "Percentage: 81.33%"
        }
    ];

    const contactInfo = [
        { icon: <Mail size={22} />, text: "aman835400@gmail.com", href: "mailto:aman835400@gmail.com", color: "text-neon-cyan" },
        { icon: <Phone size={22} />, text: "8354002731", href: "tel:8354002731", color: "text-neon-violet" },
        { icon: <MapPin size={22} />, text: "Ghaziabad, India", href: "#", color: "text-neon-emerald" },
        { icon: <Linkedin size={22} />, text: "Aman Verma", href: "https://www.linkedin.com/in/amanverma2022/", color: "text-neon-blue" },
        { icon: <Github size={22} />, text: "GitHub Archive", href: "https://github.com/A-manverma", color: "text-space-950 dark:text-white" },
    ];

    return (
        <div className="relative min-h-screen text-space-950 dark:text-white selection:bg-neon-cyan/30 overflow-x-hidden bg-white dark:bg-space-950 font-medium transition-colors">
            <AnimatePresence>
                {loading && <MissionLoading onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <CustomCursor />
            <ScrollProgress />
            <FloatingBackground />
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <main className="relative z-10">
                <Hero
                    name="Aman Verma"
                    role="Full Stack Engineer"
                />

                {/* About / Mission Section */}
                <Section id="mission" title="The Mission" subtitle="Objectives" accentColor="cyan">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-12 md:p-16 border border-white/5 bg-white/[0.01] transition-all duration-700 hover:bg-white/[0.03] group/hud overflow-hidden"
                        >
                            {/* HUD Brackets */}
                            <div className="hud-bracket hud-bracket-tl group-hover/hud:border-neon-cyan transition-colors" />
                            <div className="hud-bracket hud-bracket-tr group-hover/hud:border-neon-cyan transition-colors" />
                            <div className="hud-bracket hud-bracket-bl group-hover/hud:border-neon-cyan transition-colors" />
                            <div className="hud-bracket hud-bracket-br group-hover/hud:border-neon-cyan transition-colors" />

                            {/* HUD Grid & Scan */}
                            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover/hud:opacity-100 transition-opacity duration-700">
                                <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent animate-scan" />
                            </div>

                            <div className="relative z-10 text-center">
                                <p className="text-fluid-p text-space-900/70 dark:text-white/70 leading-relaxed font-bold mb-12 max-w-2xl mx-auto transition-colors">
                                    Final-year B.Tech CSE student at NITRA. Proficient in React, Node.js, and Java,
                                    with a passion for designing efficient, <span className="text-neon-cyan neon-glow-cyan">user-focused</span>
                                    web solutions. Continuously pushing the boundaries of interface speed and structural integrity.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {contactInfo.map((info, i) => (
                                        <motion.a
                                            key={info.text}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3 px-5 py-2.5 border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-[10px] font-black text-space-900/40 dark:text-white/40 hover:text-space-950 dark:hover:text-white hover:border-neon-cyan/40 transition-all uppercase tracking-[0.2em] relative group/link overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-neon-cyan/5 -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500" />
                                            <span className={`${info.color} relative z-10`}>{info.icon}</span>
                                            <span className="relative z-10">{info.text}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Section>

                {/* Skills Section */}
                <Section id="skills" title="Technical Arsenal" subtitle="Payload" accentColor="emerald">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 group/hud overflow-hidden"
                            >
                                <div className={`hud-bracket hud-bracket-tl group-hover/hud:border-neon-${group.accent} transition-colors`} />
                                <div className={`hud-bracket hud-bracket-tr group-hover/hud:border-neon-${group.accent} transition-colors`} />
                                <div className="hud-grid absolute inset-0 opacity-10 pointer-events-none" />

                                <h4 className={`text-neon-${group.accent} font-black text-[10px] mb-12 uppercase tracking-[0.5em] opacity-40 group-hover/hud:opacity-100 dark:group-hover/hud:opacity-100 transition-opacity`}>{group.category}</h4>
                                <div className="space-y-10 relative z-10">
                                    {group.skills.map((skill) => (
                                        <div key={skill.name} className="flex items-center gap-5 text-space-950/40 dark:text-white/40 hover:text-space-950 dark:hover:text-white transition-all group/skill-item">
                                            <div className={`text-neon-${group.accent} group-hover/skill-item:scale-125 transition-all duration-500`}>
                                                {skill.icon}
                                            </div>
                                            <span className="text-lg font-black tracking-tighter uppercase">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Education Section */}
                <Section id="education" title="Academic Trajectory" subtitle="Deployment" accentColor="amber">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="relative p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 group/hud overflow-hidden flex flex-col md:flex-row gap-12"
                            >
                                <div className="hud-bracket hud-bracket-tl group-hover/hud:border-neon-amber/50 transition-colors" />
                                <div className="hud-bracket hud-bracket-br group-hover/hud:border-neon-amber/50 transition-colors" />
                                <div className="hud-grid absolute inset-0 opacity-10 pointer-events-none" />

                                <div className="flex-shrink-0 w-24 h-24 border border-neon-amber/20 bg-white/5 flex items-center justify-center text-neon-amber group-hover/hud:neon-glow-amber transition-all duration-700">
                                    <GraduationCap size={44} />
                                </div>
                                <div className="flex-grow relative z-10">
                                    <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                        <h3 className="text-fluid-h3 font-black text-space-950 dark:text-white group-hover/hud:text-neon-amber transition-colors leading-tight uppercase tracking-tighter">{edu.degree}</h3>
                                        <div className="flex items-center gap-3 text-neon-amber text-[10px] font-black uppercase tracking-[0.3em] border border-neon-amber/20 px-5 py-2.5 h-fit bg-neon-amber/5 transition-colors">
                                            <Calendar size={12} />
                                            {edu.duration}
                                        </div>
                                    </div>
                                    <h4 className="text-space-900/60 dark:text-white/60 font-black text-fluid-p mb-8 flex items-center gap-4 uppercase tracking-tighter transition-colors">
                                        <MapPin size={22} className="text-neon-violet opacity-50" />
                                        {edu.institution}
                                    </h4>
                                    <div className="inline-flex items-center gap-4 text-xs font-black text-neon-amber uppercase tracking-[0.3em] border-l-2 border-neon-amber/40 dark:border-neon-amber/20 pl-6 py-1 transition-colors">
                                        <Star size={18} fill="currentColor" className="opacity-70" />
                                        {edu.details}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Projects Section */}
                <Section id="projects" title="Stellar Projects" subtitle="Artifacts" accentColor="rose">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                delay={i * 0.1}
                                accentColor="rose"
                            />
                        ))}
                    </div>
                </Section>

                {/* Contact Section */}
                <Section id="contact" title="Establish Contact" subtitle="Telemetry" accentColor="violet">
                    <div className="max-w-2xl mx-auto relative p-16 border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-1000 group/hud overflow-hidden">
                        <div className="hud-bracket hud-bracket-tl group-hover/hud:border-neon-violet transition-colors" />
                        <div className="hud-bracket hud-bracket-tr group-hover/hud:border-neon-violet transition-colors" />
                        <div className="hud-bracket hud-bracket-bl group-hover/hud:border-neon-violet transition-colors" />
                        <div className="hud-bracket hud-bracket-br group-hover/hud:border-neon-violet transition-colors" />
                        <div className="hud-grid absolute inset-0 opacity-10 pointer-events-none" />

                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="py-12 flex flex-col items-center gap-8 relative z-10"
                                >
                                    <div className="w-24 h-24 border-2 border-neon-violet bg-neon-violet/10 flex items-center justify-center text-neon-violet neon-glow-violet animate-pulse">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-fluid-h2 font-black text-space-950 dark:text-white uppercase tracking-tighter transition-colors">Message Sent Successfully</h3>
                                    <p className="text-fluid-base text-space-900/40 dark:text-white/40 font-bold max-w-sm mx-auto uppercase tracking-widest transition-colors">
                                        Thank you for reaching out. I'll get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="relative z-10"
                                >
                                    <h3 className="text-fluid-h2 font-black mb-8 text-space-950 dark:text-white uppercase tracking-tighter transition-colors">Let's Connect</h3>
                                    <p className="text-fluid-base text-space-900/40 dark:text-white/40 mb-14 font-bold leading-relaxed uppercase tracking-widest transition-colors">
                                        I'm currently available for new projects and collaborations.
                                    </p>
                                    <form className="space-y-6" onSubmit={handleContactSubmit}>
                                        <div className="relative group/input">
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="YOUR NAME"
                                                className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-none px-10 py-5 outline-none focus:border-neon-violet transition-all font-black text-lg placeholder:text-space-900/10 dark:placeholder:text-white/10 uppercase tracking-[0.3em] text-space-950 dark:text-white"
                                            />
                                            <div className="absolute inset-0 border border-neon-violet opacity-0 group-focus-within/input:opacity-50 pointer-events-none transition-opacity" />
                                        </div>
                                        <div className="relative group/input">
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="YOUR@EMAIL.COM"
                                                className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-none px-10 py-5 outline-none focus:border-neon-violet transition-all font-black text-lg placeholder:text-space-900/10 dark:placeholder:text-white/10 uppercase tracking-[0.3em] text-space-950 dark:text-white"
                                            />
                                            <div className="absolute inset-0 border border-neon-violet opacity-0 group-focus-within/input:opacity-50 pointer-events-none transition-opacity" />
                                        </div>
                                        <div className="relative group/input">
                                            <textarea
                                                required
                                                name="message"
                                                rows="4"
                                                placeholder="YOUR MESSAGE..."
                                                className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-none px-10 py-5 outline-none focus:border-neon-violet transition-all font-black text-lg placeholder:text-space-900/10 dark:placeholder:text-white/10 uppercase tracking-[0.3em] text-space-950 dark:text-white resize-none"
                                            ></textarea>
                                            <div className="absolute inset-0 border border-neon-violet opacity-0 group-focus-within/input:opacity-50 pointer-events-none transition-opacity" />
                                        </div>
                                        <motion.button
                                            disabled={formStatus === 'sending'}
                                            className="w-full py-6 border border-neon-violet/50 bg-neon-violet/10 text-space-950 dark:text-white font-black hover:bg-neon-violet/20 hover:neon-glow-violet transition-all text-lg tracking-[0.4em] uppercase disabled:opacity-50 relative overflow-hidden group/btn"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                                            {formStatus === 'sending' ? (
                                                <div className="w-6 h-6 border-2 border-black/30 dark:border-white/30 border-t-neon-violet rounded-full animate-spin mx-auto" />
                                            ) : (
                                                <div className="flex items-center justify-center gap-4">
                                                    <Send size={20} />
                                                    <span>SEND MESSAGE</span>
                                                </div>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Section>
            </main>

            <footer className="relative z-10 py-12 md:py-32 border-t border-black/10 dark:border-white/10 mt-32 bg-white dark:bg-space-950 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 mb-16 md:mb-24 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 font-black text-3xl tracking-tighter text-space-950 dark:text-white transition-colors">
                            <div className="w-16 h-16 md:w-14 md:h-14 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center p-3 transition-colors">
                                <img src={logo} alt="Aman Verma Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-gradient leading-none">AMAN VERMA</span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 text-xs text-space-950/40 dark:text-white/40 font-black uppercase tracking-[0.4em] transition-colors max-w-sm md:max-w-none">
                            <a href="https://github.com/A-manverma" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-all flex items-center gap-2 group/link whitespace-nowrap">
                                <Github size={16} className="group-hover/link:text-neon-cyan transition-colors" />
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/amanverma2022/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-all flex items-center gap-2 group/link whitespace-nowrap">
                                <Linkedin size={16} className="group-hover/link:text-neon-cyan transition-colors" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://x.com/AmanVerma1729" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-all flex items-center gap-2 group/link whitespace-nowrap">
                                <Twitter size={16} className="group-hover/link:text-neon-cyan transition-colors" />
                                <span>X (Twitter)</span>
                            </a>
                            <a href="https://www.instagram.com/aman_verma1729/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-all flex items-center gap-2 group/link whitespace-nowrap">
                                <Instagram size={16} className="group-hover/link:text-neon-cyan transition-colors" />
                                <span>Instagram</span>
                            </a>
                            <a href="https://wa.me/918354002731" target="_blank" rel="noopener noreferrer" className="hover:text-neon-emerald transition-all flex items-center gap-2 group/link whitespace-nowrap">
                                <MessageCircle size={16} className="group-hover/link:text-neon-emerald transition-colors" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 border-t border-black/5 dark:border-white/5 pt-16 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 text-[10px] md:text-xs text-space-950/40 dark:text-white/40 font-black uppercase tracking-[0.4em] transition-colors">
                            <span>© 2026 Aman Verma. All Rights Reserved.</span>
                            <span className="opacity-40 md:opacity-100">Structural Integrity Verified</span>
                        </div>

                        <div className="transition-colors">
                            <p className="text-[10px] md:text-xs text-space-950/20 dark:text-white/20 font-black uppercase tracking-widest mb-2">
                                Engineered for Professional Excellence
                            </p>
                            <p className="text-[9px] md:text-[10px] text-space-950/10 dark:text-white/10 font-bold uppercase">
                                Precision & Performance
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
