import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { skillCategories, projects } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  // Helper to find projects where this skill is used
  const getProjectsUsingSkill = (skillName) => {
    if (!skillName) return [];
    return projects.filter((p) =>
      p.technologies.some((t) => t.toLowerCase().includes(skillName.toLowerCase()))
    );
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Core Competencies
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
            Technical Skills & Ecosystem
          </h2>
          <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200" style={{ margin: '8px 0 0' }}>
            An interactive full-stack ecosystem. Click any technology to inspect its role and verified project implementations.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div
          className="glass-pill-container"
          data-aos="fade-left"
          data-aos-delay="200"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            maxWidth: '100%',
            borderRadius: '16px',
            padding: '6px',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              border: 'none',
              background: activeTab === 'all' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
              color: activeTab === 'all' ? 'var(--cyan-primary)' : 'var(--text-muted)',
              fontWeight: activeTab === 'all' ? 600 : 500,
              fontSize: '12px',
              padding: '6px 12px',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            All Ecosystems
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
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {cat.id === 'design' ? 'Design Implementation' : cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Tech Inspector Focus Bar (When a skill is clicked) */}
      {selectedSkill && (
        <div
          data-aos="fade-down"
          style={{
            marginBottom: '28px',
            padding: '20px 24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(12, 20, 42, 0.95) 0%, rgba(6, 10, 24, 0.95) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            boxShadow: '0 12px 30px -10px rgba(0, 242, 254, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: selectedSkill.color || 'var(--cyan-primary)',
              }}
            >
              <i className={selectedSkill.icon} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>
                  {selectedSkill.name}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    color: 'var(--cyan-primary)',
                    fontWeight: 600,
                  }}
                >
                  {selectedSkill.level}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                Projects using this technology:{' '}
                <strong style={{ color: 'var(--text-head)' }}>
                  {getProjectsUsingSkill(selectedSkill.name).map((p) => p.title).join(', ') || 'Core foundation / ongoing engineering'}
                </strong>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedSkill(null)}
            className="glass-btn-ghost"
            style={{ padding: '6px 12px', fontSize: '12px' }}
          >
            <span>Close Lens</span>
            <i className="fas fa-xmark" style={{ fontSize: '11px' }} />
          </button>
        </div>
      )}

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
            enableSpotlight={true}
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

            {/* Interactive Skill Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
              {cat.skills.map((skill, sIdx) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    style={{
                      background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${isSelected ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '10px',
                      padding: '10px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? '0 0 12px rgba(0, 242, 254, 0.25)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }
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
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: isSelected ? '#fff' : 'var(--text-head)',
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
                  </button>
                );
              })}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
