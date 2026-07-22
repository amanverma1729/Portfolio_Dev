import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mountain, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certifications } from '../data/certifications';

const CertificationsPreview = () => {
    return (
        <section id="certifications" className="py-20 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-[#6C4DFF]/40 bg-gradient-to-br from-[#120E26]/90 via-[#080812]/95 to-[#120E26]/90 backdrop-blur-2xl shadow-2xl shadow-[#6C4DFF]/15">
                    
                    {/* Background Lighting & Trail Line Graphic */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6C4DFF]/15 rounded-full blur-[140px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        
                        {/* Left Info */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/40 bg-[#120E26] text-xs font-mono text-[#00D4FF] mb-4">
                                <Mountain size={14} />
                                <span>Mountain Expedition View</span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                                Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Mountain Trail</span>
                            </h3>

                            <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed mb-6 font-normal">
                                Explore verified credentials from <span className="text-white font-semibold">QSpiders, NPTEL (IITs), Udemy</span>, and industry internships arranged along an ascending mountain curve trail with interactive scroll checkpoints.
                            </p>

                            {/* Quick Stats Badges */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                                <div className="px-3.5 py-1.5 rounded-xl bg-[#080812]/80 border border-[#6C4DFF]/30 text-xs font-mono text-gray-200 flex items-center gap-2">
                                    <Sparkles size={13} className="text-[#00D4FF]" />
                                    <span>5 Verified Credentials</span>
                                </div>
                                <div className="px-3.5 py-1.5 rounded-xl bg-[#080812]/80 border border-[#6C4DFF]/30 text-xs font-mono text-gray-200 flex items-center gap-2">
                                    <ShieldCheck size={13} className="text-[#9D4EDD]" />
                                    <span>Java & Web Full-Stack</span>
                                </div>
                            </div>

                            {/* CTA Link to Separate Dedicated Page */}
                            <Link
                                to="/certifications"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] text-sm sm:text-base font-bold text-white shadow-xl shadow-[#6C4DFF]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
                            >
                                <Compass size={18} />
                                <span>Explore Interactive Mountain Trail</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Preview Card Highlights */}
                        <div className="w-full lg:w-[420px] flex flex-col gap-3">
                            {certifications.slice(0, 3).map((cert, index) => (
                                <div 
                                    key={index}
                                    className="p-4 rounded-2xl bg-[#080812]/80 border border-[#6C4DFF]/25 flex items-center justify-between gap-4 hover:border-[#00D4FF]/50 transition-colors shadow-md"
                                >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="w-10 h-10 rounded-xl bg-[#6C4DFF]/20 border border-[#6C4DFF]/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                                            <Award size={18} />
                                        </div>
                                        <div className="truncate">
                                            <h4 className="text-xs sm:text-sm font-bold text-white truncate">{cert.title}</h4>
                                            <span className="text-[11px] text-gray-400 font-mono">{cert.issuer}</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#6C4DFF]/20 text-[#00D4FF] shrink-0">
                                        {cert.issueDate}
                                    </span>
                                </div>
                            ))}

                            <div className="text-center pt-1">
                                <Link 
                                    to="/certifications" 
                                    className="text-xs font-mono text-[#00D4FF] hover:underline"
                                >
                                    + View all certifications on dedicated mountain trail page →
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsPreview;
