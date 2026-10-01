import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { projects } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy }) {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'Frontend', 'React', 'Node.js'];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      filter === 'All'
        ? true
        : filter === 'Full Stack' || filter === 'Frontend'
        ? p.category === filter
        : p.technologies.some((t) => t.toLowerCase().includes(filter.toLowerCase()));

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // The major featured project is Gavel Case Tracker
  const gavelProject = filteredProjects.find((p) => p.id === 'gavel-case-tracker');
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
          marginBottom: '32px',
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

        {/* Filter Controls & Search */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <i
              className="fas fa-search"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)',
                fontSize: '12px',
              }}
            />
            <input
              type="text"
              placeholder="Search by name, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects by technology or title"
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                fontSize: '12.5px',
                outline: 'none',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                <i className="fas fa-xmark" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="glass-pill-container" data-aos="fade-left" data-aos-delay="200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  border: 'none',
                  background: filter === cat ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                  color: filter === cat ? 'var(--cyan-primary)' : 'var(--text-muted)',
                  fontWeight: filter === cat ? 600 : 500,
                  fontSize: '12.5px',
                  padding: '6px 14px',
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
      </div>

      {filteredProjects.length === 0 && (
        <div
          style={{
            padding: '40px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-muted)',
          }}
        >
          No projects match your filter "{searchQuery || filter}". Try selecting "All".
        </div>
      )}

      {/* MAJOR FEATURED PROJECT: GAVEL CASE TRACKER (when present in filtered list) */}
      {gavelProject && (
        <div data-aos="fade-up" style={{ marginBottom: '40px' }}>
          <GlassCard
            enableTilt={false}
            enableSpotlight={true}
            style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '24px',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--cyan-primary)',
                      background: 'rgba(0, 242, 254, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                    }}
                  >
                    ★ Flagship MERN Case Study
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    {gavelProject.status}
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
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-head)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onOpenCaseStudy(gavelProject)}
                    className="glass-btn-primary"
                    style={{ padding: '10px 20px', fontSize: '13.5px' }}
                  >
                    <i className="fas fa-layer-group"></i>
                    <span>Deep-Dive Case Study</span>
                  </button>
                  <a
                    href={gavelProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-secondary"
                    style={{ padding: '10px 18px', fontSize: '13.5px', textDecoration: 'none' }}
                  >
                    <i className="fab fa-github"></i>
                    <span>Inspect Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Architecture & Data Flow Preview */}
              <div
                style={{
                  background: 'rgba(5, 8, 18, 0.7)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--cyan-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    System Architecture Layers
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Frontend Layer</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>React · Axios · Filter Controls</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Session restore & automated token refresh</div>
                    </div>

                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Backend API & Security</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>Node.js · Express · JWT & RBAC</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Role-based route authorization & audit trail</div>
                    </div>

                    <div style={{ padding: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Persistence & Reports</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>MongoDB · Mongoose · CSV & PDF</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Streamed CSV export & PDF case dockets</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenCaseStudy(gavelProject)}
                  className="glass-btn-ghost"
                  style={{ marginTop: '20px', padding: '8px 0', color: 'var(--cyan-primary)', fontSize: '13px' }}
                >
                  <span>Explore Interactive Architecture Diagram →</span>
                </button>
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}
      >
        {otherProjects.map((proj, idx) => (
          <GlassCard
            key={proj.id}
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
            enableTilt={true}
            enableSpotlight={true}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              borderRadius: '20px',
              padding: '24px',
            }}
          >
            <div>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--cyan-primary)',
                    background: 'rgba(0, 242, 254, 0.08)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                  }}
                >
                  {proj.category}
                </span>

                {proj.status && (
                  <span
                    style={{
                      fontSize: '11px',
                      color: proj.status === 'Production' ? '#10B981' : '#60A5FA',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: proj.status === 'Production' ? '#10B981' : '#60A5FA',
                      }}
                    />
                    {proj.status}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-head)', margin: '0 0 6px' }}>
                {proj.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--cyan-muted)', margin: '0 0 14px', fontWeight: 500 }}>
                {proj.tagline}
              </p>

              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                {proj.description}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => onOpenCaseStudy(proj)}
                className="glass-btn-primary"
                style={{ padding: '7px 14px', fontSize: '12.5px' }}
              >
                <span>Case Study</span>
                <i className="fas fa-arrow-right" style={{ fontSize: '10px' }} />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-ghost"
                    style={{ padding: '6px 10px', fontSize: '12px' }}
                    title="Open Live Deployment"
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-ghost"
                    style={{ padding: '6px 10px', fontSize: '12px' }}
                    title="View GitHub Repository"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
