import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative z-10 py-12 border-t border-[#6C4DFF]/20 bg-[#080812] mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    
                    {/* Left: Logo & Branding */}
                    <div 
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={scrollToTop}
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6C4DFF] to-[#00D4FF] p-[1.5px] shadow-lg shadow-[#6C4DFF]/20 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full bg-[#080812] rounded-[10px] flex items-center justify-center overflow-hidden">
                                <img src={logo} alt="Aman Verma" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white tracking-tight">Aman Verma</span>
                            <span className="text-[11px] text-gray-400 font-mono">Built with React + Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-xs sm:text-sm text-gray-400 font-mono">
                        © 2026 <span className="text-white font-semibold">Aman Verma</span>. All Rights Reserved.
                    </div>

                    {/* Right: Socials & Back to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/amanverma1729"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="p-2.5 rounded-xl bg-[#120E26] border border-[#6C4DFF]/20 text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all hover:scale-110"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/amanverma1729/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="p-2.5 rounded-xl bg-[#120E26] border border-[#6C4DFF]/20 text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all hover:scale-110"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:aman835400@gmail.com"
                                title="Email"
                                className="p-2.5 rounded-xl bg-[#120E26] border border-[#6C4DFF]/20 text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all hover:scale-110"
                            >
                                <Mail size={18} />
                            </a>
                        </div>

                        {/* Back To Top Button */}
                        <button
                            onClick={scrollToTop}
                            title="Back to Top"
                            className="p-2.5 rounded-xl bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white shadow-lg shadow-[#6C4DFF]/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs font-semibold px-3.5"
                        >
                            <ArrowUp size={16} />
                            <span className="hidden sm:inline">Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
