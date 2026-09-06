import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2,
    Terminal,
    Database,
    Server,
    Cpu,
    Wrench,
    Globe,
    Zap,
    Sparkles,
    GitBranch,
    Github,
    Layout,
    Flame,
    Bot,
    FileCode,
    CheckCircle2,
    Layers,
    Cloud,
    Boxes,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

// ============================================================
// JAVA ICON
// ============================================================

const CoffeeIcon = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);


// ============================================================
// SKILLS COMPONENT
// ============================================================

const Skills = () => {

    const [filter, setFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);


    // ========================================================
    // CATEGORIES
    // ========================================================

    const categories = [
        'All',
        'Languages',
        'Backend',
        'Frontend',
        'Database',
        'Tools',
        'AI',
        'Deployment'
    ];


    // ========================================================
    // SKILLS DATA
    // ========================================================

    const allSkills = [

        // ====================================================
        // LANGUAGES
        // ====================================================

        {
            name: "Java",
            category: "Languages",
            icon: <CoffeeIcon size={24} />,
            level: "Advanced",
            color: "from-[#F89820] to-[#5382A1]"
        },

        {
            name: "JavaScript",
            category: "Languages",
            icon: <Terminal size={24} />,
            level: "Intermediate",
            color: "from-[#F7DF1E] to-[#E5A00D]"
        },

        {
            name: "SQL",
            category: "Languages",
            icon: <Database size={24} />,
            level: "Intermediate",
            color: "from-[#00758F] to-[#F29111]"
        },

        {
            name: "HTML",
            category: "Languages",
            icon: <Code2 size={24} />,
            level: "Advanced",
            color: "from-[#E34F26] to-[#EF652A]"
        },

        {
            name: "CSS",
            category: "Languages",
            icon: <FileCode size={24} />,
            level: "Intermediate",
            color: "from-[#1572B6] to-[#339933]"
        },


        // ====================================================
        // BACKEND
        // ====================================================

        {
            name: "Spring Boot",
            category: "Backend",
            icon: <Flame size={24} />,
            level: "Intermediate",
            color: "from-[#6DB33F] to-[#347206]"
        },

        {
            name: "REST API",
            category: "Backend",
            icon: <Zap size={24} />,
            level: "Intermediate",
            color: "from-[#6C4DFF] to-[#00D4FF]"
        },

        {
            name: "Node.js",
            category: "Backend",
            icon: <Server size={24} />,
            level: "Intermediate",
            color: "from-[#339933] to-[#215732]"
        },

        {
            name: "Spring Security",
            category: "Backend",
            icon: <Layers size={24} />,
            level: "Intermediate",
            color: "from-[#6DB33F] to-[#1B5E20]"
        },


        // ====================================================
        // FRONTEND
        // ====================================================

        {
            name: "React",
            category: "Frontend",
            icon: <Globe size={24} />,
            level: "Intermediate",
            color: "from-[#61DAFB] to-[#0088CC]"
        },

        {
            name: "Tailwind CSS",
            category: "Frontend",
            icon: <Layout size={24} />,
            level: "Intermediate",
            color: "from-[#06B6D4] to-[#0B93AC]"
        },

        {
            name: "Material UI",
            category: "Frontend",
            icon: <Sparkles size={24} />,
            level: "Familiar",
            color: "from-[#007FFF] to-[#0059B2]"
        },

        {
            name: "Redux",
            category: "Frontend",
            icon: <Cpu size={24} />,
            level: "Familiar",
            color: "from-[#764ABC] to-[#593196]"
        },


        // ====================================================
        // DATABASE
        // ====================================================

        {
            name: "MySQL",
            category: "Database",
            icon: <Database size={24} />,
            level: "Intermediate",
            color: "from-[#4479A1] to-[#00546B]"
        },


        // ====================================================
        // TOOLS
        // ====================================================

        {
            name: "Git",
            category: "Tools",
            icon: <GitBranch size={24} />,
            level: "Intermediate",
            color: "from-[#F05032] to-[#C0371D]"
        },

        {
            name: "GitHub",
            category: "Tools",
            icon: <Github size={24} />,
            level: "Intermediate",
            color: "from-[#6e5494] to-[#333333]"
        },

        {
            name: "Postman",
            category: "Tools",
            icon: <Zap size={24} />,
            level: "Intermediate",
            color: "from-[#FF6C37] to-[#D64413]"
        },

        {
            name: "VS Code",
            category: "Tools",
            icon: <Code2 size={24} />,
            level: "Advanced",
            color: "from-[#007ACC] to-[#005999]"
        },

        {
            name: "Eclipse",
            category: "Tools",
            icon: <Wrench size={24} />,
            level: "Familiar",
            color: "from-[#2C2255] to-[#7B5294]"
        },


        // ====================================================
        // AI
        // ====================================================

        {
            name: "OpenAI API",
            category: "AI",
            icon: <Bot size={24} />,
            level: "Familiar",
            color: "from-[#10A37F] to-[#07624B]"
        },


        // ====================================================
        // DEPLOYMENT
        // ====================================================

        {
            name: "Render",
            category: "Deployment",
            icon: <Cloud size={24} />,
            level: "Familiar",
            color: "from-[#46E3B7] to-[#000000]"
        },

        {
            name: "Vercel",
            category: "Deployment",
            icon: <Globe size={24} />,
            level: "Intermediate",
            color: "from-[#000000] to-[#666666]"
        },

        {
            name: "Docker",
            category: "Deployment",
            icon: <Boxes size={24} />,
            level: "Familiar",
            color: "from-[#2496ED] to-[#0B5FA5]"
        }
    ];


    // ========================================================
    // FILTERED SKILLS
    // ========================================================

    const filteredSkills =
        filter === 'All'
            ? allSkills
            : allSkills.filter(
                (skill) => skill.category === filter
            );


    // ========================================================
    // SHOW MORE LOGIC
    // ========================================================

    const visibleSkills =
        filter === 'All' && !showAll
            ? filteredSkills.slice(0, 10)
            : filteredSkills;


    // ========================================================
    // CATEGORY COUNT
    // ========================================================

    const getCategoryCount = (category) => {

        if (category === 'All') {
            return allSkills.length;
        }

        return allSkills.filter(
            (skill) => skill.category === category
        ).length;
    };


    // ========================================================
    // FILTER HANDLER
    // ========================================================

    const handleFilterChange = (category) => {
        setFilter(category);
        setShowAll(false);
    };


    // ========================================================
    // RENDER
    // ========================================================

    return (
        <section
            id="skills"
            className="py-24 px-4 sm:px-6 relative z-10"
        >

            <div className="max-w-7xl mx-auto flex flex-col items-center">


                {/* =================================================
                    SECTION HEADER
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    className="flex flex-col items-center text-center mb-10"
                >

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-4">

                        <Wrench
                            size={14}
                            className="text-[#00D4FF]"
                        />

                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
                            Technical Proficiency
                        </span>

                    </div>


                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">

                        Skills &{" "}

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">
                            Technologies
                        </span>

                    </h2>


                    <p className="max-w-2xl mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">

                        Technologies and tools I use to build
                        modern, responsive, and full-stack
                        applications.

                    </p>

                </motion.div>



                {/* =================================================
                    CORE STACK
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        delay: 0.05
                    }}
                    className="w-full max-w-5xl mb-10"
                >

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">


                        {/* JAVA */}

                        <div className="glass-card rounded-2xl border border-[#6C4DFF]/20 p-4 flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F89820] to-[#5382A1] flex items-center justify-center text-white">

                                <CoffeeIcon size={20} />

                            </div>

                            <div>

                                <p className="text-xs text-gray-400">
                                    Primary Language
                                </p>

                                <p className="text-sm font-bold text-white">
                                    Java
                                </p>

                            </div>

                        </div>


                        {/* SPRING BOOT */}

                        <div className="glass-card rounded-2xl border border-[#6C4DFF]/20 p-4 flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DB33F] to-[#347206] flex items-center justify-center text-white">

                                <Flame size={20} />

                            </div>

                            <div>

                                <p className="text-xs text-gray-400">
                                    Backend
                                </p>

                                <p className="text-sm font-bold text-white">
                                    Spring Boot
                                </p>

                            </div>

                        </div>


                        {/* REACT */}

                        <div className="glass-card rounded-2xl border border-[#6C4DFF]/20 p-4 flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#61DAFB] to-[#0088CC] flex items-center justify-center text-white">

                                <Globe size={20} />

                            </div>

                            <div>

                                <p className="text-xs text-gray-400">
                                    Frontend
                                </p>

                                <p className="text-sm font-bold text-white">
                                    React
                                </p>

                            </div>

                        </div>


                        {/* MYSQL */}

                        <div className="glass-card rounded-2xl border border-[#6C4DFF]/20 p-4 flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4479A1] to-[#00546B] flex items-center justify-center text-white">

                                <Database size={20} />

                            </div>

                            <div>

                                <p className="text-xs text-gray-400">
                                    Database
                                </p>

                                <p className="text-sm font-bold text-white">
                                    MySQL
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>



                {/* =================================================
                    FILTER TABS
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        delay: 0.1
                    }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-5xl"
                >

                    {categories.map((category) => {

                        const active = filter === category;

                        return (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${active
                                        ? 'bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white shadow-lg shadow-[#6C4DFF]/30 scale-105'
                                        : 'bg-[#120E26]/80 text-gray-400 hover:text-white hover:bg-white/10 border border-[#6C4DFF]/20'
                                    }`}
                            >

                                <span>
                                    {category}
                                </span>

                                <span
                                    className={`min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center text-[10px] font-mono ${active
                                            ? 'bg-white/20 text-white'
                                            : 'bg-white/5 text-gray-500 group-hover:text-gray-300'
                                        }`}
                                >
                                    {getCategoryCount(category)}
                                </span>

                            </button>
                        );

                    })}

                </motion.div>



                {/* =================================================
                    SKILLS GRID
                ================================================== */}

                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 w-full"
                >

                    <AnimatePresence mode="popLayout">

                        {visibleSkills.map((skill) => (

                            <motion.div
                                key={skill.name}
                                layout
                                initial={{
                                    opacity: 0,
                                    scale: 0.85,
                                    y: 15
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.85
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                whileHover={{
                                    y: -5
                                }}
                                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 border border-[#6C4DFF]/20 relative group overflow-hidden"
                            >

                                {/* Hover Glow */}

                                <div
                                    className={`absolute -inset-1 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}
                                />


                                {/* Icon */}

                                <div className="flex items-start justify-between relative z-10">

                                    <div
                                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >

                                        <div className="w-full h-full bg-[#080812] rounded-[11px] flex items-center justify-center text-white">

                                            {skill.icon}

                                        </div>

                                    </div>


                                    <CheckCircle2
                                        size={15}
                                        className="text-[#00D4FF] opacity-30 group-hover:opacity-100 transition-opacity"
                                    />

                                </div>


                                {/* Skill Info */}

                                <div className="relative z-10 mt-4">

                                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">

                                        {skill.name}

                                    </h4>

                                    <span className="text-[10px] text-gray-500 font-mono block mt-1">

                                        {skill.category}

                                    </span>

                                </div>


                                {/* Skill Level */}

                                <div className="relative z-10 mt-4">

                                    <div className="inline-flex items-center gap-1.5">

                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />

                                        <span className="text-[10px] text-gray-400 font-mono">

                                            {skill.level}

                                        </span>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </AnimatePresence>

                </motion.div>



                {/* =================================================
                    SHOW MORE / SHOW LESS
                ================================================== */}

                {filter === 'All' && filteredSkills.length > 10 && (

                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 10
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        whileHover={{
                            scale: 1.04
                        }}
                        whileTap={{
                            scale: 0.97
                        }}
                        onClick={() => setShowAll(!showAll)}
                        className="mt-10 group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white text-sm font-semibold shadow-lg shadow-[#6C4DFF]/25 hover:shadow-[#00D4FF]/30 transition-all duration-300"
                    >

                        {showAll ? (
                            <>
                                Show Less

                                <ChevronUp
                                    size={17}
                                    className="group-hover:-translate-y-0.5 transition-transform"
                                />
                            </>
                        ) : (
                            <>
                                Show More

                                <ChevronDown
                                    size={17}
                                    className="group-hover:translate-y-0.5 transition-transform"
                                />
                            </>
                        )}

                    </motion.button>

                )}

            </div>

        </section>
    );
};

export default Skills;