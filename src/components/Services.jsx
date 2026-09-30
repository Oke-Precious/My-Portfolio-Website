import React from 'react';
import GlassCard from './GlassCard';
import { services } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Services & Solutions
      </div>
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        How I Deliver Value
      </h2>
      <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">
        Engineered web solutions focused on speed, maintainability, clean architecture, and conversion.
      </p>

      <div
        className="services-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px',
        }}
      >
        {services.map((srv, idx) => (
          <GlassCard
            key={srv.id}
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
            enableTilt={true}
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-primary)',
                  fontSize: '18px',
                  marginBottom: '20px',
                }}
              >
                <i className={srv.icon}></i>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)', margin: '0 0 12px' }}>
                {srv.title}
              </h3>

              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                {srv.description}
              </p>
            </div>

            <div
              style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: 'var(--cyan-muted)',
                fontWeight: 600,
              }}
            >
              <span>Production Ready</span>
              <i className="fas fa-check-circle" style={{ fontSize: '12px' }}></i>
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
