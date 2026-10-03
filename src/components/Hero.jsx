import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const ROLES = [
  'Full-Stack Web Developer',
  'MERN Stack Engineer',
  'Frontend Specialist',
  'Figma-to-Code Specialist',
];

export default function Hero({ onDownloadCV }) {
  const [roleText, setRoleText] = useState('');

  // Typing animation for roles
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentRole = ROLES[roleIdx];

      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setRoleText(currentRole.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
        speed = 300;
      }

      timeoutId = setTimeout(tick, speed);
    };

    timeoutId = setTimeout(tick, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.9fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left Column: Narrative & Call to Actions */}
        <div data-aos="fade-up" data-aos-duration="700">
          {/* Live Availability Indicator */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              marginBottom: '24px',
              fontSize: '12.5px',
              fontWeight: 500,
              color: 'var(--text-head)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 10px #10B981',
                display: 'inline-block',
                animation: 'pulseGlow 2s infinite',
              }}
            />
            <span>Available for new projects & full-time roles</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(34px, 5.2vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-head)',
              letterSpacing: '-1px',
              margin: '0 0 16px',
            }}
          >
            Hello, I'm <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, var(--cyan-primary) 50%, var(--indigo-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {personalInfo.shortName}.
            </span>
          </h1>

          {/* Typing Animated Subtitle */}
          <div
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 600,
              color: 'var(--cyan-muted)',
              marginBottom: '20px',
              minHeight: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>{roleText}</span>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.1em',
                backgroundColor: 'var(--cyan-primary)',
                animation: 'blink 1s infinite',
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              maxWidth: '580px',
              marginBottom: '32px',
            }}
          >
            {personalInfo.bio}
          </p>

          {/* Primary Action Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="glass-btn-primary"
            >
              <span>Explore Selected Works</span>
              <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </button>

            <a
              href={personalInfo.cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-secondary"
              style={{ textDecoration: 'none' }}
              title="Download CV as PDF (Live from Google Docs)"
            >
              <i className="fas fa-file-arrow-down"></i>
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="glass-btn-ghost"
              style={{ padding: '12px 18px' }}
            >
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Proof Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid var(--glass-border)',
            }}
          >
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Find me on:</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-head)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan-primary)';
                  e.currentTarget.style.color = 'var(--cyan-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-head)';
                }}
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-head)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0a66c2';
                  e.currentTarget.style.color = '#0a66c2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-head)';
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href={personalInfo.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter Profile"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-head)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan-primary)';
                  e.currentTarget.style.color = 'var(--cyan-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-head)';
                }}
              >
                <i className="fab fa-x-twitter"></i>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-head)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.color = '#25D366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-head)';
                }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Glass Portrait Composition */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Ambient Glow behind the frame */}
          <div
            style={{
              position: 'absolute',
              width: '90%',
              height: '90%',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
              filter: 'blur(35px)',
              zIndex: 0,
            }}
          />

          {/* Main Futuristic Glass Frame */}
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '440px',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '480px',
                backgroundImage: `url(${personalInfo.profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%',
              }}
            >
              {/* Contrast Gradient Scrim */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 9, 19, 0.95) 0%, rgba(6, 9, 19, 0.2) 50%, transparent 100%)',
                }}
              />

              {/* Bottom Card Identity Details */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--cyan-primary)' }}>
                    Computer Science @ LAUTECH
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: 0 }}>
                  {personalInfo.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                  MERN Stack · REST APIs · UI Implementation
                </p>
              </div>
            </div>
          </div>

          {/* Floating Glass Badge 1 (Top Left): React & MERN */}
          <div
            className="glass-card hero-badge-1"
            style={{
              position: 'absolute',
              top: '8%',
              left: '-5%',
              zIndex: 2,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '16px',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'rgba(13, 20, 38, 0.85)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(97, 218, 251, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#61DAFB',
              }}
            >
              <i className="fab fa-react" style={{ fontSize: '18px' }}></i>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Framework
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-head)' }}>
                React & Node.js
              </div>
            </div>
          </div>

          {/* Floating Glass Badge 2 (Bottom Right): Real Experience */}
          <div
            className="glass-card hero-badge-2"
            style={{
              position: 'absolute',
              bottom: '8%',
              right: '-6%',
              zIndex: 2,
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderRadius: '16px',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'rgba(13, 20, 38, 0.85)',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--indigo-primary)',
              }}
            >
              <i className="fas fa-code-branch" style={{ fontSize: '18px' }}></i>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)', lineHeight: 1.1 }}>
                10+ Projects
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Shipped & Deployed
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
