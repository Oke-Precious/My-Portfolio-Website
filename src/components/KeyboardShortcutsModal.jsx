import React, { useEffect } from 'react';

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const SHORTCUTS = [
    { key: 'Ctrl/Cmd + K', desc: 'Open Command Palette' },
    { key: 'P', desc: 'Jump to Featured Projects' },
    { key: 'G', desc: 'Jump to GitHub Repositories' },
    { key: 'A', desc: 'Jump to About Section' },
    { key: 'C', desc: 'Jump to Contact Section' },
    { key: 'T', desc: 'Jump to Interactive Terminal' },
    { key: 'R', desc: 'Download Official Resume / CV' },
    { key: '?', desc: 'Toggle Keyboard Shortcuts Modal' },
    { key: 'Esc', desc: 'Close any active modal or palette' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard Shortcuts"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(3, 6, 15, 0.8)',
        backdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          background: 'rgba(9, 14, 30, 0.96)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)',
          padding: '28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-keyboard" style={{ color: 'var(--cyan-primary)', fontSize: '18px' }} />
            <h3 style={{ margin: 0, fontSize: '17px', color: '#fff', fontWeight: 700 }}>
              Keyboard Shortcuts
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close shortcuts"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            <i className="fas fa-xmark" />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {SHORTCUTS.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
              }}
            >
              <span style={{ fontSize: '13.5px', color: 'var(--text-body)' }}>
                {item.desc}
              </span>
              <kbd
                style={{
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '11.5px',
                  color: 'var(--cyan-primary)',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                }}
              >
                {item.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
