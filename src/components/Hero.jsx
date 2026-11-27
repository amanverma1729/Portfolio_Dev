import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Download, ArrowDownRight, Terminal, MapPin } from 'lucide-react';
import profile from '../assets/profile.jpg';
import Aman_Verma_Dev from '../assets/Aman_Verma_Dev.pdf';

const tabs = [
    { id: 'overview', label: 'overview.json' },
    { id: 'stack', label: 'stack.txt' },
];

const Hero = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleResumeDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = Aman_Verma_Dev;
        link.download = 'Aman_Verma_Dev.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/amanverma1729',
            icon: <Github size={15} />,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/amanverma1729/',
            icon: <Linkedin size={15} />,
        },
        {
            name: 'LeetCode',
            href: 'https://leetcode.com/u/amanverma1729_/',
            icon: <Code2 size={15} />,
        },
        {
            name: 'Email',
            href: 'mailto:aman835400@gmail.com',
            icon: <Mail size={15} />,
        },
    ];

    return (
        <section id="home" className="pt-24 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Core Intro */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5">
                            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span>Open to Java / Full Stack roles</span>
                            </span>
                            <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                                <MapPin size={12} />
                                <span>New Delhi, IN</span>
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">
                            Aman Verma
                        </h1>

                        <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 font-medium leading-snug mb-4 sm:mb-5">
                            Java Full Stack Developer building reliable backends and clean React interfaces.
                        </p>

                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-6 sm:mb-8">
                            Computer Science graduate (B.Tech 2026) focused on{' '}
                            <span className="text-zinc-900 dark:text-zinc-200 font-medium">Java, Spring Boot, Spring Security, React, and MySQL</span>.
                            I care about clean REST API design, transactional data integrity, and fast, maintainable frontend code.
                        </p>

                        {/* Actions */}
                        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 mb-7 sm:mb-8">
                            <a
                                href={Aman_Verma_Dev}
                                download="Aman_Verma_Dev.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleResumeDownload}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-zinc-900 dark:bg-emerald-500 text-white dark:text-zinc-950 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-emerald-400 transition-colors shadow-sm"
                            >
                                <Download size={16} />
                                <span>Download Resume</span>
                            </a>

                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#11141A] text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                            >
                                <span>View Projects</span>
                                <ArrowDownRight size={16} className="text-zinc-500 dark:text-zinc-400" />
                            </a>
                        </div>

                        {/* Direct Links */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-x-5 sm:gap-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="inline-flex items-center gap-2 px-2.5 py-1.5 sm:px-0 sm:py-0 rounded-md sm:rounded-none border border-zinc-200 dark:border-zinc-800 sm:border-0 bg-white dark:bg-[#11141A] sm:bg-transparent dark:sm:bg-transparent text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-emerald-400 transition-colors"
                                >
                                    {social.icon}
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Clean Developer Card */}
                    <div className="lg:col-span-5">
                        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] overflow-hidden shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                            {/* Card Header with File Tabs */}
                            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#161B22]">
                                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                                    <Terminal size={13} className="text-emerald-600 dark:text-emerald-400" />
                                    <span>profile</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                                                activeTab === tab.id
                                                    ? 'bg-white dark:bg-[#0B0D10] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Portrait + Specs */}
                            <div className="p-4 space-y-4">
                                <div className="flex items-center gap-3.5 sm:gap-4">
                                    <img
                                        src={profile}
                                        alt="Aman Verma"
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover border border-zinc-200 dark:border-zinc-700 shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                            Aman Verma
                                        </div>
                                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 truncate">
                                            @amanverma1729
                                        </div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                            B.Tech CSE · Class of 2026
                                        </div>
                                    </div>
                                </div>

                                {activeTab === 'overview' ? (
                                    <pre className="p-3 rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800/80 text-[11px] sm:text-xs font-mono leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap break-words">
{`{
  "role": "Java Full Stack Developer",
  "location": "New Delhi, India",
  "core": ["Java", "Spring Boot", "React", "MySQL"],
  "recent": "Frontend Trainee @ Campaigning Source",
  "dsa_solved": "300+ (LeetCode)"
}`}
                                    </pre>
                                ) : (
                                    <div className="p-3 rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800/80 text-[11px] sm:text-xs font-mono space-y-2 text-zinc-700 dark:text-zinc-300">
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-zinc-500 shrink-0">backend</span>
                                            <span className="text-right">Java, Spring Boot, Security, Node.js</span>
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-zinc-500 shrink-0">frontend</span>
                                            <span className="text-right">React, JavaScript, Tailwind CSS</span>
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-zinc-500 shrink-0">database</span>
                                            <span className="text-right">MySQL, SQL</span>
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-zinc-500 shrink-0">tooling</span>
                                            <span className="text-right">Git, Docker, Postman, Vercel</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
