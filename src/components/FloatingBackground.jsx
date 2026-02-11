import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingBackground = () => {
    const { scrollYProgress } = useScroll();
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    const blobs = [
        { size: 'w-[500px] h-[500px]', color: 'bg-neon-cyan/10', delay: 0, duration: 25, top: '10%', left: '5%' },
        { size: 'w-[600px] h-[600px]', color: 'bg-neon-violet/10', delay: 5, duration: 30, top: '40%', left: '60%' },
        { size: 'w-[400px] h-[400px]', color: 'bg-neon-emerald/5', delay: 10, duration: 35, top: '70%', left: '10%' },
        { size: 'w-[450px] h-[450px]', color: 'bg-neon-rose/5', delay: 2, duration: 28, top: '20%', left: '70%' },
    ];

    // Memoize stars to prevent re-renders on scroll
    const stars = useMemo(() => {
        return [...Array(80)].map((_, i) => ({
            left: Math.random() * 100 + 'vw',
            top: Math.random() * 100 + 'vh',
            size: Math.random() * 2 + 1 + 'px',
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 20,
        }));
    }, []);

    return (
        <motion.div
            style={{ y: yBg }}
            className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        >
            {/* Cinematic Nebula Blobs */}
            {blobs.map((blob, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full blur-[120px] ${blob.size} ${blob.color} opacity-40 dark:opacity-100 transition-opacity duration-1000`}
                    style={{ top: blob.top, left: blob.left }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -50, 40, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: blob.delay,
                    }}
                />
            ))}

            {/* Space Dust / Static Stars */}
            <div className="absolute inset-0">
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-black/10 dark:bg-white/20"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: star.delay
                        }}
                    />
                ))}
            </div>

            {/* Meteors / Shooting Stars */}
            <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[100px] bg-gradient-to-t from-transparent via-black/20 dark:via-neon-cyan/50 to-transparent dark:to-white/80 rounded-full transition-all"
                        initial={{ top: '-10%', left: Math.random() * 100 + '%', rotate: 45, opacity: 0 }}
                        animate={{
                            top: '110%',
                            left: (Math.random() * 100 - 50) + '%',
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 5 + i * 8,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Vignette Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
        </motion.div>
    );
};

export default FloatingBackground;
