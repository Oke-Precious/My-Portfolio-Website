import React, { useEffect, useState } from 'react';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectCaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(3, 6, 15, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '24px',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          background: 'linear-gradient(135deg, rgba(10, 16, 32, 0.96) 0%, rgba(6, 10, 22, 0.98) 100%)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 242, 254, 0.15)',
          padding: '0',
          position: 'relative',
        }}
      >
        {/* Header Ribbon */}
        <div
          style={{
            padding: '24px 32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            background: 'rgba(10, 16, 32, 0.92)',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--cyan-primary)',
                background: 'rgba(0, 242, 254, 0.12)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              {project.category}
            </span>
            {project.status && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: project.status === 'Production' ? '#10B981' : '#60A5FA',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: project.status === 'Production' ? '#10B981' : '#60A5FA',
                  }}
                />
                {project.status}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--glass-border)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              color: 'var(--text-muted)',
              fontSize: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'var(--cyan-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <i className="fas fa-xmark"></i>
          </button>
        </div>

        {/* Modal Main Content */}
        <div style={{ padding: '32px' }}>
          <h2
            id="case-study-title"
            style={{
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              fontWeight: 800,
              color: 'var(--text-head)',
              margin: '0 0 8px',
              letterSpacing: '-0.5px',
            }}
          >
            {project.title}
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--cyan-muted)', margin: '0 0 24px' }}>
            {project.tagline}
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-primary"
                style={{ padding: '10px 20px', fontSize: '13.5px', textDecoration: 'none' }}
              >
                <i className="fas fa-arrow-up-right-from-square"></i>
                <span>Open Live Application</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-secondary"
                style={{ padding: '10px 20px', fontSize: '13.5px', textDecoration: 'none' }}
              >
                <i className="fab fa-github"></i>
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Sub Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '12px',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { id: 'overview', label: 'Problem & Solution' },
              { id: 'architecture', label: 'System Architecture' },
              { id: 'features', label: 'Features & Engineering' },
              { id: 'decisions', label: 'Technical Decisions' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                  border: `1px solid ${activeTab === tab.id ? 'rgba(0, 242, 254, 0.3)' : 'transparent'}`,
                  color: activeTab === tab.id ? 'var(--cyan-primary)' : 'var(--text-muted)',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  fontSize: '13px',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview, Problem & Solution */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    background: 'rgba(239, 68, 68, 0.06)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '16px',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <i className="fas fa-triangle-exclamation" style={{ color: '#EF4444', fontSize: '14px' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                      The Problem
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: '#E2E8F0' }}>
                    {project.problem || project.description}
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.06)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '16px',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <i className="fas fa-circle-check" style={{ color: '#10B981', fontSize: '14px' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                      The Solution
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: '#E2E8F0' }}>
                    {project.solution || project.description}
                  </p>
                </div>
              </div>

              {/* Developer Role Card */}
              {project.myRole && (
                <div
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <i className="fas fa-user-gear" style={{ color: 'var(--indigo-primary)', fontSize: '16px' }} />
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--cyan-muted)', fontWeight: 700 }}>
                      My Role on Project
                    </span>
                    <div style={{ fontSize: '14px', color: 'var(--text-head)', fontWeight: 600 }}>
                      {project.myRole}
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 style={{ fontSize: '13px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 12px' }}>
                  Technologies & Ecosystem
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12.5px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-head)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: System Architecture */}
          {activeTab === 'architecture' && (
            <div>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 16px' }}>
                {project.architecture || 'Interactive data flow and modular architecture representation.'}
              </p>
              {project.architectureLayers && (
                <ArchitectureDiagram layers={project.architectureLayers} />
              )}
            </div>
          )}

          {/* Tab 3: Key Features & Engineering Highlights */}
          {activeTab === 'features' && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <i className="fas fa-check" style={{ color: 'var(--cyan-primary)', fontSize: '13px', marginTop: '4px' }} />
                    <span style={{ fontSize: '14px', color: 'var(--text-head)', lineHeight: 1.6 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Technical Decisions */}
          {activeTab === 'decisions' && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {(project.technicalDecisions || [
                  {
                    title: "State and API Decoupling",
                    description: "Maintained clean separation between visual presentation components and data fetch utilities to ensure testability and responsive resilience."
                  }
                ]).map((dec, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '18px 22px',
                      borderRadius: '14px',
                      background: 'rgba(13, 20, 38, 0.8)',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '6px',
                          background: 'rgba(0, 242, 254, 0.15)',
                          color: 'var(--cyan-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <h4 style={{ margin: 0, fontSize: '15px', color: '#fff', fontWeight: 700 }}>
                        {dec.title}
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.65 }}>
                      {dec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
