import React, { useEffect, useState } from 'react';
import GlassCard from './GlassCard';

export default function EasterEgg({ trigger, onReset }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Listen for Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, b, a
    const konamiSequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let currentIndex = 0;

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key.toLowerCase() === konamiSequence[currentIndex].toLowerCase()) {
        currentIndex++;
        if (currentIndex === konamiSequence.length) {
          setActive(true);
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (trigger) setActive(true);
  }, [trigger]);

  const handleClose = () => {
    setActive(false);
    if (onReset) onReset();
  };

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-label="Developer Easter Egg"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(3, 6, 16, 0.85)',
        backdropFilter: 'blur(20px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <GlassCard
        style={{
          width: '100%',
          maxWidth: '520px',
          borderRadius: '24px',
          border: '1px solid var(--cyan-primary)',
          background: 'linear-gradient(135deg, rgba(10, 16, 36, 0.98) 0%, rgba(6, 9, 22, 0.98) 100%)',
          boxShadow: '0 0 50px rgba(0, 242, 254, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          padding: '36px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(0, 242, 254, 0.15)',
            border: '1px solid var(--cyan-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '26px',
            color: 'var(--cyan-primary)',
          }}
        >
          <i className="fas fa-trophy" />
        </div>

        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--cyan-primary)',
          }}
        >
          Achievement Unlocked
        </span>

        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', margin: '8px 0 12px' }}>
          Secret Developer Console Discovered!
        </h2>

        <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 24px' }}>
          You just activated the engineering easter egg. Whether via the Konami code, terminal command, or logo interaction—your attention to technical detail matches mine.
        </p>

        <div
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontFamily: 'monospace',
            fontSize: '12px',
            color: '#10B981',
            textAlign: 'left',
            marginBottom: '24px',
            lineHeight: 1.6,
          }}
        >
          <div>&gt; Candidate: Oke Precious Abioye</div>
          <div>&gt; Stack: React · Node.js · Express · MongoDB · Figma-to-Code</div>
          <div>&gt; Status: Ready to build high-performance software</div>
        </div>

        <button
          onClick={handleClose}
          className="glass-btn-primary"
          style={{ padding: '10px 24px', fontSize: '13.5px', width: '100%' }}
        >
          <span>Return to Exploration</span>
          <i className="fas fa-arrow-right" style={{ fontSize: '12px' }} />
        </button>
      </GlassCard>
    </div>
  );
}
