import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="relative z-10 py-12 border-t border-white/10 bg-space-950 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    
                    {/* Left: Logo & Name */}
                    <div className="flex items-center justify-center md:justify-start gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-10 h-10 p-1 bg-white/5 border border-white/10 rounded-lg">
                            <img src={logo} alt="Aman Verma" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Aman Verma</span>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-sm text-gray-400 font-medium">
                        © {new Date().getFullYear()} Aman Verma. All Rights Reserved.
                    </div>

                    {/* Right: Socials */}
                    <div className="flex gap-4">
                        <a href="https://github.com/amanverma1729" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://in.linkedin.com/in/amanverma1729" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://x.com/AmanVerma1729" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="https://www.instagram.com/aman_verma1729" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
