import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
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
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-space-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
                
                {/* Logo - Left */}
                <motion.div
                    className="flex items-center gap-3 font-bold text-xl cursor-pointer shrink-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-8 h-8 md:w-10 md:h-10">
                        <img src={logo} alt="AV Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="tracking-tight text-white hidden sm:block">Aman Verma</span>
                </motion.div>

                {/* Desktop Links - Center */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8 px-4">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className={`text-[13px] font-medium transition-all duration-300 relative py-2 ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,85,255,0.8)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Download Resume CTA - Right */}
                <div className="flex items-center gap-4 shrink-0">
                    <motion.a
                        href="https://a-manverma.github.io/Portfolio/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/5 hover:border-white/40 transition-all"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Download size={16} />
                        Download Resume
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                        className="absolute top-full left-0 right-0 bg-space-950/95 backdrop-blur-xl lg:hidden border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-medium transition-colors ${activeSection === link.id ? 'text-neon-blue' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://a-manverma.github.io/Portfolio/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-white"
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
