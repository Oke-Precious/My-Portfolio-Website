import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import { cvData } from './data/cvData.js';
import { generateCVPdf, getGoogleDocsExportUrl } from './utils/generateCVPdf.js';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleDownloadCV = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const storedDoc = localStorage.getItem('user_google_doc_cv') || cvData.googleDocUrl;
    const exportUrl = getGoogleDocsExportUrl(storedDoc);
    if (exportUrl) {
      // Direct live PDF download from Google Docs
      const link = document.createElement('a');
      link.href = exportUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Instant on-the-fly client-side PDF generation from resume data
      generateCVPdf();
    }
  };

  const handleOpenCVModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsCVModalOpen(true);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onDownloadCV={handleDownloadCV}
        onOpenCVModal={handleOpenCVModal}
      />
      <main>
        <Hero
          onDownloadCV={handleDownloadCV}
          onOpenCVModal={handleOpenCVModal}
        />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* CV Preview & Google Docs Sync Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </>
  );
}
