import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onDownloadCV }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll listener for sticky state and active section
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`floating-nav-container ${hasScrolled ? 'nav-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: hasScrolled ? '12px' : '20px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <nav
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '1180px',
            padding: '10px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '9999px',
            background: hasScrolled
              ? 'rgba(9, 14, 28, 0.85)'
              : 'rgba(11, 18, 36, 0.72)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-inner-highlight), 0 10px 30px -5px rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Main Navigation"
        >
          {/* Zone 1: Single text element Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-head)',
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '-0.3px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--cyan-primary)',
                boxShadow: '0 0 10px var(--cyan-primary)',
                display: 'inline-block',
              }}
            />
            <span>{personalInfo.shortName}</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <div
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--cyan-primary)' : 'var(--text-muted)',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-head)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Zone 3: Actions (CTA & Mobile Menu) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={personalInfo.cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-primary nav-cv-btn"
              style={{
                padding: '8px 18px',
                fontSize: '13px',
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
              title="Download CV as PDF (Live from Google Docs)"
            >
              <i className="fas fa-file-arrow-down" style={{ fontSize: '12px' }}></i>
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                color: 'var(--text-head)',
                cursor: 'pointer',
                fontSize: '16px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 998,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '80%',
          maxWidth: '320px',
          zIndex: 999,
          backgroundColor: 'var(--glass-bg-base)',
          borderLeft: '1px solid var(--glass-border)',
          boxShadow: 'var(--glass-shadow-lg)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--text-head)' }}>
              {personalInfo.shortName}
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '20px',
                cursor: 'pointer',
              }}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--cyan-primary)' : 'var(--text-body)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}></i>}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}>
          <a
            href={personalInfo.cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-primary"
            style={{ width: '100%', marginBottom: '12px', textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(false)}
            title="Download CV as PDF (Live from Google Docs)"
          >
            <i className="fas fa-file-arrow-down"></i>
            <span>Download CV (Live PDF)</span>
          </a>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-secondary"
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <i className="fab fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
