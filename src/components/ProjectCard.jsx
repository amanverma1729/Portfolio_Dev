import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
    title,
    description,
    impact,
    tags,
    github,
    link,
    delay = 0,
    accentColor = "cyan"
}) => {
    const accentColors = {
        cyan: "border-neon-cyan/50 text-neon-cyan",
        violet: "border-neon-violet/50 text-neon-violet",
        emerald: "border-neon-emerald/50 text-neon-emerald",
        rose: "border-neon-rose/50 text-neon-rose",
        amber: "border-neon-amber/50 text-neon-amber",
    };

    const glowStyles = {
        cyan: "shadow-[0_0_20px_rgba(34,211,238,0.1)]",
        violet: "shadow-[0_0_20px_rgba(168,85,247,0.1)]",
        emerald: "shadow-[0_0_20px_rgba(16,185,129,0.1)]",
        rose: "shadow-[0_0_20px_rgba(244,63,94,0.1)]",
        amber: "shadow-[0_0_20px_rgba(245,158,11,0.1)]",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className={`relative group/hud bg-white/[0.01] border border-white/5 backdrop-blur-sm p-8 transition-all duration-700 hover:bg-white/[0.03] ${glowStyles[accentColor]} will-change-transform`}
        >
            {/* HUD Brackets */}
            <div className={`hud-bracket hud-bracket-tl group-hover/hud:border-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} transition-colors`} />
            <div className={`hud-bracket hud-bracket-tr group-hover/hud:border-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} transition-colors`} />
            <div className={`hud-bracket hud-bracket-bl group-hover/hud:border-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} transition-colors`} />
            <div className={`hud-bracket hud-bracket-br group-hover/hud:border-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} transition-colors`} />

            {/* Scanning Line */}
            <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover/hud:opacity-100 transition-opacity duration-700`}>
                <div className={`w-full h-1/2 bg-gradient-to-b from-transparent via-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`}/10 to-transparent animate-scan`} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

            {/* Technical Metadata Header */}
            <div className="flex justify-between items-start mb-8 relative z-10 transition-colors text-xs font-black uppercase tracking-[0.4em] text-space-900/30 dark:text-white/30">
                <span>Target Artifact</span>
                <span className="font-mono">SEC_{accentColor.toUpperCase()}_v.02</span>
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 tracking-tighter leading-tight text-space-950/90 dark:text-white/90 group-hover/hud:text-space-950 dark:group-hover/hud:text-white transition-colors uppercase">
                    {title}
                </h3>

                <p className="text-space-900/40 dark:text-white/40 mb-8 text-lg font-bold leading-relaxed line-clamp-2 group-hover/hud:text-space-900/60 dark:group-hover/hud:text-white/60 transition-colors">
                    {description}
                </p>

                {impact && (
                    <div className="mb-10 p-5 bg-black/5 dark:bg-white/5 border-l-2 border-neon-cyan/50 backdrop-blur-md relative overflow-hidden group/impact">
                        <div className="absolute inset-0 bg-neon-cyan/5 -translate-x-full group-hover/impact:translate-x-0 transition-transform duration-700" />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neon-cyan block mb-2 relative z-10">Mission Impact</span>
                        <p className="text-sm text-space-950/70 dark:text-white/70 font-black leading-tight uppercase font-mono relative z-10">{impact}</p>
                    </div>
                )}

                <div className="flex flex-wrap gap-3 mb-12">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-space-900/40 dark:text-white/40 group-hover/hud:text-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} group-hover/hud:border-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`}/30 transition-all`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5 relative z-10">
                <div className="flex gap-8">
                    {github && (
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-space-900/40 dark:text-white/40 hover:text-space-950 dark:hover:text-white transition-all group/link"
                            whileHover={{ x: 5 }}
                        >
                            <Github size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Source</span>
                        </motion.a>
                    )}
                    {link && (
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 ${accentColors[accentColor]} opacity-70 hover:opacity-100 transition-all group/link`}
                            whileHover={{ x: 5 }}
                        >
                            <ExternalLink size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Live Op</span>
                        </motion.a>
                    )}
                </div>
                <div className="w-12 h-1 bg-black/5 dark:bg-white/5 relative overflow-hidden">
                    <motion.div
                        className={`absolute inset-0 bg-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`}`}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
