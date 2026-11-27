import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';
import Aman_Verma_Dev from '../assets/Aman_Verma_Dev.pdf';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 12);
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
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
        const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            observer.disconnect();
        };
    }, [location.pathname]);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Certifications', href: '/certifications', id: 'certifications', isRoute: true },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const handleNavClick = (e, link) => {
        if (link.isRoute) {
            setMobileMenuOpen(false);
            return;
        }

        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(link.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 120);
        } else {
            const el = document.getElementById(link.id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isHeaderSolid = scrolled || mobileMenuOpen;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                isHeaderSolid
                    ? 'bg-white/95 dark:bg-[#0B0D10]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
                {/* Brand Mark */}
                <button
                    type="button"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity flex items-center gap-2.5 min-h-[40px]"
                >
                    <img
                        src={logo}
                        alt="Aman Verma"
                        className="h-7 w-7 rounded-md object-cover border border-zinc-200 dark:border-zinc-700 shrink-0"
                    />
                    <span className="truncate">Aman Verma</span>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive =
                            (link.isRoute && location.pathname === link.href) ||
                            (!link.isRoute && location.pathname === '/' && activeSection === link.id);

                        if (link.isRoute) {
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm transition-colors ${
                                        isActive
                                            ? 'text-zinc-900 dark:text-zinc-50 font-medium'
                                            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`text-sm transition-colors ${
                                    isActive
                                        ? 'text-zinc-900 dark:text-zinc-50 font-medium'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="h-9 w-9 sm:h-9 sm:w-9 inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    <a
                        href={Aman_Verma_Dev}
                        download="Aman_Verma_Dev.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                        <Download size={14} />
                        <span>resume.pdf</span>
                    </a>

                    <button
                        type="button"
                        className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] text-zinc-700 dark:text-zinc-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="md:hidden overflow-hidden bg-white dark:bg-[#0B0D10] border-b border-zinc-200 dark:border-zinc-800 shadow-lg"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const isActive =
                                    (link.isRoute && location.pathname === link.href) ||
                                    (!link.isRoute && location.pathname === '/' && activeSection === link.id);

                                const itemClass = `flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                                    isActive
                                        ? 'bg-zinc-100 dark:bg-[#161B22] text-zinc-900 dark:text-zinc-50 font-medium'
                                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50'
                                }`;

                                return link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={itemClass}
                                    >
                                        <span>{link.name}</span>
                                        <span className="font-mono text-[11px] text-zinc-400">/{link.id}</span>
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={itemClass}
                                    >
                                        <span>{link.name}</span>
                                        <span className="font-mono text-[11px] text-zinc-400">#{link.id}</span>
                                    </a>
                                );
                            })}

                            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                                <a
                                    href={Aman_Verma_Dev}
                                    download="Aman_Verma_Dev.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-zinc-900 dark:bg-emerald-500 text-white dark:text-zinc-950 text-xs font-mono font-medium"
                                >
                                    <Download size={14} />
                                    <span>Download resume.pdf</span>
                                </a>
                                <a
                                    href="https://github.com/amanverma1729"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="p-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#11141A] text-zinc-700 dark:text-zinc-300"
                                >
                                    <Github size={16} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/amanverma1729/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="p-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#11141A] text-zinc-700 dark:text-zinc-300"
                                >
                                    <Linkedin size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
