import React, { useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';

import './styles/glassmorphism.css';
import './style.css';

export default function App() {
  useEffect(() => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    }
  }, []);

  const handleDownloadCV = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'Oke_Precious_Abioye_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ScrollProgress />
      <BackgroundGlow />
      <Navbar onDownloadCV={handleDownloadCV} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <GitHubSection />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
