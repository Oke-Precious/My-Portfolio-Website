import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, onToggleTheme, onDownloadCV, onOpenCVModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav data-aos="fade-down" className="navbar myNav shadow shadow-lg">
        <div className="logo">
          <p>
            Special <span>Dev</span>
          </p>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation</span>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, '#hero')}>
            <li>Home</li>
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
            <li>ABOUT</li>
          </a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, '#skills')}>
            <li>SKILLS</li>
          </a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>
            <li>PROJECTS</li>
          </a>
          <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>
            <li>SERVICES</li>
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
            <li>CONTACT</li>
          </a>

          <div className="mobile-drawer-footer">
            <button
              className="downloadBtn mobile-download-btn"
              onClick={(e) => {
                setIsMenuOpen(false);
                onDownloadCV(e);
              }}
            >
              <i className="fas fa-download me-2"></i> Download CV
            </button>
          </div>
        </ul>

        <div className="nav-actions">
          <button className="downloadBtn desktop-download-btn" onClick={onDownloadCV}>
            Download CV
          </button>

          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
          </button>

          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={`mobile-nav-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
