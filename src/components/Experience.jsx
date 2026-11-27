import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const experienceData = [
    {
        title: 'Frontend Developer Trainee',
        company: 'Campaigning Source Pvt. Ltd.',
        date: 'Sep 2025 – Jan 2026',
        location: 'Ghaziabad, UP, India',
        description:
            'Built responsive user interfaces using React.js, JavaScript, HTML5, and CSS3, collaborating through Git workflows and component-based frontend architecture.',
        workedOn: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
    },
];

const educationData = [
    {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'NITRA Technical Campus, Ghaziabad',
        year: '2022 – 2026',
        description:
            'Core coursework in Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Software Engineering, and Web Technologies.',
    },
    {
        degree: 'Higher Secondary (Class XII · PCM)',
        institution: 'St. Kamla Children Senior Secondary School',
        year: '2022',
    },
    {
        degree: 'Secondary School (Class X)',
        institution: 'St. Kamla Children Senior Secondary School',
        year: '2020',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 sm:mb-10">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1.5">
                        03 / experience
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Work Experience */}
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                            <Briefcase size={16} className="text-emerald-600 dark:text-emerald-400" />
                            <span>Work Experience</span>
                        </div>

                        <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-5 sm:pl-6 space-y-5">
                            {experienceData.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <span className="absolute -left-[25px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-zinc-50 dark:ring-[#0B0D10]" />

                                    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] p-4 sm:p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-1.5">
                                            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                                {item.title}
                                            </h3>
                                            <span className="font-mono text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                                                {item.date}
                                            </span>
                                        </div>

                                        <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                                            {item.company}
                                        </div>

                                        <div className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                                            <MapPin size={12} />
                                            <span>{item.location}</span>
                                        </div>

                                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.workedOn.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                            <GraduationCap size={16} className="text-emerald-600 dark:text-emerald-400" />
                            <span>Education</span>
                        </div>

                        <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-5 sm:pl-6 space-y-4 sm:space-y-5">
                            {educationData.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <span className="absolute -left-[25px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-zinc-50 dark:ring-[#0B0D10]" />

                                    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] p-4 sm:p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-1">
                                            <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                                {item.degree}
                                            </h3>
                                            <span className="font-mono text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                                                {item.year}
                                            </span>
                                        </div>

                                        <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium">
                                            {item.institution}
                                        </div>

                                        {item.description && (
                                            <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
