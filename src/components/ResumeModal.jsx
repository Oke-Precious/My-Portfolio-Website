import React, { useEffect } from 'react';
import { personalInfo, projects, skillCategories, careerMilestones } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onDownloadPDF }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Web Resume View"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(3, 6, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card printable-resume"
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '20px',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          background: '#0B1124',
          color: '#E2E8F0',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
          padding: '0',
          position: 'relative',
        }}
      >
        {/* Floating Top Control Bar (Hidden when printing) */}
        <div
          className="no-print"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            padding: '14px 24px',
            background: 'rgba(11, 17, 36, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--cyan-primary)' }}>
            Official Web Resume · {personalInfo.name}
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="glass-btn-secondary"
              style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '6px' }}
            >
              <i className="fas fa-print"></i>
              <span>Print Resume</span>
            </button>
            <button
              onClick={onDownloadPDF}
              className="glass-btn-primary"
              style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '6px' }}
            >
              <i className="fas fa-file-arrow-down"></i>
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="glass-btn-ghost"
              style={{ padding: '6px 12px', fontSize: '14px' }}
              aria-label="Close Resume"
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div style={{ padding: '40px 48px' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(0, 242, 254, 0.4)', paddingBottom: '24px', marginBottom: '28px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', margin: '0 0 6px', letterSpacing: '-0.5px' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '16px', color: 'var(--cyan-muted)', fontWeight: 600, marginBottom: '14px' }}>
              {personalInfo.title} · MERN Stack & UI Implementation Specialist
            </div>

            {/* Contact Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span><i className="fas fa-envelope" style={{ marginRight: '6px', color: 'var(--cyan-primary)' }} />{personalInfo.email}</span>
              <span><i className="fas fa-phone" style={{ marginRight: '6px', color: 'var(--cyan-primary)' }} />{personalInfo.phone}</span>
              <span><i className="fas fa-location-dot" style={{ marginRight: '6px', color: 'var(--cyan-primary)' }} />{personalInfo.location}</span>
              <span><i className="fab fa-github" style={{ marginRight: '6px', color: 'var(--cyan-primary)' }} />{personalInfo.githubUsername}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-primary)', marginBottom: '8px' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-primary)', marginBottom: '12px' }}>
              Education
            </h2>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '15px', color: '#fff' }}>{personalInfo.education.institution}</strong>
                <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>2024 - Present</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--cyan-muted)', marginBottom: '6px' }}>
                {personalInfo.education.degree} ({personalInfo.education.status})
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-body)' }}>
                Relevant Coursework: {personalInfo.education.coursework.join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-primary)', marginBottom: '12px' }}>
              Technical Competencies
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px' }}>
              <div>
                <strong style={{ color: '#fff' }}>Frontend Development: </strong>
                <span style={{ color: 'var(--text-body)' }}>React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5, Responsive Layouts.</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Backend & APIs: </strong>
                <span style={{ color: 'var(--text-body)' }}>Node.js, Express.js, RESTful Architecture, JWT Authentication & RBAC, Middleware.</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Databases & Storage: </strong>
                <span style={{ color: 'var(--text-body)' }}>MongoDB, Mongoose ODM, sql.js (WebAssembly SQLite), LocalStorage API.</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Design Implementation: </strong>
                <span style={{ color: 'var(--text-body)' }}>Figma to Code, UI Implementation from Wireframes, Canva, Photoshop, CorelDRAW.</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-primary)', marginBottom: '16px' }}>
              Featured Engineering Projects
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projects.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '15px', color: '#fff' }}>{p.title}</strong>
                    <span style={{ fontSize: '12.5px', color: 'var(--cyan-muted)', fontFamily: 'monospace' }}>
                      {p.technologies.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '6px' }}>
                    {p.tagline}
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {p.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Milestones */}
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-primary)', marginBottom: '12px' }}>
              Development Milestones
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {careerMilestones.map((m, idx) => (
                <div key={idx} style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--cyan-primary)', fontWeight: 600 }}>{m.year}</span> —{' '}
                  <strong style={{ color: '#fff' }}>{m.title}</strong> ({m.institution}):{' '}
                  <span style={{ color: 'var(--text-body)' }}>{m.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
