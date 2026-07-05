import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const formData = new FormData(e.target);
            const response = await fetch("https://formsubmit.co/ajax/amanverma0202004@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const contactInfo = [
        { icon: <Mail size={24} />, title: "Email", value: "aman835400@gmail.com", link: "mailto:aman835400@gmail.com", color: "text-neon-cyan" },
        { icon: <Phone size={24} />, title: "Phone", value: "+91 8354002731", link: "tel:8354002731", color: "text-neon-violet" },
        { icon: <MapPin size={24} />, title: "Location", value: "Ghaziabad, India", link: "#", color: "text-neon-emerald" }
    ];

    return (
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Contact Me
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 w-full">
                    {/* Left Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="py-12 flex flex-col items-center gap-6 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                                    <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
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
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-neon-blue transition-colors text-white placeholder:text-gray-500 text-sm"
                                        />
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-neon-blue transition-colors text-white placeholder:text-gray-500 text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-neon-blue transition-colors text-white placeholder:text-gray-500 text-sm"
                                        />
                                        <input
                                            required
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-neon-blue transition-colors text-white placeholder:text-gray-500 text-sm"
                                        />
                                    </div>
                                    <textarea
                                        required
                                        name="message"
                                        rows="5"
                                        placeholder="Your Message..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-neon-blue transition-colors text-white placeholder:text-gray-500 text-sm resize-none"
                                    ></textarea>
                                    
                                    <button
                                        disabled={formStatus === 'sending'}
                                        className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-violet text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {formStatus === 'sending' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Right Column: Info & Map */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index}
                                    href={info.link}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors group aspect-square lg:aspect-auto xl:aspect-square"
                                >
                                    <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">{info.title}</h4>
                                        <p className="text-xs text-gray-400 break-all">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl min-h-[200px] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-space-950/50 flex items-center justify-center z-10 group-hover:bg-space-950/20 transition-colors">
                                <span className="text-white/50 text-sm font-medium">Ghaziabad, Uttar Pradesh</span>
                            </div>
                            {/* Simple CSS grid to look like a map base */}
                            <div className="w-full h-full opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
