import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
    Award, 
    Calendar, 
    ShieldCheck, 
    ExternalLink, 
    Sparkles, 
    Clock, 
    Mountain, 
    Flag, 
    MapPin, 
    Compass,
    TrendingUp,
    CheckCircle2
} from 'lucide-react';
import { certifications } from '../data/certifications';

// Mountain Trail Elevations and Checkpoint Metadata
const trailMetadata = [
    {
        elevation: "800m",
        checkpointName: "Base Camp - Web Foundations",
        badge: "Trailhead",
        color: "#00D4FF",
        icon: Compass
    },
    {
        elevation: "1,600m",
        checkpointName: "Waypoint 1 - Frontend Industry Trainee",
        badge: "Industry Experience",
        color: "#3B82F6",
        icon: TrendingUp
    },
    {
        elevation: "2,400m",
        checkpointName: "Waypoint 2 - QA & Software Testing",
        badge: "Quality Verification",
        color: "#8B5CF6",
        icon: ShieldCheck
    },
    {
        elevation: "3,200m",
        checkpointName: "Waypoint 3 - OOP & System Core",
        badge: "Core Engineering",
        color: "#9D4EDD",
        icon: CheckCircle2
    },
    {
        elevation: "4,200m (Summit)",
        checkpointName: "Summit Checkpoint - Full Stack Mastery",
        badge: "Active Expedition",
        color: "#6C4DFF",
        icon: Mountain
    }
];

// Order certifications sequentially along the ascending mountain trail
const orderedCerts = [
    // Base camp: Udemy Web Dev
    certifications.find(c => c.issuer.includes("Udemy")) || certifications[1],
    // Waypoint 1: Frontend Internship
    certifications.find(c => c.title.includes("Frontend Developer")) || certifications[2],
    // Waypoint 2: Software Testing NPTEL
    certifications.find(c => c.title.includes("Software Testing")) || certifications[3],
    // Waypoint 3: OOP NPTEL
    certifications.find(c => c.title.includes("Object-Oriented")) || certifications[4],
    // Summit: Java Full Stack QSpiders
    certifications.find(c => c.title.includes("Java Full Stack")) || certifications[0]
].filter(Boolean);

