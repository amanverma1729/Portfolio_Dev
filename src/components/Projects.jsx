import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

// ==================== PROJECT IMAGES ====================
import EcomImage from "../assets/E-com.png";
import BillBuddyImage from "../assets/BillBuddyLogin.png";
import PortfolioImage from "../assets/Portfolio.png";
import ResumeGenImage from "../assets/ResumeGen.png";


const Projects = () => {

    const [filter, setFilter] = useState('All');


    // ==================== FILTER CATEGORIES ====================
    const categories = [
        'All',
        'Full Stack',
        'Finance',
        'Web Apps'
    ];


    // ==================== PROJECT DATA ====================
    const projectsData = [

        // =====================================================
        // FLASH E-COMMERCE
        // =====================================================
        {
            title: "Flash",

            image: EcomImage,

            description:
                "Full-stack enterprise e-commerce platform built with Spring Boot and React, featuring secure JWT authentication, role-based access control, product discovery, cart management, transactional checkout, inventory validation, and order management.",

            features: [
                "JWT Authentication & RBAC",
                "Product Search & Filtering",
                "Cart & Transactional Checkout",
                "Order & Inventory Management"
            ],

            tags: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "React",
                "MySQL",
                "JWT",
                "Docker"
            ],

            category: "Full Stack",

            github:
                "https://github.com/amanverma1729/E-Commerce-Application",

            link:
                "https://flash-ecom.vercel.app/",

            gradient:
                "from-[#FF6B35] via-[#FF3D81] to-[#7B2CBF]"
        },


        // =====================================================
        // BILL BUDDY
        // =====================================================
        {
            title: "Bill Buddy",

            image: BillBuddyImage,

            description:
                "Smart bill and expense management application that helps users scan, track, and manage their bills while keeping their spending organized.",

            features: [
                "Bill scanning",
                "Expense tracking",
                "Bill management",
                "Spending insights"
            ],

            tags: [
                "Java",
                "Spring Boot",
                "React",
                "MySQL"
            ],

            category: "Finance",

            github:
                "https://github.com/amanverma1729/Bill-Buddy",

            link:
                "https://billbuddys.vercel.app/",

            gradient:
                "from-[#00B4D8] via-[#0077B6] to-[#90E0EF]"
        },


        // =====================================================
        // RESUMEGEN
        // =====================================================
        {
            title: "ResumeGen",

            image: ResumeGenImage,

            description:
                "Professional resume generation suite allowing developers and job seekers to curate atomic design resume templates and serialize them directly into PDF format.",

            features: [
                "Professional resume builder",
                "Download PDF",
                "Responsive design"
            ],

            tags: [
                "React",
                "JavaScript",
                "CSS",
                "HTML"
            ],

            category: "Full Stack",

            github:
                "https://github.com/amanverma1729/ResumeGen",

            link:
                "https://resume-gen-gcqf.vercel.app/",

            gradient:
                "from-[#00D4FF] via-[#6C4DFF] to-[#9D4EDD]"
        },


        // =====================================================
        // SPOTIFY REPLICA
        // =====================================================
        {
            title: "Spotify Replica",

            description:
                "High-performance audio streaming client mirroring Spotify's signature dark UI, custom kinetic audio player controls, and responsive layout across desktop and mobile screens.",

            features: [
                "Spotify UI Clone",
                "Responsive Design"
            ],

            tags: [
                "React",
                "Tailwind CSS"
            ],

            category: "Web Apps",

            github:
                "https://github.com/amanverma1729/Spotify-Replica",

            link:
                "https://github.com/amanverma1729/Spotify-Replica",

            gradient:
                "from-[#1DB954] via-[#00D4FF] to-[#6C4DFF]"
        },


        // =====================================================
        // DEVELOPER PORTFOLIO
        // =====================================================
        {
            title: "Developer Portfolio",

            image: PortfolioImage,

            description:
                "Modern, high-performance personal developer portfolio showcasing full-stack projects, skills, education, and career timeline with smooth Framer Motion animations.",

            features: [
                "Responsive React UI",
                "Framer Motion Animations",
                "Dynamic Project Showcase",
                "Interactive Navigation"
            ],

            tags: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Framer Motion"
            ],

            category: "Web Apps",

            github:
                "https://github.com/amanverma1729/Portfolio_Dev.git",

            link:
                "https://amanverma1729.vercel.app/",

            gradient:
                "from-[#6C4DFF] via-[#00D4FF] to-[#9D4EDD]"
        }

    ];


    // ==================== FILTER PROJECTS ====================
    const filteredProjects =
        filter === 'All'
            ? projectsData
            : projectsData.filter(
                (project) => project.category === filter
            );


    return (

        <section
            id="projects"
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
                    className="flex flex-col items-center text-center mb-12"
                >

                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">

                        <FolderGit2
                            size={14}
                            className="text-[#00D4FF]"
                        />

                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
                            Portfolio Showcase
                        </span>

                    </div>


                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">

                        Featured{" "}

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">
                            Projects
                        </span>

                    </h2>

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
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
                >

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${filter === category
                                ? 'bg-gradient-to-r from-[#6C4DFF] to-[#00D4FF] text-white shadow-lg shadow-[#6C4DFF]/30 scale-105'
                                : 'bg-[#120E26]/80 text-gray-400 hover:text-white hover:bg-white/10 border border-[#6C4DFF]/20'
                                }`}
                        >
                            {category}
                        </button>

                    ))}

                </motion.div>



                {/* =================================================
                    PROJECTS GRID
                ================================================== */}

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
                >

                    <AnimatePresence mode="popLayout">

                        {filteredProjects.map((project, index) => (

                            <ProjectCard
                                key={project.title}
                                {...project}
                                delay={index * 0.1}
                            />

                        ))}

                    </AnimatePresence>

                </motion.div>

            </div>

        </section>
    );
};


export default Projects;