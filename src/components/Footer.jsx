import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(6, 9, 19, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'relative',
        zIndex: 10,
        padding: '50px 24px 30px',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          paddingBottom: '30px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Brand & Identity */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--cyan-primary)',
                boxShadow: '0 0 10px var(--cyan-primary)',
              }}
            />
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)' }}>
              {personalInfo.name}
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
            {personalInfo.title} · Ogbomoso, Oyo State, Nigeria
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { label: 'Overview', href: '#hero' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'GitHub', href: '#github' },
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="glass-btn-secondary"
          style={{ padding: '8px 16px', fontSize: '12.5px', borderRadius: '9999px' }}
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <i className="fas fa-arrow-up" style={{ fontSize: '11px' }}></i>
        </button>
      </div>

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12.5px',
          color: 'var(--text-dim)',
        }}
      >
        <div>
          © {currentYear} {personalInfo.name}. Logic & Aesthetic. All Rights Reserved.
        </div>
        <div>
          Engineered with React & Modern Glassmorphism.
        </div>
      </div>
    </footer>
  );
}
