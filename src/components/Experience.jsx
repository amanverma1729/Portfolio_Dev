import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experienceData = [
        {
            title: "Frontend Developer Trainee",
            company: "Campaigning Source Pvt. Ltd.",
            date: "September 2025 - January 2026",
            location: "Ghaziabad, Uttar Pradesh, India",
            workedOn: [
                "Frontend Development",
                "React.js",
                "HTML/CSS/JavaScript",
                "Version Control (Git)"
            ],
            description: "Learned and applied frontend development principles using React.js, HTML/CSS/JavaScript, and Git version control."
        }
        // {
        //     title: "Software Development Intern",
        //     company: "Software Development",
        //     date: "Internship",
        //     location: "India",
        //     workedOn: [
        //         "Full Stack Development",
        //         "JavaScript & React",
        //         "Node.js & Express",
        //         "SQL Databases"
        //     ],
        //     description: "Hands-on experience building full-stack web applications using JavaScript, React, Node.js, Express, and SQL with clean architecture."
        // }
    ];

    const educationData = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science & Engineering",
            institution: "NITRA Technical Campus, Ghaziabad",
            year: "Graduation Year: 2026",
            status: "Completed",
            description: "Focused on core Computer Science subjects including Data Structures, Algorithms, Software Engineering, Object-Oriented Programming (Java), Database Management Systems, and Web Technologies."
        },

        {
            degree: "Higher Secondary Certificate (Class XII)",
            field: "Science (PCM)",
            institution: "St. Kamla Children Senior Secondary School",
            year: "Year: 2022",
            status: "Completed",
            // description: "Studied Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation for engineering studies."
        },
        {
            degree: "Secondary School Certificate (Class X)",
            field: "Science",
            institution: "St. Kamla Children Senior Secondary School",
            year: "Year: 2020",
            status: "Completed",
            // description: "Completed secondary education with a strong foundation in Mathematics, Science, English, and Social Science."
        }

    ];

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <Briefcase size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Career Timeline</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Education</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#6C4DFF]/30">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C4DFF] to-[#00D4FF] flex items-center justify-center text-white shadow-lg shadow-[#6C4DFF]/30">
                                <Briefcase size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Work Experience</h3>
                        </div>

                        <div className="relative border-l-2 border-[#6C4DFF]/30 ml-4 pl-6 sm:pl-8 space-y-10">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#080812] border-2 border-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(0,212,255,0.6)]" />

                                    <div className="glass-card glass-card-hover p-6 rounded-2xl border border-[#6C4DFF]/20">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                                                {item.title}
                                            </h4>
                                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6C4DFF]/20 text-[#00D4FF] border border-[#6C4DFF]/40">
                                                {item.date}
                                            </span>
                                        </div>

                                        <p className="text-sm font-semibold text-[#9D4EDD] mb-3 flex items-center gap-1.5">
                                            <span>{item.company}</span>
                                        </p>

                                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        {/* Worked on badges */}
                                        {item.workedOn && (
                                            <div>
                                                <span className="text-[11px] font-mono text-gray-400 block mb-2 font-semibold">WORKED ON:</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.workedOn.map((skill, sIdx) => (
                                                        <span
                                                            key={sIdx}
                                                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200"
                                                        >
                                                            <CheckCircle2 size={12} className="text-[#00D4FF]" />
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#9D4EDD]/30">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9D4EDD] to-[#6C4DFF] flex items-center justify-center text-white shadow-lg shadow-[#9D4EDD]/30">
                                <GraduationCap size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-[#9D4EDD]/30 ml-4 pl-6 sm:pl-8 space-y-10">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#080812] border-2 border-[#9D4EDD] group-hover:bg-[#9D4EDD] group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(157,78,221,0.6)]" />

                                    <div className="glass-card glass-card-hover p-6 rounded-2xl border border-[#9D4EDD]/20">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-[#9D4EDD] transition-colors">
                                                {item.degree}
                                            </h4>
                                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#9D4EDD]/20 text-[#9D4EDD] border border-[#9D4EDD]/40">
                                                {item.year}
                                            </span>
                                        </div>

                                        <p className="text-sm font-semibold text-[#00D4FF] mb-1">
                                            {item.field}
                                        </p>
                                        <p className="text-xs text-gray-300 font-medium mb-3 flex items-center gap-1">
                                            <MapPin size={12} className="text-[#6C4DFF]" />
                                            {item.institution}
                                        </p>

                                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
