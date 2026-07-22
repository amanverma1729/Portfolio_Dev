import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsPreview from './components/CertificationsPreview';
import CertificationsPage from './pages/CertificationsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import CustomCursor from './components/CustomCursor';
import MissionLoading from './components/MissionLoading';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

import { useTheme } from './context/ThemeContext';

const MainPortfolio = () => {
    return (
        <>
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

                {/* Certifications Preview Section */}
                <CertificationsPreview />

                {/* Projects Section */}
                <Projects />

                {/* Contact Section */}
                <Contact />
            </main>

            <Footer />
        </>
    );
};

function App() {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    return (
        <Router>
            <div className={`relative min-h-screen selection:bg-[#6C4DFF]/40 overflow-x-hidden font-medium transition-colors duration-500 ${theme === 'light' ? 'bg-[#F4F6FB] text-slate-900' : 'bg-[#080812] text-white'}`}>
                <AnimatePresence>
                    {loading && <MissionLoading onComplete={() => setLoading(false)} />}
                </AnimatePresence>

                <CustomCursor />
                <ScrollProgress />
                <FloatingBackground />

                <Routes>
                    <Route path="/" element={<MainPortfolio />} />
                    <Route path="/certifications" element={<CertificationsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
