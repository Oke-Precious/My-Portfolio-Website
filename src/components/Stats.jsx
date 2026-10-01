import React, { useEffect, useState, useRef } from 'react';
import GlassCard from './GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function Stats() {
  const [counts, setCounts] = useState({
    projects: 0,
    fidelity: 0,
    experience: 0,
    responsive: 0,
  });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            const targets = { projects: 8, fidelity: 100, experience: 2, responsive: 100 };
            const duration = 1800;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts({
                projects: Math.floor(ease * targets.projects),
                fidelity: Math.floor(ease * targets.fidelity),
                experience: Math.floor(ease * targets.experience),
                responsive: Math.floor(ease * targets.responsive),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(targets);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statItems = [
    { number: counts.projects, suffix: '+', label: 'Projects Built', caption: 'Full-stack & internship builds' },
    { number: counts.fidelity, suffix: '%', label: 'Design-to-Code', caption: 'Pixel-perfect UI implementation' },
    { number: counts.experience, suffix: '+', label: 'Years Coding', caption: 'CS @ LAUTECH & software dev' },
    { number: counts.responsive, suffix: '%', label: 'Mobile Optimized', caption: 'Fluid across all screen sizes' },
  ];

  return (
    <section ref={sectionRef} style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 60px' }}>
      <div
        className="stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        {statItems.map((item, idx) => (
          <GlassCard
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            style={{
              padding: '24px',
              textAlign: 'center',
              borderTop: '2px solid rgba(0, 242, 254, 0.4)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 800,
                color: 'var(--text-head)',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-1px',
                lineHeight: 1.1,
                marginBottom: '6px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, var(--cyan-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {item.number}
              {item.suffix}
            </div>
            <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-head)', marginBottom: '4px' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {item.caption}
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
