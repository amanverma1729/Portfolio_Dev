import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Calendar, ShieldCheck, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <Award size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Verified Credentials</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Training</span>
                    </h2>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col h-full border relative overflow-hidden group ${
                                cert.featured 
                                    ? 'border-[#00D4FF]/40 shadow-xl shadow-[#6C4DFF]/20 md:col-span-2 lg:col-span-1' 
                                    : 'border-[#6C4DFF]/20'
                            }`}
                        >
                            {/* Ambient Top Glow for Featured Certs */}
                            {cert.featured && (
                                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]" />
                            )}

                            {/* Header Info */}
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6C4DFF]/30 to-[#00D4FF]/20 border border-[#6C4DFF]/30 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Award size={24} />
                                </div>
                                
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {cert.status && (
                                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/40 flex items-center gap-1">
                                            <Sparkles size={11} />
                                            {cert.status}
                                        </span>
                                    )}
                                    {cert.featured && (
                                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#6C4DFF]/20 text-white border border-[#6C4DFF]/40">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Title & Issuer */}
                            <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#00D4FF] transition-colors leading-snug">
                                {cert.title}
                            </h3>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300 mb-4 font-medium">
                                <span className="text-[#9D4EDD] font-semibold">{cert.issuer}</span>
                                <span className="text-gray-500">•</span>
                                <span className="flex items-center gap-1 text-gray-400 font-mono">
                                    <Calendar size={12} />
                                    {cert.issueDate}
                                </span>
                            </div>

                            {/* Description if present */}
                            {cert.description && (
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                                    {cert.description}
                                </p>
                            )}

                            {/* Credential ID if present */}
                            {cert.credentialId && (
                                <div className="mb-4 p-2.5 rounded-xl bg-[#080812]/60 border border-white/5 flex items-center gap-2 text-xs font-mono text-gray-300">
                                    <ShieldCheck size={14} className="text-[#00D4FF] shrink-0" />
                                    <span className="truncate">ID: <span className="text-white font-semibold">{cert.credentialId}</span></span>
                                </div>
                            )}

                            {/* Skills chips if present */}
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="mt-auto pt-4 border-t border-white/10 mb-4">
                                    <span className="text-[10px] font-mono text-gray-400 block font-semibold mb-2 uppercase tracking-wider">SKILLS VERIFIED:</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cert.skills.map((skill, sIdx) => (
                                            <span 
                                                key={sIdx}
                                                className="px-2.5 py-0.5 rounded-lg bg-[#120E26] text-[11px] font-mono text-gray-300 border border-[#6C4DFF]/25"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Certificate CTA / Coming Soon Button */}
                            <div className="mt-auto pt-3 border-t border-white/10">
                                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#6C4DFF]/15 border border-[#6C4DFF]/40 text-xs sm:text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#6C4DFF] hover:to-[#00D4FF] hover:border-transparent transition-all duration-300 shadow-md group/btn"
                                    >
                                        <span>View Certificate</span>
                                        <ExternalLink size={14} className="text-[#00D4FF] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                                    </a>
                                ) : (
                                    <div
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-400 select-none cursor-default"
                                    >
                                        <Clock size={14} className="text-[#00D4FF]" />
                                        <span>Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
