import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import ProjectCard from './components/ProjectCard';
import CustomCursor from './components/CustomCursor';
import MissionLoading from './components/MissionLoading';
import ScrollProgress from './components/ScrollProgress';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    
    return (
        <div className="relative min-h-screen text-space-950 dark:text-white selection:bg-neon-cyan/30 overflow-x-hidden bg-white dark:bg-space-950 font-medium transition-colors">
            <AnimatePresence>
                {loading && <MissionLoading onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <CustomCursor />
            <ScrollProgress />
            <FloatingBackground />
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <main className="relative z-10">
                <Hero
                    name="Aman Verma"
                    role="Full Stack Engineer"
                />

                {/* About Section */}
                <About />

                {/* Skills Section */}
                <Skills />

                {/* Experience & Education Section */}
                <Experience />

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
