import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Outer Ring / Aura */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998]"
                animate={{
                    scale: isPointer ? 1.8 : 1,
                    backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
                    borderColor: isPointer ? 'rgba(34, 211, 238, 0.5)' : 'rgba(255, 255, 255, 0.3)',
                }}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            />

            {/* Trailing Glow */}
            {isPointer && (
                <motion.div
                    className="fixed top-0 left-0 w-24 h-24 bg-neon-cyan/20 rounded-full blur-2xl pointer-events-none z-[9997]"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            )}
        </>
    );
};

export default CustomCursor;
