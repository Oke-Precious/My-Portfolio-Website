import React from 'react';
import GlassCard from './GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        About Me
      </div>
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        The Full-Stack Software Engineer & Frontend Developer
      </h2>
      <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">
        Translating Figma and UI/UX design specifications into robust, responsive, and scalable web applications.
      </p>

      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '32px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Glass Narrative Card */}
        <GlassCard
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--cyan-primary)',
                marginBottom: '18px',
              }}
            >
              <i className="fas fa-layer-group"></i>
              <span>Engineering Philosophy</span>
            </div>

            <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'var(--text-head)', marginBottom: '18px' }}>
              {personalInfo.extendedBio}
            </p>

            <p style={{ fontSize: '14.5px', lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
              Undergraduate Computer Science studies at{' '}
              <strong style={{ color: 'var(--text-head)' }}>{personalInfo.education.institution}</strong>,
              combining classical computer science theory—Data Structures, Software Engineering, Database Systems—with
              modern hands-on developer practices.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
              marginTop: '28px',
              borderTop: '1px solid var(--glass-border)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                Based in
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>
                {personalInfo.location}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                Timezone
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-head)' }}>
                {personalInfo.timezone}
              </div>
            </div>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-ghost"
              style={{ fontSize: '12.5px', padding: '6px 12px' }}
            >
              <i className="fab fa-github"></i>
              <span>GitHub Profile</span>
            </a>
          </div>
        </GlassCard>

        {/* Right Column: Interactive Developer Spec Terminal Card */}
        <GlassCard
          data-aos="fade-up"
          data-aos-delay="400"
          enableTilt={true}
          style={{
            padding: '28px',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '13px',
            backgroundColor: 'rgba(8, 12, 24, 0.88)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '16px',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }}></span>
            </div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-dim)', letterSpacing: '0.5px' }}>
              developer.spec.json
            </span>
          </div>

          {/* Code Spec Body */}
          <div style={{ lineHeight: 1.8, color: '#E2E8F0', overflowX: 'auto' }}>
            <div>
              <span style={{ color: '#818CF8' }}>const</span> <span style={{ color: '#38BDF8' }}>engineer</span> = &#123;
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>name:</span> <span style={{ color: '#A5D6A7' }}>"{personalInfo.name}"</span>,
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>education:</span> <span style={{ color: '#A5D6A7' }}>"LAUTECH (Computer Science)"</span>,
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>focus:</span> [
              <span style={{ color: '#FCD34D' }}>"Frontend"</span>,{' '}
              <span style={{ color: '#FCD34D' }}>"MERN Stack"</span>,{' '}
              <span style={{ color: '#FCD34D' }}>"REST APIs"</span>
              ],
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>coreTech:</span> [
              <span style={{ color: '#67E8F9' }}>"React"</span>,{' '}
              <span style={{ color: '#67E8F9' }}>"Node.js"</span>,{' '}
              <span style={{ color: '#67E8F9' }}>"MongoDB"</span>,{' '}
              <span style={{ color: '#67E8F9' }}>"Tailwind"</span>
              ],
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>methodology:</span> <span style={{ color: '#A5D6A7' }}>"Figma-to-Code & Clean Architecture"</span>,
            </div>
            <div style={{ paddingLeft: '18px' }}>
              <span style={{ color: '#94A3B8' }}>status:</span> <span style={{ color: '#4ADE80' }}>"Ready to collaborate"</span>
            </div>
            <div>&#125;;</div>
          </div>

          {/* Terminal Footer */}
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11.5px',
              color: 'var(--text-dim)',
            }}
          >
            <span>node v20 · UTF-8</span>
            <span style={{ color: 'var(--cyan-primary)' }}>✓ Systems Verified</span>
          </div>
        </GlassCard>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
