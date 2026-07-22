import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

const ProjectCard = ({
    title,
    description,
    features = [],
    tags = [],
    github,
    link,
    gradient = "from-[#6C4DFF] to-[#00D4FF]",
    delay = 0
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay }}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col h-full border border-[#6C4DFF]/20 group relative"
        >
            {/* Project Image Header / Banner Visual */}
            <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center p-6`}>
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/40 to-transparent z-10" />
                
                {/* Decorative Icon Visual */}
                <div className="relative z-0 opacity-20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                    <Layers size={90} className="text-white" />
                </div>

                {/* Badge Category Tag Overlay */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-[#080812]/80 backdrop-blur-md rounded-full text-xs font-mono font-bold text-[#00D4FF] border border-[#00D4FF]/40 shadow-lg">
                        Featured
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 relative z-20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors tracking-tight">
                    {title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {description}
                </p>

                {/* Features List */}
                {features.length > 0 && (
                    <div className="mb-5 space-y-1.5 bg-[#080812]/50 p-3.5 rounded-xl border border-white/5">
                        <span className="text-[11px] font-mono text-gray-400 block font-semibold mb-1 uppercase tracking-wider">Key Features:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-200">
                                    <CheckCircle2 size={13} className="text-[#00D4FF] shrink-0" />
                                    <span className="truncate">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {tags.map(tag => (
                        <span 
                            key={tag} 
                            className="px-2.5 py-1 bg-[#120E26] rounded-lg text-[11px] font-mono font-medium text-gray-300 border border-[#6C4DFF]/25"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <Github size={16} />
                            <span>GitHub</span>
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] rounded-xl text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#6C4DFF]/25 hover:shadow-[#00D4FF]/40 transition-all duration-300"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
