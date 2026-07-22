import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ShieldCheck, Cpu, Wifi } from 'lucide-react';

const MissionLoading = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [logs, setLogs] = useState([]);

    const loadingMessages = [
        { icon: <Cpu size={14} />, text: "INITIALIZING JAVA FULL STACK ENGINE..." },
        { icon: <Wifi size={14} />, text: "CONNECTING API & DATABASE NODES..." },
        { icon: <ShieldCheck size={14} />, text: "CALIBRATING HIGH-PERFORMANCE UI..." },
        { icon: <Rocket size={14} />, text: "LAUNCHING AMAN VERMA'S PORTFOLIO..." },
    ];

    useEffect(() => {
        const totalDuration = 1800;
        const interval = 25;
        const step = 100 / (totalDuration / interval);

        const timer = setInterval(() => {
            setPercent((prev) => {
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 300);
                    return 100;
                }
                return next;
            });
        }, interval);

        const messageInterval = setInterval(() => {
            setLogs(prev => {
                const nextMsg = loadingMessages[prev.length % loadingMessages.length];
                return [...prev, nextMsg].slice(-4);
            });
        }, 450);

        return () => {
            clearInterval(timer);
            clearInterval(messageInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-[#080812] flex flex-col items-center justify-center p-6"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="max-w-sm w-full space-y-10">
                {/* Animated Logo */}
                <motion.div
                    className="relative flex justify-center"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] p-[2px] shadow-2xl shadow-[#6C4DFF]/50">
                        <div className="w-full h-full bg-[#080812] rounded-[14px] flex items-center justify-center text-[#00D4FF]">
                            <Rocket size={38} />
                        </div>
                    </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="space-y-3">
                    <div className="flex justify-between items-end text-[11px] font-mono font-bold uppercase tracking-widest text-gray-300">
                        <span>SYSTEM INITIALIZING</span>
                        <span className="text-[#00D4FF] font-extrabold">{Math.round(percent)}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#120E26] rounded-full overflow-hidden border border-[#6C4DFF]/30 p-[1px]">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF] rounded-full"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>

                {/* Log Feed */}
                <div className="space-y-2 h-20 overflow-hidden font-mono">
                    <AnimatePresence mode="popLayout">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 0.9, x: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2.5 text-[#00D4FF] text-[10px] uppercase font-semibold tracking-wider"
                            >
                                <span className="text-[#9D4EDD]">{log.icon}</span>
                                <span>{log.text}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default MissionLoading;
