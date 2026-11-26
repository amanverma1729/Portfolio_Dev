import React, { useState } from 'react';

const skillGroups = [
    {
        category: 'Languages',
        items: [
            { name: 'Java', primary: true },
            { name: 'JavaScript' },
            { name: 'SQL' },
            { name: 'HTML5' },
            { name: 'CSS3' },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Spring Boot', primary: true },
            { name: 'Spring Security' },
            { name: 'REST APIs' },
            { name: 'JWT Auth' },
            { name: 'Node.js' },
        ],
    },
    {
        category: 'Frontend',
        items: [
            { name: 'React', primary: true },
            { name: 'Tailwind CSS' },
            { name: 'Redux' },
            { name: 'Material UI' },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'MySQL', primary: true },
        ],
    },
    {
        category: 'Tools & DevOps',
        items: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'Docker' },
            { name: 'Postman' },
            { name: 'Vercel' },
            { name: 'Render' },
            { name: 'VS Code' },
            { name: 'Eclipse' },
        ],
    },
    {
        category: 'AI & Integrations',
        items: [
            { name: 'OpenAI API' },
        ],
    },
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...skillGroups.map((g) => g.category)];

    const visibleGroups =
        activeCategory === 'All'
            ? skillGroups
            : skillGroups.filter((g) => g.category === activeCategory);

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-2">
                            02 / skills
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            Technical Stack
                        </h2>
                    </div>

                    {/* Segmented Filter */}
                    <div className="flex flex-wrap gap-1.5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                                    activeCategory === cat
                                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Clean Grouped Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visibleGroups.map((group) => (
                        <div
                            key={group.category}
                            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] p-5"
                        >
                            <div className="flex items-center justify-between mb-3.5">
                                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    {group.category}
                                </h3>
                                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
                                    {group.items.length}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-2.5 py-1 rounded text-xs font-mono border ${
                                            skill.primary
                                                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium'
                                                : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0B0D10] text-zinc-700 dark:text-zinc-300'
                                        }`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