const Certifications = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);

    // Scroll progress animation for the mountain road path
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="certifications" ref={containerRef} className="py-28 px-4 sm:px-6 relative z-10 overflow-hidden bg-[#080812]">
            {/* Ambient Mountain Lighting */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6C4DFF]/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center mb-20 relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C4DFF]/40 bg-[#120E26]/80 backdrop-blur-md mb-4 shadow-lg shadow-[#6C4DFF]/20">
                        <Mountain size={16} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest font-semibold">
                            Mountain Trail of Mastery
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                        Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Mountain Expedition</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-mono">
                        Follow the ascending curve road from foundational web development to full-stack Java engineering.
                    </p>
                </motion.div>

                {/* Main Mountain Trail Layout Container */}
                <div className="relative w-full">

                    {/* SVG Winding Mountain Road - Desktop (Hidden on Mobile) */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg 
                            className="w-full h-full"
                            preserveAspectRatio="none"
                            viewBox="0 0 1000 1600"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#9D4EDD" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#6C4DFF" stopOpacity="0.9" />
                                </linearGradient>
                                <linearGradient id="roadBase" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0.6" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="8" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Background Road Surface Path */}
                            <path
                                d="M 320,100 C 700,280 750,420 320,620 C -50,800 200,1050 680,1220 C 850,1300 600,1450 500,1520"
                                stroke="url(#roadBase)"
                                strokeWidth="24"
                                strokeLinecap="round"
                            />

                            {/* Road Outer Borders */}
                            <path
                                d="M 320,100 C 700,280 750,420 320,620 C -50,800 200,1050 680,1220 C 850,1300 600,1450 500,1520"
                                stroke="#6C4DFF"
                                strokeOpacity="0.25"
                                strokeWidth="26"
                                strokeLinecap="round"
                            />

                            {/* Animated Glowing Center Road Line */}
                            <motion.path
                                d="M 320,100 C 700,280 750,420 320,620 C -50,800 200,1050 680,1220 C 850,1300 600,1450 500,1520"
                                stroke="url(#roadGradient)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                style={{
                                    pathLength: smoothProgress
                                }}
                            />

                            {/* Center Lane Dashes */}
                            <path
                                d="M 320,100 C 700,280 750,420 320,620 C -50,800 200,1050 680,1220 C 850,1300 600,1450 500,1520"
                                stroke="#FFFFFF"
                                strokeOpacity="0.4"
                                strokeWidth="2"
                                strokeDasharray="12 16"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Mobile SVG Road Trail (Left-aligned winding path for mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-7 w-2 pointer-events-none z-0">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 10 1600" fill="none">
                            <line x1="5" y1="0" x2="5" y2="1600" stroke="#6C4DFF" strokeOpacity="0.3" strokeWidth="6" />
                            <motion.line 
                                x1="5" y1="0" x2="5" y2="1600" 
                                stroke="#00D4FF" 
                                strokeWidth="4" 
                                style={{ pathLength: smoothProgress }}
                            />
                        </svg>
                    </div>

                    {/* Checkpoints & Certification Cards Loop */}
                    <div className="space-y-16 sm:space-y-24 md:space-y-32 relative z-10">
                        {orderedCerts.map((cert, index) => {
                            const meta = trailMetadata[index] || trailMetadata[0];
                            const IconComponent = meta.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: index * 0.15 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    
                                    {/* CARD CONTAINER (Half-width on desktop) */}
                                    <div className="w-full md:w-[45%] pl-14 md:pl-0">
                                        <div 
                                            className={`glass-card rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all duration-500 group ${
                                                hoveredIndex === index 
                                                    ? 'border-[#00D4FF] shadow-2xl shadow-[#6C4DFF]/30 scale-[1.02]' 
                                                    : cert.featured
                                                        ? 'border-[#6C4DFF]/60 shadow-xl shadow-[#6C4DFF]/15'
                                                        : 'border-[#6C4DFF]/25 hover:border-[#00D4FF]/50'
                                            }`}
                                        >
                                            {/* Glowing Top Edge Highlight */}
                                            <div 
                                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#9D4EDD] to-[#6C4DFF] opacity-70 group-hover:opacity-100 transition-opacity" 
                                            />

                                            {/* Card Trail Header / Milestone Badge */}
                                            <div className="flex items-center justify-between gap-2 mb-4">
                                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#120E26] border border-[#6C4DFF]/40 text-[11px] font-mono font-semibold text-[#00D4FF]">
                                                    <MapPin size={12} className="text-[#00D4FF]" />
                                                    <span>{meta.elevation}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {cert.status && (
                                                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/50 flex items-center gap-1 shadow-sm">
                                                            <Sparkles size={11} />
                                                            {cert.status}
                                                        </span>
                                                    )}
                                                    {cert.featured && (
                                                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-gradient-to-r from-[#6C4DFF] to-[#9D4EDD] text-white shadow-md">
                                                            Featured Summit
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Title & Issuer */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6C4DFF]/30 to-[#00D4FF]/20 border border-[#6C4DFF]/40 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                                    <Award size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors leading-snug">
                                                        {cert.title}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300 mt-1 font-medium">
                                                        <span className="text-[#9D4EDD] font-semibold">{cert.issuer}</span>
                                                        <span className="text-gray-500">•</span>
                                                        <span className="flex items-center gap-1 text-gray-400 font-mono">
                                                            <Calendar size={12} />
                                                            {cert.issueDate}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            {cert.description && (
                                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 font-normal">
                                                    {cert.description}
                                                </p>
                                            )}

                                            {/* Credential ID */}
                                            {cert.credentialId && (
                                                <div className="mb-4 p-2.5 rounded-xl bg-[#080812]/80 border border-white/10 flex items-center gap-2 text-xs font-mono text-gray-300">
                                                    <ShieldCheck size={14} className="text-[#00D4FF] shrink-0" />
                                                    <span className="truncate">Credential ID: <span className="text-white font-semibold">{cert.credentialId}</span></span>
                                                </div>
                                            )}

                                            {/* Skills Tag Cloud */}
                                            {cert.skills && cert.skills.length > 0 && (
                                                <div className="mb-5 pt-3 border-t border-white/10">
                                                    <span className="text-[10px] font-mono text-gray-400 block font-semibold mb-2 uppercase tracking-wider">
                                                        Skills Verified:
                                                    </span>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {cert.skills.map((skill, sIdx) => (
                                                            <span 
                                                                key={sIdx}
                                                                className="px-2.5 py-1 rounded-lg bg-[#120E26] text-[11px] font-mono text-gray-300 border border-[#6C4DFF]/30 group-hover:border-[#00D4FF]/40 transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Certificate Link / Status Action */}
                                            <div className="pt-3 border-t border-white/10">
                                                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                                    <a
                                                        href={cert.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6C4DFF]/20 border border-[#6C4DFF]/50 text-xs sm:text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#6C4DFF] hover:to-[#00D4FF] hover:border-transparent transition-all duration-300 shadow-lg group/btn"
                                                    >
                                                        <span>View Verified Certificate</span>
                                                        <ExternalLink size={14} className="text-[#00D4FF] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                                                    </a>
                                                ) : (
                                                    <div className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-400 select-none">
                                                        <Clock size={14} className="text-[#00D4FF]" />
                                                        <span>Training in Progress</span>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    {/* CENTER MOUNTAIN ROAD MILESTONE PIN (Desktop & Mobile) */}
                                    <div className="absolute left-7 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center z-20">
                                        <motion.div
                                            animate={{ 
                                                scale: hoveredIndex === index ? 1.25 : 1,
                                                boxShadow: hoveredIndex === index 
                                                    ? "0 0 25px #00D4FF, 0 0 50px #6C4DFF" 
                                                    : "0 0 15px rgba(108, 77, 255, 0.4)"
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 bg-[#080812] cursor-pointer ${
                                                hoveredIndex === index
                                                    ? 'border-[#00D4FF] text-[#00D4FF]'
                                                    : cert.featured
                                                        ? 'border-[#6C4DFF] text-white bg-gradient-to-tr from-[#6C4DFF] to-[#9D4EDD]'
                                                        : 'border-[#00D4FF]/60 text-[#00D4FF]'
                                            }`}
                                        >
                                            <IconComponent size={20} />
                                        </motion.div>

                                        {/* Milestone Checkpoint Label */}
                                        <div className="hidden lg:block absolute top-14 whitespace-nowrap px-3 py-1 rounded-full bg-[#120E26]/90 border border-[#6C4DFF]/40 text-[11px] font-mono text-gray-300 shadow-md">
                                            {meta.checkpointName}
                                        </div>
                                    </div>

                                    {/* EMPTY SPACE FOR BALANCED LAYOUT ON DESKTOP */}
                                    <div className="hidden md:block w-full md:w-[45%]" />

                                </motion.div>
                            );
                        })}
                    </div>

                    {/* MOUNTAIN SUMMIT FINISH BANNER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-24 text-center flex flex-col items-center justify-center relative z-20"
                    >
                        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#6C4DFF]/20 via-[#9D4EDD]/20 to-[#00D4FF]/20 border border-[#00D4FF]/40 backdrop-blur-xl max-w-md w-full shadow-2xl">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-tr from-[#6C4DFF] to-[#00D4FF] flex items-center justify-center text-white shadow-lg shadow-[#00D4FF]/30">
                                <Flag size={22} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">Summit Ahead!</h4>
                            <p className="text-xs text-gray-300 font-mono">
                                Continuously scaling new heights & pursuing advanced engineering certifications.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
