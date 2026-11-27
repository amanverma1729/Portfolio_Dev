import React from 'react';

const About = () => {
    const facts = [
        { label: 'Degree', value: 'B.Tech Computer Science (2026)' },
        { label: 'Core Stack', value: 'Java, Spring Boot, React, MySQL' },
        { label: 'DSA Practice', value: '300+ Problems Solved' },
        { label: 'GitHub', value: '25+ Repositories' },
        { label: 'Projects', value: '15+ Completed Builds' },
        { label: 'Location', value: 'New Delhi, India' },
    ];

    return (
        <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 sm:mb-10">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1.5">
                        01 / about
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        About Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Prose */}
                    <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <p>
                            I'm <span className="text-zinc-900 dark:text-zinc-100 font-medium">Aman Verma</span>, a Computer Science graduate focused on building full-stack web applications with{' '}
                            <span className="text-zinc-900 dark:text-zinc-200 font-medium">Java, Spring Boot, React, SQL, and REST APIs</span>.
                        </p>
                        <p>
                            I like taking an application from database schema and authentication flows all the way to a responsive frontend. Whether it's implementing JWT and role-based access control in Spring Security or structuring reusable React components, I aim for code that is readable and predictable.
                        </p>
                        <p>
                            Outside project work, I practice Data Structures & Algorithms in Java, refine my backend architecture skills through intensive Java Full Stack training at QSpiders, and experiment with AI API integrations.
                        </p>
                    </div>

                    {/* Specification Table */}
                    <div className="lg:col-span-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] divide-y divide-zinc-200 dark:divide-zinc-800 overflow-hidden shadow-sm">
                        {facts.map((item) => (
                            <div
                                key={item.label}
                                className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4 text-xs sm:text-sm"
                            >
                                <span className="font-mono text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                                    {item.label}
                                </span>
                                <span className="font-medium text-zinc-900 dark:text-zinc-100 sm:text-right">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
