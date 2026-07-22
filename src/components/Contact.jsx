import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Github, MessageSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

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
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 6000);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={22} className="text-[#00D4FF]" />,
            title: "Email",
            value: "aman835400@gmail.com",
            link: "mailto:aman835400@gmail.com",
            gradient: "from-[#6C4DFF]/20 to-[#00D4FF]/20"
        },
        {
            icon: <Linkedin size={22} className="text-[#9D4EDD]" />,
            title: "LinkedIn",
            value: "amanverma1729",
            link: "https://www.linkedin.com/in/amanverma1729/",
            gradient: "from-[#9D4EDD]/20 to-[#6C4DFF]/20"
        },
        {
            icon: <Github size={22} className="text-[#00D4FF]" />,
            title: "GitHub",
            value: "amanverma1729",
            link: "https://github.com/amanverma1729",
            gradient: "from-[#00D4FF]/20 to-[#9D4EDD]/20"
        },
        {
            icon: <MapPin size={22} className="text-[#6C4DFF]" />,
            title: "Location",
            value: "Ghaziabad, Uttar Pradesh, India",
            link: "#",
            gradient: "from-[#6C4DFF]/20 to-[#00D4FF]/20"
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6C4DFF]/30 bg-[#120E26]/60 backdrop-blur-md mb-3">
                        <MessageSquare size={14} className="text-[#00D4FF]" />
                        <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">Let's Connect</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6C4DFF] via-[#9D4EDD] to-[#00D4FF]">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
                    
                    {/* Left Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-[#6C4DFF]/20 shadow-2xl relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                        <p className="text-xs sm:text-sm text-gray-300 mb-6">Have a project idea, question, or job opportunity? Send me a message below!</p>
                        
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    className="py-12 flex flex-col items-center gap-4 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF] flex items-center justify-center text-[#00D4FF] shadow-lg shadow-[#00D4FF]/30">
                                        <CheckCircle2 size={36} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                                    <p className="text-gray-300 text-sm max-w-md">Thank you for reaching out. I have received your message and will respond as soon as possible.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                    onSubmit={handleContactSubmit}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">YOUR NAME *</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="Aman Verma"
                                                className="w-full bg-[#080812]/80 border border-[#6C4DFF]/30 rounded-xl px-4 py-3 outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-white placeholder:text-gray-500 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">YOUR EMAIL *</label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full bg-[#080812]/80 border border-[#6C4DFF]/30 rounded-xl px-4 py-3 outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-white placeholder:text-gray-500 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">PHONE NUMBER</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 9876543210"
                                                className="w-full bg-[#080812]/80 border border-[#6C4DFF]/30 rounded-xl px-4 py-3 outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-white placeholder:text-gray-500 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">SUBJECT *</label>
                                            <input
                                                required
                                                name="subject"
                                                type="text"
                                                placeholder="Project Inquiry / Job Opportunity"
                                                className="w-full bg-[#080812]/80 border border-[#6C4DFF]/30 rounded-xl px-4 py-3 outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-white placeholder:text-gray-500 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">YOUR MESSAGE *</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows="4"
                                            placeholder="Write your message here..."
                                            className="w-full bg-[#080812]/80 border border-[#6C4DFF]/30 rounded-xl px-4 py-3 outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-white placeholder:text-gray-500 text-sm resize-none"
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        disabled={formStatus === 'sending'}
                                        type="submit"
                                        className="btn-primary w-full text-sm sm:text-base gap-2"
                                    >
                                        {formStatus === 'sending' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Right Column: Cards & Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 flex flex-col gap-4"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index}
                                    href={info.link}
                                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                                    className="glass-card glass-card-hover p-4 sm:p-5 rounded-2xl flex items-center gap-4 border border-[#6C4DFF]/20 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform`}>
                                        {info.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-xs font-mono text-gray-400 font-semibold uppercase">{info.title}</h4>
                                        <p className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors truncate">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Location Visual */}
                        <div className="flex-1 glass-card rounded-2xl p-5 border border-[#6C4DFF]/20 flex flex-col justify-center min-h-[160px] relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-xs font-mono text-[#00D4FF] font-semibold uppercase tracking-wider block mb-1">LOCATION</span>
                                <h4 className="text-lg font-bold text-white">Ghaziabad, Uttar Pradesh</h4>
                                <p className="text-xs text-gray-300">India</p>
                            </div>
                            <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin size={80} className="text-[#6C4DFF]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
