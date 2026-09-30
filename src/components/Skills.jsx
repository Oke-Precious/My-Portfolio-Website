import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Core Competencies
      </div>
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        Technical Skills & Ecosystem
      </h2>
      <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">
        A battle-tested stack spanning client-side reactivity, server architecture, databases, and visual tooling.
      </p>

      {/* Segmented Filter Control for Skill Categories */}
      <div
        className="glass-pill-container"
        data-aos="fade-up"
        data-aos-delay="250"
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          marginBottom: '36px',
          maxWidth: '100%',
        }}
      >
        <button
          onClick={() => setActiveTab('all')}
          style={{
            border: 'none',
            background: activeTab === 'all' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
            color: activeTab === 'all' ? 'var(--cyan-primary)' : 'var(--text-muted)',
            fontWeight: activeTab === 'all' ? 600 : 500,
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '9999px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          All Technologies
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            style={{
              border: 'none',
              background: activeTab === cat.id ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
              color: activeTab === cat.id ? 'var(--cyan-primary)' : 'var(--text-muted)',
              fontWeight: activeTab === cat.id ? 600 : 500,
              fontSize: '13px',
              padding: '8px 16px',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(360px, 1fr))' : '1fr',
          gap: '24px',
        }}
      >
        {displayedCategories.map((cat, idx) => (
          <GlassCard
            key={cat.id}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            style={{ padding: '28px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)', margin: 0 }}>
                {cat.title}
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--cyan-primary)', fontWeight: 600 }}>
                {cat.skills.length} Tools
              </span>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              {cat.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '12px',
              }}
            >
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = skill.color || 'var(--cyan-primary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i
                    className={skill.icon}
                    style={{
                      fontSize: '18px',
                      color: skill.color || 'var(--cyan-primary)',
                      width: '20px',
                      textAlign: 'center',
                    }}
                  ></i>
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-head)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {skill.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
