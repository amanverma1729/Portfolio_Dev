import React from 'react';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

const ProjectCard = ({
    title,
    image,
    description,
    features = [],
    tags = [],
    category,
    github,
    link,
}) => {
    const displayHost = link
        ? link.replace(/^https?:\/\//, '').replace(/\/$/, '')
        : title.toLowerCase().replace(/\s+/g, '-');

    return (
        <article className="group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] overflow-hidden flex flex-col h-full hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
            {/* Minimal Window Bar */}
            <div className="px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#161B22] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                    {displayHost}
                </span>
            </div>

            {/* Screenshot / Preview */}
            <div className="aspect-[16/9] w-full bg-zinc-100 dark:bg-[#0B0D10] border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={`${title} screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-500 dark:text-zinc-400 font-mono text-xs">
                        <FolderGit2 size={24} strokeWidth={1.5} />
                        <span>{title.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {title}
                    </h3>
                    {category && (
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                            {category}
                        </span>
                    )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {description}
                </p>

                {features.length > 0 && (
                    <ul className="mb-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-600 dark:text-emerald-400 font-mono">-</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto pt-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Touch-Friendly Action Links */}
                <div className="flex items-center justify-between gap-2.5 pt-3.5 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0B0D10] text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
                        >
                            <Github size={14} />
                            <span>Source</span>
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/15 transition-colors ml-auto"
                        >
                            <span>Live Demo</span>
                            <ArrowUpRight size={14} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
