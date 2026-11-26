import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${scrolled
                ? 'bg-white/90 dark:bg-[#0B0D10]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Brand Mark */}
                <button
                    type="button"
                    onClick={() => {
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                    <img src={logo} alt="Aman Verma" className="h-7 w-7 rounded-md object-cover border border-zinc-200 dark:border-zinc-700" />
                    <span>Aman Verma</span>
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
                                    className={`text-sm transition-colors ${isActive
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
                                className={`text-sm transition-colors ${isActive
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
                <div className="flex items-center gap-2.5">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
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
                        className="md:hidden p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] text-zinc-700 dark:text-zinc-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-[#0B0D10] border-b border-zinc-200 dark:border-zinc-800 px-4 py-4">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) =>
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-md text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="px-3 py-2 rounded-md text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                                >
                                    {link.name}
                                </a>
                            )
                        )}
                        <a
                            href={Aman_Verma_Dev}
                            download="Aman_Verma_Dev.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-medium"
                        >
                            <Download size={14} />
                            <span>Download resume.pdf</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
