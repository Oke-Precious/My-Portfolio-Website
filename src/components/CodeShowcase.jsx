import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { codeSnippets } from '../data/portfolioData';

export default function CodeShowcase() {
  const [selectedSnippetId, setSelectedSnippetId] = useState(codeSnippets[0]?.id || 'jwt-middleware');
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets.find((s) => s.id === selectedSnippetId) || codeSnippets[0];

  const handleCopy = () => {
    if (!currentSnippet) return;
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-showcase" className="section-wrapper" style={{ paddingTop: '20px' }}>
      <div className="section-kicker" data-aos="fade-right">
        Production Engineering
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        <div>
          <h2 className="section-title" data-aos="fade-right" data-aos-delay="100" style={{ margin: 0 }}>
            Curated Code Architecture
          </h2>
          <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200" style={{ margin: '8px 0 0' }}>
            Production code excerpts from real projects illustrating authentication, API adapters, and state mutation.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="glass-pill-container" data-aos="fade-left">
          {codeSnippets.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => setSelectedSnippetId(snippet.id)}
              style={{
                border: 'none',
                background: selectedSnippetId === snippet.id ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                color: selectedSnippetId === snippet.id ? 'var(--cyan-primary)' : 'var(--text-muted)',
                fontWeight: selectedSnippetId === snippet.id ? 600 : 500,
                fontSize: '12.5px',
                padding: '6px 14px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {snippet.project}
            </button>
          ))}
        </div>
      </div>

      <GlassCard
        data-aos="fade-up"
        enableTilt={false}
        style={{
          padding: '0',
          overflow: 'hidden',
          borderRadius: '18px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          background: 'rgba(7, 11, 24, 0.95)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Editor Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            background: 'rgba(10, 16, 32, 0.92)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
            </div>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600, fontFamily: 'monospace' }}>
              {currentSnippet.title}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'var(--cyan-muted)',
                background: 'rgba(0, 242, 254, 0.08)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              {currentSnippet.category}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="glass-btn-ghost"
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              border: '1px solid var(--glass-border)',
              borderRadius: '6px',
            }}
            aria-label="Copy Code"
          >
            <i className={copied ? 'fas fa-check' : 'fas fa-copy'} style={{ color: copied ? '#10B981' : 'var(--cyan-primary)' }} />
            <span style={{ color: copied ? '#10B981' : 'var(--text-head)' }}>
              {copied ? 'Copied!' : 'Copy Code'}
            </span>
          </button>
        </div>

        {/* Code Content */}
        <div style={{ padding: '24px', overflowX: 'auto' }}>
          <p style={{ margin: '0 0 16px', fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6 }}>
            {currentSnippet.description}
          </p>

          <pre
            style={{
              margin: 0,
              padding: '18px 20px',
              borderRadius: '12px',
              background: 'rgba(3, 6, 16, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: '13px',
              lineHeight: 1.7,
              color: '#F8FAFC',
              overflowX: 'auto',
            }}
          >
            <code>{currentSnippet.code}</code>
          </pre>
        </div>
      </GlassCard>
    </section>
  );
}
