import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ghost, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ isDarkMode, toggleTheme }) => {
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
        const sections = ['home', 'mission', 'skills', 'education', 'projects', 'contact'];
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
        { name: 'Mission', href: '#mission', id: 'mission' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2 font-bold text-xl cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-12 h-12 glass-card flex items-center justify-center neon-glow-cyan overflow-hidden p-1">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="tracking-tighter text-space-950 dark:text-white transition-colors">AMAN VERMA</span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 glass-card px-8 py-3 translate-x-4 md:translate-x-0 relative">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className={`text-xs lg:text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 relative py-2 ${activeSection === link.id ? 'text-neon-cyan' : 'text-space-950/40 dark:text-white/40 hover:text-space-950 dark:hover:text-white'
                                }`}
                            whileHover={{ y: -2 }}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan neon-glow-cyan"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.button
                    className="hidden md:block px-6 py-2 bg-black/5 dark:bg-white/5 font-black text-[10px] uppercase tracking-[0.2em] hover:neon-glow-cyan hover:text-neon-cyan transition-all text-space-950/50 dark:text-white/50 border border-black/10 dark:border-white/10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    System Deployment
                </motion.button>

                {/* Theme Toggle */}
                <motion.button
                    onClick={toggleTheme}
                    className="p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-space-950/40 dark:text-white/40 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isDarkMode ? <Sun size={20} className="text-neon-amber" /> : <Moon size={20} className="text-neon-violet" />}
                </motion.button>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 text-space-950/70 dark:text-white/70"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-6 right-6 mt-4 p-8 glass-card bg-white/95 dark:bg-space-950/95 backdrop-blur-xl md:hidden flex flex-col gap-6 shadow-2xl border border-black/10 dark:border-white/10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-space-950/70 dark:text-white/70 hover:text-neon-cyan transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
