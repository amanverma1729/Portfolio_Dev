import React from 'react';
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
import ScrollProgress from './components/ScrollProgress';

const MainPortfolio = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#0B0D10] text-zinc-900 dark:text-zinc-100 dev-grid-bg flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <CertificationsPreview />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <ScrollProgress />
            <Routes>
                <Route path="/" element={<MainPortfolio />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="*" element={<MainPortfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
