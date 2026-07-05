import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experienceData = [
        {
            title: "Full Stack Developer",
            date: "2024 - Present",
            company: "Freelance",
            description: "Building scalable web applications and exceptional digital experiences for clients."
        },
        {
            title: "Frontend Intern",
            date: "2023 - 2024",
            company: "Tech Startup",
            description: "Developed responsive UI components and integrated RESTful APIs."
        }
    ];

    const educationData = [
        {
            title: "B.Tech in Computer Science",
            date: "2022 - 2026",
            institution: "NITRA Technical Campus, Ghaziabad",
            description: "CGPA: 6.8 | Specialized in Web Development & Java"
        },
        {
            title: "Secondary Education (XII)",
            date: "2022",
            institution: "St. Kamal Children Sr. Sec. School",
            description: "Percentage: 71.33% | Science Stream"
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    My Experience & Education
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet flex items-center justify-center text-sm">💼</span>
                            Experience
                        </h3>
                        <div className="border-l-2 border-white/10 ml-4 space-y-10">
                            {experienceData.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,85,255,0.8)]" />
                                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                    <div className="text-sm text-neon-blue mb-2 font-medium">{item.date}</div>
                                    <div className="text-md text-gray-300 font-medium mb-2">{item.company}</div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-rose to-neon-amber flex items-center justify-center text-sm">🎓</span>
                            Education
                        </h3>
                        <div className="border-l-2 border-white/10 ml-4 space-y-10">
                            {educationData.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-neon-rose shadow-[0_0_10px_rgba(255,0,123,0.8)]" />
                                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                    <div className="text-sm text-neon-rose mb-2 font-medium">{item.date}</div>
                                    <div className="text-md text-gray-300 font-medium mb-2">{item.institution}</div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
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
