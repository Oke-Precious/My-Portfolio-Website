import React from 'react';
import GlassCard from './GlassCard';
import { currentlyBuilding } from '../data/portfolioData';

export default function CurrentlyBuilding() {
  if (!currentlyBuilding) return null;

  return (
    <section className="section-wrapper" style={{ paddingTop: '20px' }}>
      <GlassCard
        data-aos="fade-up"
        enableTilt={true}
        style={{
          padding: '32px 36px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          background: 'linear-gradient(135deg, rgba(12, 19, 40, 0.9) 0%, rgba(7, 12, 26, 0.9) 100%)',
          boxShadow: '0 16px 40px -10px rgba(0, 242, 254, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--cyan-primary)',
                boxShadow: '0 0 12px var(--cyan-primary)',
                animation: 'pulseGlow 2s infinite',
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
              Currently Building · Live Engineering Focus
            </span>
          </div>

          <span
            style={{
              fontSize: '11px',
              padding: '3px 10px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              fontWeight: 600,
            }}
          >
            {currentlyBuilding.status}
          </span>
        </div>

        <h3
          style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 800,
            color: 'var(--text-head)',
            margin: '0 0 10px',
            letterSpacing: '-0.3px',
          }}
        >
          {currentlyBuilding.project}
        </h3>

        <p
          style={{
            fontSize: '14.5px',
            color: 'var(--text-body)',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 0 20px',
          }}
        >
          {currentlyBuilding.shortDescription}
        </p>

        {/* Highlights */}
        {currentlyBuilding.highlights && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {currentlyBuilding.highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <i className="fas fa-arrow-right" style={{ color: 'var(--cyan-primary)', fontSize: '11px' }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges & GitHub Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {currentlyBuilding.technologies.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11.5px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-head)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={currentlyBuilding.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-ghost"
            style={{ fontSize: '12.5px', padding: '6px 14px' }}
          >
            <i className="fab fa-github"></i>
            <span>Track Progress on GitHub</span>
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
