import React from 'react';
import GlassCard from './GlassCard';
import { personalInfo, projects } from '../data/portfolioData';

export default function RecruiterBrief({ onSwitchMode, onDownloadCV, onOpenResume }) {
  const topProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div
      style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '20px 24px 40px',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <GlassCard
        enableTilt={false}
        style={{
          padding: '36px',
          borderRadius: '24px',
          border: '1px solid rgba(0, 242, 254, 0.45)',
          background: 'linear-gradient(135deg, rgba(13, 20, 42, 0.95) 0%, rgba(8, 12, 26, 0.95) 100%)',
          boxShadow: '0 20px 50px -10px rgba(0, 242, 254, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Recruiter Badge & Mode Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 12px #10B981',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--cyan-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Executive Recruiter View · 60-Second Candidate Snapshot
            </span>
          </div>

          <button
            onClick={() => onSwitchMode('normal')}
            className="glass-btn-secondary"
            style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '9999px' }}
          >
            <span>Exit Recruiter View</span>
            <i className="fas fa-arrow-rotate-left" style={{ fontSize: '11px' }}></i>
          </button>
        </div>

        {/* Candidate Core Summary */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            paddingBottom: '28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '28px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 8px',
                letterSpacing: '-0.5px',
              }}
            >
              {personalInfo.name}
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--cyan-muted)', fontWeight: 600, margin: '0 0 12px' }}>
              Full-Stack Software Engineer & Frontend Specialist (MERN Stack)
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              Undergraduate Computer Science scholar at{' '}
              <strong style={{ color: '#fff' }}>LAUTECH</strong> with hands-on proficiency building
              production-ready MERN stack web applications and translating Figma design specs into responsive,
              accessible code.
            </p>
          </div>

          {/* Quick Metrics & Hiring Spec */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Availability
                </span>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#10B981' }}>
                  Open for Roles & Internships
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Location / Timezone
                </span>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#fff' }}>
                  Nigeria (GMT+1) · Remote Ready
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Degree Program
                </span>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#fff' }}>
                  B.Tech Computer Science
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Primary Stack
                </span>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--cyan-primary)' }}>
                  React · Node · Express · Mongo
                </div>
              </div>
            </div>

            {/* Direct Recruiter Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '6px' }}>
              <button
                onClick={onDownloadCV}
                className="glass-btn-primary"
                style={{ padding: '8px 16px', fontSize: '12.5px' }}
              >
                <i className="fas fa-file-arrow-down"></i>
                <span>Download CV (PDF)</span>
              </button>
              <button
                onClick={onOpenResume}
                className="glass-btn-secondary"
                style={{ padding: '8px 16px', fontSize: '12.5px' }}
              >
                <i className="fas fa-id-card"></i>
                <span>Web Resume</span>
              </button>
              <a
                href={`mailto:${personalInfo.email}?subject=Engineering%20Opportunity`}
                className="glass-btn-ghost"
                style={{ padding: '8px 16px', fontSize: '12.5px', border: '1px solid var(--glass-border)' }}
              >
                <i className="fas fa-envelope"></i>
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Top 3 High-Impact Projects for Quick Review */}
        <div>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--text-dim)',
              marginBottom: '16px',
            }}
          >
            Key Verified Engineering Projects
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {topProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--cyan-primary)', fontWeight: 700 }}>
                      {p.category.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                      {p.status || 'Active'}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                    {p.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(0, 242, 254, 0.08)',
                        color: 'var(--cyan-muted)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
