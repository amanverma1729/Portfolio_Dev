import React from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <section className="py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 sm:mb-10">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1.5">
                        credentials / log
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-3">
                        Certifications & Training
                    </h1>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                        Verified coursework, NPTEL academic certifications, internship credentials, and ongoing Java Full Stack training.
                    </p>
                </div>

                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <article
                            key={index}
                            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] p-4 sm:p-6 shadow-sm"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0B0D10] text-emerald-600 dark:text-emerald-400 shrink-0">
                                        <Award size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                            {cert.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                            <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                                {cert.issuer}
                                            </span>
                                            <span>·</span>
                                            <span className="inline-flex items-center gap-1 font-mono">
                                                <Calendar size={12} />
                                                {cert.issueDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {cert.status && (
                                    <span className="self-start px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shrink-0">
                                        {cert.status}
                                    </span>
                                )}
                            </div>

                            {cert.description && (
                                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                    {cert.description}
                                </p>
                            )}

                            {cert.credentialId && (
                                <div className="mb-4 px-3 py-2 rounded bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800 flex sm:inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 max-w-full overflow-hidden">
                                    <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                                    <span className="truncate">
                                        ID: <span className="text-zinc-900 dark:text-zinc-200">{cert.credentialId}</span>
                                    </span>
                                </div>
                            )}

                            {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-[#0B0D10] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/15 transition-colors"
                                    >
                                        <span>View Verified Certificate</span>
                                        <ExternalLink size={13} />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                                        <Clock size={13} />
                                        <span>Training in progress</span>
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
