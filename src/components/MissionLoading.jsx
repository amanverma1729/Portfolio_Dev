import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ShieldCheck, Cpu, Wifi } from 'lucide-react';

const MissionLoading = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [logs, setLogs] = useState([]);

    const loadingMessages = [
        { icon: <Cpu size={14} />, text: "INITIALIZING CORE SYSTEMS..." },
        { icon: <Wifi size={14} />, text: "ESTABLISHING SECURE PROTOCOLS..." },
        { icon: <ShieldCheck size={14} />, text: "CALIBRATING INTERFACE..." },
        { icon: <Rocket size={14} />, text: "PREPARING FOR SYSTEM ACCESS..." },
    ];

    useEffect(() => {
        const totalDuration = 3000;
        const interval = 30;
        const step = 100 / (totalDuration / interval);

        const timer = setInterval(() => {
            setPercent((prev) => {
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return next;
            });
        }, interval);

        // Message logging effect
        const messageInterval = setInterval(() => {
            setLogs(prev => {
                const nextMsg = loadingMessages[prev.length % loadingMessages.length];
                return [...prev, nextMsg].slice(-4);
            });
        }, 700);

        return () => {
            clearInterval(timer);
            clearInterval(messageInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-space-950 flex flex-col items-center justify-center p-6"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <div className="max-w-sm w-full space-y-12">
                {/* Animated Logo */}
                <motion.div
                    className="relative flex justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center text-neon-cyan neon-glow-cyan border-neon-cyan/50">
                        <Rocket size={48} />
                    </div>
                    <div className="absolute inset-0 border-2 border-neon-violet/30 rounded-full animate-ping" />
                </motion.div>

                {/* Progress Bar */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                        <span>Systems Status</span>
                        <span className="text-neon-cyan">{Math.round(percent)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>

                {/* Binary/Log Feed */}
                <div className="space-y-3 h-24 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 0.7, x: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-3 text-neon-cyan font-black text-[9px] uppercase tracking-widest"
                            >
                                <span className="text-neon-violet">{log.icon}</span>
                                <span>{log.text}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:40px_40px]" />
        </motion.div>
    );
};

export default MissionLoading;
