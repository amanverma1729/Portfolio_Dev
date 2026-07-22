import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'projects', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Certifications', href: '#certifications', id: 'certifications' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'GitHub', href: 'https://github.com/amanverma1729', isExternal: true },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3.5 bg-[#080812]/80 backdrop-blur-xl border-b border-[#6C4DFF]/20 shadow-xl shadow-[#080812]/50' : 'py-5 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center w-full">
                
                {/* Logo - Left */}
                <motion.div
                    className="flex items-center gap-3 font-bold text-xl cursor-pointer shrink-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] p-[2px] shadow-lg shadow-[#6C4DFF]/30">
                        <div className="w-full h-full bg-[#080812] rounded-[10px] flex items-center justify-center overflow-hidden">
                            <img src={logo} alt="Aman Verma" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="tracking-tight text-white font-bold text-lg leading-none">Aman Verma</span>
                        <span className="text-[10px] text-[#00D4FF] tracking-widest font-mono uppercase mt-0.5">Developer</span>
                    </div>
                </motion.div>

                {/* Desktop Links - Center */}
                <div className="hidden md:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#120E26]/60 border border-[#6C4DFF]/20 backdrop-blur-md">
                    {navLinks.map((link) => (
                        link.isExternal ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors rounded-full flex items-center gap-1"
                            >
                                <Github size={14} />
                                {link.name}
                            </a>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all relative rounded-full ${activeSection === link.id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeNavBg"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C4DFF]/30 to-[#00D4FF]/20 border border-[#6C4DFF]/50 -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        )
                    ))}
                </div>

                {/* Theme Toggle & Resume Button - Right */}
                <div className="flex items-center gap-3 shrink-0">
                    
                    {/* Theme Toggle Button */}
                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="p-2.5 rounded-xl bg-[#120E26]/80 border border-[#6C4DFF]/30 text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300 shadow-md flex items-center justify-center"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={theme}
                                initial={{ y: -10, opacity: 0, rotate: -45 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 10, opacity: 0, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === 'dark' ? (
                                    <Sun size={18} className="text-[#00D4FF]" />
                                ) : (
                                    <Moon size={18} className="text-[#6C4DFF]" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>

                    {/* Resume Button */}
                    <motion.a
                        href="https://a-manverma.github.io/Portfolio/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] p-[1.5px] group shadow-lg shadow-[#6C4DFF]/20 hover:shadow-[#00D4FF]/40 transition-all duration-300"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <div className="w-full h-full bg-[#080812] group-hover:bg-transparent rounded-[10px] px-4 py-2 flex items-center gap-2 transition-colors duration-300">
                            <Download size={15} className="text-[#00D4FF] group-hover:text-white transition-colors" />
                            <span>Resume</span>
                        </div>
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 bg-[#120E26] border border-[#6C4DFF]/30 rounded-xl hover:border-[#00D4FF] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X size={22} className="text-[#00D4FF]" /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-[#080812]/95 backdrop-blur-2xl md:hidden border-b border-[#6C4DFF]/20 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.isExternal ? "_blank" : "_self"}
                                    rel={link.isExternal ? "noopener noreferrer" : ""}
                                    className={`py-2.5 px-4 rounded-xl text-base font-medium transition-all ${activeSection === link.id ? 'bg-[#6C4DFF]/20 text-[#00D4FF] border border-[#6C4DFF]/40' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://a-manverma.github.io/Portfolio/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 mt-3 px-6 py-3.5 bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#6C4DFF]/30"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
