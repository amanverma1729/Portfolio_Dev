import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Github, Copy, Check, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('aman835400@gmail.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard access may be restricted in non-HTTPS contexts
        }
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const formData = new FormData(e.target);
            const response = await fetch("https://formsubmit.co/ajax/aman835400@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 6000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 6000);
            }
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 6000);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={16} />,
            title: "Email",
            value: "aman835400@gmail.com",
            link: "mailto:aman835400@gmail.com",
        },
        {
            icon: <Github size={16} />,
            title: "GitHub",
            value: "github.com/amanverma1729",
            link: "https://github.com/amanverma1729",
        },
        {
            icon: <Linkedin size={16} />,
            title: "LinkedIn",
            value: "linkedin.com/in/amanverma1729",
            link: "https://www.linkedin.com/in/amanverma1729/",
        },
        {
            icon: <MapPin size={16} />,
            title: "Location",
            value: "New Delhi, India",
        },
    ];

    return (
        <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 sm:mb-10">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1.5">
                        06 / contact
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                        Get in Touch
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
                        Open to Java Full Stack, Backend, and Software Engineering roles. Send a message or reach out directly via email.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] p-4 sm:p-6 shadow-sm">
                        {formStatus === 'success' ? (
                            <div className="py-12 flex flex-col items-center text-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle2 size={22} />
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                    Message sent
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleContactSubmit}>
                                {formStatus === 'error' && (
                                    <div className="p-3 rounded-md border border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                                        <AlertCircle size={15} className="shrink-0" />
                                        <span>Could not send message. Please email me directly at aman835400@gmail.com.</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
                                            Name *
                                        </label>
                                        <input
                                            id="contact-name"
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-300 dark:border-zinc-800 px-3 py-2.5 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
                                            Email *
                                        </label>
                                        <input
                                            id="contact-email"
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-300 dark:border-zinc-800 px-3 py-2.5 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-phone" className="block font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
                                            Phone
                                        </label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 9876543210"
                                            className="w-full rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-300 dark:border-zinc-800 px-3 py-2.5 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-subject" className="block font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
                                            Subject *
                                        </label>
                                        <input
                                            id="contact-subject"
                                            required
                                            name="subject"
                                            type="text"
                                            placeholder="Job opportunity / Project"
                                            className="w-full rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-300 dark:border-zinc-800 px-3 py-2.5 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block font-mono text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
                                        Message *
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        name="message"
                                        rows="4"
                                        placeholder="Write your message..."
                                        className="w-full rounded-md bg-zinc-50 dark:bg-[#0B0D10] border border-zinc-300 dark:border-zinc-800 px-3 py-2.5 text-base sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    disabled={formStatus === 'sending'}
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-zinc-900 dark:bg-emerald-500 text-white dark:text-zinc-950 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-emerald-400 disabled:opacity-60 transition-colors w-full sm:w-auto shadow-sm"
                                >
                                    {formStatus === 'sending' ? (
                                        <span className="font-mono text-xs">Sending...</span>
                                    ) : (
                                        <>
                                            <Send size={15} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Direct Channels */}
                    <div className="lg:col-span-5 space-y-3">
                        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11141A] divide-y divide-zinc-200 dark:divide-zinc-800 overflow-hidden shadow-sm">
                            {contactInfo.map((info) => (
                                <div key={info.title} className="p-4 flex items-center justify-between gap-3 hover:bg-zinc-50/70 dark:hover:bg-[#161B22]/60 transition-colors">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className="text-zinc-500 dark:text-zinc-400 shrink-0">
                                            {info.icon}
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                                                {info.title}
                                            </div>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block">
                                                    {info.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {info.title === 'Email' && (
                                        <button
                                            type="button"
                                            onClick={handleCopyEmail}
                                            className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0B0D10] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors shrink-0"
                                            title="Copy email address"
                                            aria-label="Copy email address"
                                        >
                                            {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
