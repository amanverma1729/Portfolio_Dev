import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FloatingBackground = () => {
    const { scrollYProgress } = useScroll();
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const { theme } = useTheme();

    const isLight = theme === 'light';

    const blobs = [
        { size: 'w-[500px] h-[500px]', color: isLight ? 'bg-[#6C4DFF]/15' : 'bg-[#6C4DFF]', delay: 0, duration: 24, top: '5%', left: '10%' },
        { size: 'w-[600px] h-[600px]', color: isLight ? 'bg-[#9D4EDD]/15' : 'bg-[#9D4EDD]', delay: 4, duration: 28, top: '45%', left: '55%' },
        { size: 'w-[450px] h-[450px]', color: isLight ? 'bg-[#00D4FF]/20' : 'bg-[#00D4FF]', delay: 8, duration: 32, top: '75%', left: '15%' },
        { size: 'w-[520px] h-[520px]', color: isLight ? 'bg-[#6C4DFF]/15' : 'bg-[#6C4DFF]', delay: 2, duration: 26, top: '25%', left: '65%' },
    ];

    const stars = useMemo(() => {
        return [...Array(65)].map((_, i) => ({
            left: (i * 17) % 100 + '%',
            top: (i * 23) % 100 + '%',
            size: (i % 3) + 1 + 'px',
            duration: (i % 5) + 3,
            delay: (i % 4),
        }));
    }, []);

    return (
        <motion.div
            style={{ y: yBg }}
            className={`fixed inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-500 ${isLight ? 'bg-[#F4F6FB]' : 'bg-[#080812]'}`}
        >
            {/* Cinematic Lighting Blobs */}
            {blobs.map((blob, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full blur-[140px] ${blob.size} ${blob.color} ${isLight ? 'opacity-30' : 'opacity-15'} pointer-events-none`}
                    style={{ top: blob.top, left: blob.left }}
                    animate={{
                        x: [0, 40, -30, 0],
                        y: [0, -40, 30, 0],
                        scale: [1, 1.15, 0.9, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: blob.delay,
                    }}
                />
            ))}

            {/* Static Ambient Star Dust */}
            <div className="absolute inset-0">
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${isLight ? 'bg-[#6C4DFF]/30' : 'bg-white/25'}`}
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size
                        }}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            scale: [1, 1.4, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: star.delay
                        }}
                    />
                ))}
            </div>

            {/* Vignette Overlay for Depth */}
            {!isLight && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,18,0.85)_100%)] pointer-events-none" />
            )}
        </motion.div>
    );
};

export default FloatingBackground;
