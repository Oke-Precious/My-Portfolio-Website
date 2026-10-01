import React, { useEffect, useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackgroundGlow from './components/BackgroundGlow';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import CodeShowcase from './components/CodeShowcase';
import GitHubSection from './components/GitHubSection';
import DeveloperTerminal from './components/DeveloperTerminal';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Interactive Upgrades
import RecruiterBrief from './components/RecruiterBrief';
import DeveloperModePanel from './components/DeveloperModePanel';
import CommandPalette from './components/CommandPalette';
import PortfolioAssistant from './components/PortfolioAssistant';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import ResumeModal from './components/ResumeModal';
import KeyboardShortcutsModal from './components/KeyboardShortcutsModal';
import EasterEgg from './components/EasterEgg';

import { personalInfo } from './data/portfolioData';

import './styles/glassmorphism.css';
import './style.css';

export default function App() {
  const [currentMode, setCurrentMode] = useState(() => {
    return localStorage.getItem('portfolio_view_mode') || 'normal';
  });
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: currentMode === 'recruiter' ? 400 : 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    }
  }, [currentMode]);

  const handleModeChange = (newMode) => {
    setCurrentMode(newMode);
    localStorage.setItem('portfolio_view_mode', newMode);
  };

  const handleDownloadCV = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'Oke_Precious_Abioye_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Global Keyboard Shortcuts (Ctrl/Cmd+K, P, G, C, A, T, ?, Esc)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Don't trigger if user is typing in form inputs
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      ) {
        return;
      }

      // Command Palette (Ctrl+K or Cmd+K)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Keyboard shortcuts
      if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'p') {
        const el = document.getElementById('projects');
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key.toLowerCase() === 'g') {
        const el = document.getElementById('github');
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key.toLowerCase() === 'c') {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key.toLowerCase() === 'a') {
        const el = document.getElementById('about');
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key.toLowerCase() === 't') {
        const el = document.getElementById('terminal');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <>
      <ScrollProgress />
      <BackgroundGlow />
      <CustomCursor />

      <Navbar
        onDownloadCV={handleDownloadCV}
        onOpenResume={() => setIsResumeOpen(true)}
        currentMode={currentMode}
        onModeChange={handleModeChange}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onTriggerEasterEgg={() => setIsEasterEggOpen(true)}
      />

      <main style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
        {/* Recruiter View Brief (Shown at top when Recruiter Mode is active) */}
        {currentMode === 'recruiter' && (
          <RecruiterBrief
            onSwitchMode={handleModeChange}
            onDownloadCV={handleDownloadCV}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {/* Developer Mode Deep Inspection Panel (Shown when Developer Mode is active) */}
        {currentMode === 'developer' && (
          <DeveloperModePanel onSwitchMode={handleModeChange} />
        )}

        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <Stats />
        <Skills />
        <Projects onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)} />
        <CurrentlyBuilding />
        <CodeShowcase />
        <GitHubSection />
        <DeveloperTerminal
          onModeChange={handleModeChange}
          onOpenResume={() => setIsResumeOpen(true)}
          onDownloadCV={handleDownloadCV}
        />
        <Services />
        <Contact />
      </main>

      <Footer />

      {/* Floating AI Portfolio Assistant ("Ask About Me") */}
      <PortfolioAssistant
        onSelectProject={(p) => setActiveCaseStudy(p)}
        onDownloadCV={handleDownloadCV}
      />

      {/* Deep-Dive Project Case Study Modal */}
      {activeCaseStudy && (
        <ProjectCaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}

      {/* Ctrl/Cmd + K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onModeChange={handleModeChange}
        onOpenResume={() => setIsResumeOpen(true)}
        onDownloadCV={handleDownloadCV}
        onSelectProject={(proj) => setActiveCaseStudy(proj)}
      />

      {/* Official Interactive Web Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownloadPDF={handleDownloadCV}
      />

      {/* Keyboard Shortcuts Cheat Sheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Developer Easter Egg Celebration */}
      <EasterEgg
        trigger={isEasterEggOpen}
        onReset={() => setIsEasterEggOpen(false)}
      />
    </>
  );
}
