import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import EcomImage from "../assets/E-com.png";
import BillBuddyImage from "../assets/BillBuddyLogin.png";
import PortfolioImage from "../assets/Portfolio.png";
import ResumeGenImage from "../assets/ResumeGen.png";

const projectsData = [
    {
        title: "Flash",
        image: EcomImage,
        description:
            "Full-stack e-commerce platform built with Spring Boot and React, featuring JWT authentication, role-based access control, product discovery, cart state, transactional checkout, and order/inventory management.",
        features: [
            "JWT Authentication & RBAC",
            "Product Search & Filtering",
            "Cart & Transactional Checkout",
            "Order & Inventory Management"
        ],
        tags: ["Java", "Spring Boot", "Spring Security", "React", "MySQL", "JWT", "Docker"],
        category: "Full Stack",
        github: "https://github.com/amanverma1729/E-Commerce-Application",
        link: "https://flash-ecom.vercel.app/",
    },
    {
        title: "Bill Buddy",
        image: BillBuddyImage,
        description:
            "Bill and expense management application built to scan, track, and categorize recurring bills with organized spending summaries.",
        features: [
            "Bill scanning",
            "Expense tracking",
            "Bill management",
            "Spending insights"
        ],
        tags: ["Java", "Spring Boot", "React", "MySQL"],
        category: "Finance",
        github: "https://github.com/amanverma1729/Bill-Buddy",
        link: "https://billbuddys.vercel.app/",
    },
    {
        title: "ResumeGen",
        image: ResumeGenImage,
        description:
            "Resume builder allowing developers and job seekers to structure clean resume layouts and export directly to PDF.",
        features: [
            "Structured resume builder",
            "Direct PDF export",
            "Responsive layout"
        ],
        tags: ["React", "JavaScript", "CSS", "HTML"],
        category: "Full Stack",
        github: "https://github.com/amanverma1729/ResumeGen",
        link: "https://resume-gen-gcqf.vercel.app/",
    },
    {
        title: "Spotify Replica",
        description:
            "Audio streaming client replicating Spotify's dark interface, custom audio player controls, and responsive desktop/mobile layout.",
        features: [
            "Custom audio player controls",
            "Responsive grid & sidebar layout"
        ],
        tags: ["React", "Tailwind CSS"],
        category: "Web Apps",
        github: "https://github.com/amanverma1729/Spotify-Replica",
        link: "https://github.com/amanverma1729/Spotify-Replica",
    },
    {
        title: "Developer Portfolio",
        image: PortfolioImage,
        description:
            "Personal developer portfolio engineered with React, Vite, and Tailwind CSS to showcase full-stack projects, technical stack, and credentials.",
        features: [
            "Light & dark theme support",
            "Filterable project & skill views",
            "Dedicated certifications archive"
        ],
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
        category: "Web Apps",
        github: "https://github.com/amanverma1729/Portfolio_Dev.git",
        link: "https://amanverma1729.vercel.app/",
    },
];

const categories = ['All', 'Full Stack', 'Finance', 'Web Apps'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects =
        filter === 'All'
            ? projectsData
            : projectsData.filter((project) => project.category === filter);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-2">
                            04 / projects
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            Featured Projects
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setFilter(category)}
                                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                                    filter === category
                                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A]'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
