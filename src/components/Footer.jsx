import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0B0D10] py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <div className="font-mono">
                    © {new Date().getFullYear()} Aman Verma · Built with React & Tailwind CSS
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/amanverma1729"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amanverma1729/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="mailto:aman835400@gmail.com"
                        aria-label="Email"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                        <Mail size={16} />
                    </a>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono transition-colors"
                    >
                        <ArrowUp size={12} />
                        <span>top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
