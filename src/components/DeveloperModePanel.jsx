import React from 'react';
import GlassCard from './GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function DeveloperModePanel({ onSwitchMode }) {
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
          padding: '32px',
          borderRadius: '24px',
          border: '1px solid rgba(99, 102, 241, 0.45)',
          background: 'linear-gradient(135deg, rgba(8, 14, 32, 0.96) 0%, rgba(6, 10, 24, 0.98) 100%)',
          boxShadow: '0 20px 50px -10px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Header Ribbon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '24px',
            paddingBottom: '18px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--indigo-primary)',
                boxShadow: '0 0 12px var(--indigo-primary)',
              }}
            />
            <div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--indigo-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Developer Mode Activated · Deep Technical Inspection
              </span>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Inspecting runtime architecture, REST API route contracts, and database schema designs.
              </div>
            </div>
          </div>

          <button
            onClick={() => onSwitchMode('normal')}
            className="glass-btn-secondary"
            style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '9999px' }}
          >
            <span>Exit Developer Mode</span>
            <i className="fas fa-arrow-rotate-left" style={{ fontSize: '11px' }}></i>
          </button>
        </div>

        {/* 3-Column Engineering Deep-Dive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Column 1: API Route Specs */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <i className="fas fa-network-wired" style={{ color: 'var(--cyan-primary)' }} />
              <h4 style={{ margin: 0, fontSize: '14px', color: '#fff', fontWeight: 700 }}>
                Gavel REST API Contracts
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', fontSize: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)' }}>
                <span style={{ color: '#10B981', fontWeight: 700 }}>POST</span> /api/auth/login
                <div style={{ color: 'var(--text-dim)', fontSize: '11px' }}>JWT issuance & credentials check</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)' }}>
                <span style={{ color: '#38BDF8', fontWeight: 700 }}>GET</span> /api/cases
                <div style={{ color: 'var(--text-dim)', fontSize: '11px' }}>Paginated query with status & date filters</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)' }}>
                <span style={{ color: '#F59E0B', fontWeight: 700 }}>PUT</span> /api/cases/:id/status
                <div style={{ color: 'var(--text-dim)', fontSize: '11px' }}>Status mutation with audit timeline log</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)' }}>
                <span style={{ color: '#818CF8', fontWeight: 700 }}>GET</span> /api/cases/export/csv
                <div style={{ color: 'var(--text-dim)', fontSize: '11px' }}>Streamed Fast-CSV file generation</div>
              </div>
            </div>
          </div>

          {/* Column 2: Database Schema Models */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <i className="fas fa-database" style={{ color: 'var(--indigo-primary)' }} />
              <h4 style={{ margin: 0, fontSize: '14px', color: '#fff', fontWeight: 700 }}>
                Data Modeling & Storage
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div>
                <strong style={{ color: 'var(--cyan-primary)' }}>MongoDB Case Schema:</strong>
                <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.5 }}>
                  <code>caseNumber (Indexed, Unique)</code>, <code>title</code>, <code>clientName</code>, <code>assignedAttorney</code>, <code>status: ['Pending', 'Active', 'Adjourned', 'Closed']</code>, <code>hearingDates: [Date]</code>, <code>timestamps</code>.
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--indigo-primary)' }}>sql.js Relational Schema:</strong>
                <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.5 }}>
                  <code>users (id, username, passwordHash)</code> 1-to-many with <code>projects (id, user_id, title)</code> and <code>tasks (id, project_id, status, priority)</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Frontend Architecture */}
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <i className="fab fa-react" style={{ color: '#38BDF8' }} />
              <h4 style={{ margin: 0, fontSize: '14px', color: '#fff', fontWeight: 700 }}>
                Client-Side Design System
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--text-body)' }}>
              <div>• <strong>Glassmorphism Tokens:</strong> CSS custom properties with hardware-accelerated transforms.</div>
              <div>• <strong>Zero Layout Shift:</strong> Strict aspect-ratio containers and image skeleton placeholders.</div>
              <div>• <strong>Figma Fidelity:</strong> Exact translation of designer typography, spacing tokens, and micro-interactions.</div>
              <div>• <strong>Accessibility:</strong> Semantic landmarks, ARIA labels, and WCAG AA contrast compliance.</div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
