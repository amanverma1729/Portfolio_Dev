import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({
    title,
    description,
    tags,
    github,
    link,
    gradient = "from-blue-500 to-cyan-400",
    delay = 0
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
        >
            {/* Image Placeholder with Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-space-950/20 group-hover:bg-transparent transition-colors duration-500" />
                {/* Tech Stack Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-space-950/80 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Floating decorative elements inside the image */}
                <motion.div 
                    className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Content area */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                    {description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-violet rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
