import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { value: "12+", label: "Projects\nCompleted" },
        { value: "1+", label: "Years of\nExperience" },
        { value: "10+", label: "Happy\nClients" },
        { value: "1000+", label: "Commits\non GitHub" }
    ];

    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                
                {/* Left Side: Profile & Bio */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 flex-1">
                    {/* Small Profile Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-32 h-32 md:w-40 md:h-40 shrink-0"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue via-neon-violet to-neon-pink opacity-80" />
                        <div className="absolute inset-1 rounded-full bg-space-950 z-10" />
                        <div className="absolute inset-2 rounded-full overflow-hidden z-20">
                            <img
                                src={profile}
                                alt="Aman Verma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center sm:items-start"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">About Me</h2>
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 max-w-md">
                            I'm a passionate Full Stack Developer who loves turning ideas into reality. I specialize in building modern, responsive and user-friendly web applications.
                        </p>
                        <a 
                            href="#experience"
                            className="px-6 py-2 rounded-lg border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors inline-block"
                        >
                            Know More About Me
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: Stats Grid */}
                <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</h3>
                            <p className="text-xs text-gray-400 whitespace-pre-line leading-tight">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
