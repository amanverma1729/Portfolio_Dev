import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import CustomCursor from './components/CustomCursor';
import MissionLoading from './components/MissionLoading';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

import { useTheme } from './context/ThemeContext';

function App() {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    return (
        <div className={`relative min-h-screen selection:bg-[#6C4DFF]/40 overflow-x-hidden font-medium transition-colors duration-500 ${theme === 'light' ? 'bg-[#F4F6FB] text-slate-900' : 'bg-[#080812] text-white'}`}>
            <AnimatePresence>
                {loading && <MissionLoading onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <CustomCursor />
            <ScrollProgress />
            <FloatingBackground />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <About />

                {/* Skills Section */}
                <Skills />

                {/* Experience & Education Section */}
                <Experience />

                {/* Certifications Section */}
                <Certifications />

                {/* Projects Section */}
                <Projects />

                {/* Contact Section */}
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
