import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
    id,
    title,
    subtitle,
    children,
    className = "",
    accentColor = "cyan" // can be cyan, violet, emerald, rose, amber
}) => {
    const accentClasses = {
        cyan: "text-neon-cyan border-neon-cyan/20",
        violet: "text-neon-violet border-neon-violet/20",
        emerald: "text-neon-emerald border-neon-emerald/20",
        rose: "text-neon-rose border-neon-rose/20",
        amber: "text-neon-amber border-neon-amber/20",
    };

    const glowClasses = {
        cyan: "dark:from-neon-cyan/20 from-gray-100/40",
        violet: "dark:from-neon-violet/20 from-gray-100/40",
        emerald: "dark:from-neon-emerald/20 from-gray-100/40",
        rose: "dark:from-neon-rose/20 from-gray-100/40",
        amber: "dark:from-neon-amber/20 from-gray-100/40",
    };

    return (
        <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative ${className} overflow-hidden scroll-mt-24 md:scroll-mt-32`}>
            {/* Background Section Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b ${glowClasses[accentColor]} to-transparent opacity-10 dark:opacity-5 pointer-events-none blur-3xl`} />

            {/* Geometric Accents */}
            <div className={`absolute top-20 right-0 w-64 h-64 border border-black/[0.03] dark:border-white/10 rounded-full -mr-32 pointer-events-none`} />
            <div className={`absolute bottom-20 left-0 w-48 h-48 border border-black/[0.03] dark:border-white/10 rotate-45 -ml-24 pointer-events-none`} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-24 text-center relative z-10"
            >
                {subtitle && (
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`text-xs md:text-sm uppercase tracking-[0.6em] mb-6 block font-black ${accentClasses[accentColor].split(' ')[0]}`}
                    >
                        {subtitle}
                    </motion.span>
                )}
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-space-950 dark:text-white leading-[0.9] transition-colors">
                    {title}
                </h2>
                <div className={`w-32 h-1.5 mx-auto mt-10 rounded-full bg-gradient-to-r from-transparent via-${accentColor === 'cyan' ? 'neon-cyan' : `neon-${accentColor}`} to-transparent shadow-[0_0_15px_rgba(0,0,0,0.02)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all`} />
            </motion.div>

            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
