import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] z-[10001] origin-left shadow-lg shadow-[#00D4FF]/50"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
