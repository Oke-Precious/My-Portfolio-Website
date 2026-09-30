import React from 'react';
import GlassCard from './GlassCard';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper" style={{ paddingTop: '40px' }}>
      <div className="section-kicker" data-aos="fade-right">
        Client Endorsements
      </div>
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        Collaborative Feedback
      </h2>
      <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">
        Perspectives from founders and product leads on engineering rigor and execution speed.
      </p>

      <div
        className="testimonials-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {testimonials.map((item, idx) => (
          <GlassCard
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
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
                  fontSize: '20px',
                  color: 'var(--cyan-primary)',
                  marginBottom: '16px',
                  opacity: 0.9,
                }}
              >
                <i className="fas fa-quote-left"></i>
              </div>

              <p
                style={{
                  fontSize: '14.5px',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                "{item.quote}"
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '18px',
                borderTop: '1px solid var(--glass-border)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(99, 102, 241, 0.2))',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'var(--cyan-primary)',
                }}
              >
                {item.avatar}
              </div>

              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-head)' }}>
                  {item.author}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {item.role}, {item.company}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
