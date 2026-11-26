import React, { useEffect } from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const CertificationsPage = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#0B0D10] text-zinc-900 dark:text-zinc-100 dev-grid-bg flex flex-col">
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0B0D10]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-emerald-400 transition-colors"
                    >
                        <ArrowLeft size={15} />
                        <span>cd ~/portfolio</span>
                    </Link>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </header>

            <main className="flex-1 pt-8 pb-16">
                <Certifications />
            </main>

            <Footer />
        </div>
    );
};

export default CertificationsPage;
