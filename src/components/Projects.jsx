import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  // The major featured project is Gavel Case Tracker
  const gavelProject = projects.find((p) => p.id === 'gavel-case-tracker');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'gavel-case-tracker');

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Portfolio Showcase
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        <div>
          <h2 className="section-title" data-aos="fade-right" data-aos-delay="100" style={{ margin: 0 }}>
            Featured Engineering Projects
          </h2>
          <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200" style={{ margin: '8px 0 0' }}>
            A showcase of full-stack complexity, secure REST architecture, and responsive user interfaces.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="glass-pill-container"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                border: 'none',
                background: filter === cat ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                color: filter === cat ? 'var(--cyan-primary)' : 'var(--text-muted)',
                fontWeight: filter === cat ? 600 : 500,
                fontSize: '13px',
                padding: '8px 16px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAJOR FEATURED PROJECT: GAVEL CASE TRACKER (when Filter is All or Full Stack) */}
      {(filter === 'All' || filter === 'Full Stack') && gavelProject && (
        <div data-aos="fade-up" style={{ marginBottom: '40px' }}>
          <GlassCard
            enableTilt={false}
            style={{
              padding: '0',
              overflow: 'hidden',
              border: '1px solid rgba(0, 242, 254, 0.35)',
              background: 'linear-gradient(135deg, rgba(13, 20, 38, 0.95) 0%, rgba(8, 12, 24, 0.95) 100%)',
              boxShadow: '0 20px 40px -10px rgba(0, 242, 254, 0.15), var(--glass-inner-highlight)',
            }}
          >
            <div
              className="featured-gavel-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '0',
              }}
            >
              {/* Left Side: Rich Project Details */}
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: 'var(--cyan-primary)',
                      background: 'rgba(0, 242, 254, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                    }}
                  >
                    ★ Flagship Project
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    MERN Stack · Full Stack
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: 'var(--text-head)', margin: '0 0 8px' }}>
                  {gavelProject.title}
                </h3>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--cyan-muted)', margin: '0 0 16px' }}>
                  {gavelProject.tagline}
                </h4>

                <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {gavelProject.description}
                </p>

                {/* Key Architectural Highlights */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-head)', marginBottom: '10px' }}>
                    Engineered Capabilities:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {gavelProject.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ marginBottom: '6px' }}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {gavelProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-head)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href={gavelProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-primary"
                    style={{ fontSize: '13px', padding: '10px 20px' }}
                  >
                    <i className="fab fa-github"></i>
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Architecture Metrics Spec Card */}
              <div
                style={{
                  background: 'rgba(6, 9, 19, 0.7)',
                  borderLeft: '1px solid var(--glass-border)',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--cyan-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    System Architecture
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Frontend Layer</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>React · Axios · Responsive Filters</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Session restore & token-refresh interceptors</div>
                    </div>

                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Backend & Auth</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>Node.js · Express · JWT & RBAC</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Role-based route permissions & audits</div>
                    </div>

                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Database & Reports</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>MongoDB · Mongoose · CSV & PDF</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Bulk CSV imports & customized PDF reports</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--glass-border)', fontSize: '12px', color: 'var(--text-dim)' }}>
                  Status: Complete & verified full-stack architecture
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Grid of Other Projects */}
      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '28px',
        }}
      >
        {otherProjects.map((proj, idx) => (
          <GlassCard
            key={proj.id}
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
            enableTilt={true}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              borderRadius: '20px',
            }}
          >
            {/* Project Image Banner */}
            <div
              style={{
                position: 'relative',
                height: '210px',
                overflow: 'hidden',
                backgroundColor: 'rgba(6, 9, 19, 0.8)',
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13, 20, 38, 0.95) 0%, rgba(13, 20, 38, 0.2) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: 'rgba(6, 9, 19, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--cyan-primary)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: '1px solid var(--glass-border)',
                }}
              >
                {proj.category}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)', margin: '0 0 6px' }}>
                  {proj.title}
                </h4>
                <div style={{ fontSize: '12.5px', color: 'var(--cyan-muted)', marginBottom: '12px' }}>
                  {proj.tagline}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {proj.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--glass-border)',
                  marginTop: 'auto',
                }}
              >
                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-primary"
                    style={{ fontSize: '12px', padding: '8px 14px', borderRadius: '8px' }}
                  >
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt" style={{ fontSize: '10px' }}></i>
                  </a>
                ) : (
                  <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                    Architecture Complete
                  </span>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-ghost"
                    style={{ fontSize: '12.5px', padding: '6px 10px' }}
                  >
                    <i className="fab fa-github"></i>
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-gavel-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
