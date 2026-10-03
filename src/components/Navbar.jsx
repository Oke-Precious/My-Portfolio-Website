import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  onDownloadCV,
  onOpenResume,
  currentMode = 'normal',
  onModeChange,
  onOpenCommandPalette,
  onTriggerEasterEgg,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#hero');
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    const nextClicks = logoClicks + 1;
    setLogoClicks(nextClicks);
    if (nextClicks >= 5) {
      if (onTriggerEasterEgg) onTriggerEasterEgg();
      setLogoClicks(0);
    } else {
      handleNavClick(e, 'hero');
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: hasScrolled ? '12px 20px' : '20px 24px',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '9999px',
            background: hasScrolled
              ? 'rgba(9, 14, 28, 0.88)'
              : 'rgba(11, 18, 36, 0.78)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-inner-highlight), 0 10px 30px -5px rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Main Navigation"
        >
          {/* Zone 1: Brand & Logo */}
          <a
            href="#hero"
            onClick={handleLogoClick}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-head)',
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '-0.3px',
              cursor: 'pointer',
            }}
            title={logoClicks > 0 ? `Easter egg progress: ${logoClicks}/5 clicks` : personalInfo.name}
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
              gap: '2px',
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
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--cyan-primary)' : 'var(--text-muted)',
                    padding: '6px 12px',
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

          {/* Zone 3: Interactive View Mode Switcher, Command Palette & CV */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* View Mode Switcher (Normal | Recruiter | Developer) */}
            <div
              className="view-mode-pill-desktop"
              style={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                borderRadius: '9999px',
                padding: '2px',
              }}
            >
              {[
                { id: 'normal', label: 'Normal' },
                { id: 'recruiter', label: 'Recruiter' },
                { id: 'developer', label: 'Developer' },
              ].map((m) => {
                const isSelected = currentMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onModeChange && onModeChange(m.id)}
                    style={{
                      border: 'none',
                      background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                      color: isSelected ? 'var(--cyan-primary)' : 'var(--text-dim)',
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    title={`Switch to ${m.label} View`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            {/* Command Palette Trigger Badge */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette (Ctrl+K)"
              className="nav-cmdk-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                borderRadius: '9999px',
                padding: '6px 12px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cyan-primary)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
              title="Command Palette (Ctrl + K / Cmd + K)"
            >
              <i className="fas fa-terminal" style={{ fontSize: '11px' }} />
              <kbd style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--cyan-muted)' }}>⌘K</kbd>
            </button>

            {/* CV Download / Web Resume */}
            <button
              onClick={onOpenResume}
              className="glass-btn-primary nav-cv-btn"
              style={{
                padding: '7px 16px',
                fontSize: '12.5px',
                borderRadius: '9999px',
                cursor: 'pointer',
                border: 'none',
              }}
              title="Open Interactive Web Resume & Download PDF"
            >
              <i className="fas fa-id-card" style={{ fontSize: '11px' }}></i>
              <span>Resume</span>
            </button>

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
            backgroundColor: 'rgba(3, 6, 15, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1001,
          }}
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
          width: 'min(320px, 85vw)',
          backgroundColor: 'rgba(9, 14, 28, 0.96)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid var(--glass-border)',
          zIndex: 1002,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Drawer Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--cyan-primary)',
                  boxShadow: '0 0 10px var(--cyan-primary)',
                }}
              />
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-head)' }}>
                {personalInfo.name}
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Mobile View Mode Switcher */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '1px' }}>
              Experience Mode:
            </span>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
              {['normal', 'recruiter', 'developer'].map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    if (onModeChange) onModeChange(m);
                    setIsMenuOpen(false);
                  }}
                  style={{
                    flex: 1,
                    padding: '6px 4px',
                    borderRadius: '6px',
                    border: `1px solid ${currentMode === m ? 'var(--cyan-primary)' : 'var(--glass-border)'}`,
                    background: currentMode === m ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                    color: currentMode === m ? 'var(--cyan-primary)' : 'var(--text-muted)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Drawer Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
                    padding: '12px 14px',
                    borderRadius: '10px',
                    transition: 'all 0.15s ease',
                    background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && <i className="fas fa-chevron-right" style={{ fontSize: '11px' }}></i>}
                </a>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (onOpenResume) onOpenResume();
            }}
            className="glass-btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
          >
            <i className="fas fa-id-card"></i>
            <span>Open Web Resume</span>
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              if (onOpenCommandPalette) onOpenCommandPalette();
            }}
            className="glass-btn-secondary"
            style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '13px' }}
          >
            <i className="fas fa-terminal"></i>
            <span>Command Palette (⌘K)</span>
          </button>
        </div>
      </div>
    </>
  );
}
