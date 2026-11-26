import React from 'react';
import { ArrowRight, ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certifications } from '../data/certifications';

const CertificationsPreview = () => {
    return (
        <section id="certifications" className="py-20 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-2">
                            05 / certifications
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            Certifications & Training
                        </h2>
                    </div>

                    <Link
                        to="/certifications"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                        <span>View full archive ({certifications.length})</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] divide-y divide-zinc-200 dark:divide-zinc-800">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                            <div className="flex items-start gap-3 min-w-0">
                                <Award size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                            {cert.title}
                                        </h3>
                                        {cert.status && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                                                {cert.status}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                        {cert.issuer} · <span className="font-mono">{cert.issueDate}</span>
                                    </p>
                                </div>
                            </div>

                            {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 shrink-0"
                                >
                                    <span>Verify</span>
                                    <ExternalLink size={12} />
                                </a>
                            ) : (
                                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                                    In progress
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsPreview;
