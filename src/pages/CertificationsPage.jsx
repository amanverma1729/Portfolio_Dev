import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Certifications from '../components/Certifications';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingBackground from '../components/FloatingBackground';

const CertificationsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen selection:bg-[#6C4DFF]/40 overflow-x-hidden font-medium bg-[#080812] text-white">
            <CustomCursor />
            <FloatingBackground />
            
            {/* Top Navigation Bar with Back Button */}
            <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#080812]/80 backdrop-blur-xl border-b border-[#6C4DFF]/20 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <Link 
                        to="/"
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#120E26] border border-[#6C4DFF]/30 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white hover:border-[#00D4FF] hover:bg-[#6C4DFF]/20 transition-all duration-300 shadow-md group"
                    >
                        <ArrowLeft size={16} className="text-[#00D4FF] group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Main Portfolio</span>
                    </Link>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120E26]/80 border border-[#6C4DFF]/30 text-xs font-mono text-[#00D4FF]">
                        <Award size={14} />
                        <span>Interactive Trail View</span>
                    </div>
                </div>
            </header>

            {/* Main Certifications Trail */}
            <main className="pt-20">
                <Certifications />
            </main>

            <Footer />
        </div>
    );
};

export default CertificationsPage;
