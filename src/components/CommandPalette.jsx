import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, projects } from '../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  onModeChange,
  onOpenResume,
  onDownloadCV,
  onSelectProject,
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const ACTIONS = [
    {
      id: 'nav-overview',
      group: 'Navigation',
      label: 'Go to Overview / Hero',
      icon: 'fas fa-house',
      action: () => {
        window.location.hash = '#hero';
        onClose();
      },
    },
    {
      id: 'nav-about',
      group: 'Navigation',
      label: 'Go to About Me & Education',
      icon: 'fas fa-user',
      action: () => {
        window.location.hash = '#about';
        onClose();
      },
    },
    {
      id: 'nav-skills',
      group: 'Navigation',
      label: 'Explore Technical Skills & Ecosystem',
      icon: 'fas fa-layer-group',
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'nav-projects',
      group: 'Navigation',
      label: 'View Featured Engineering Projects',
      icon: 'fas fa-laptop-code',
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'nav-github',
      group: 'Navigation',
      label: 'View GitHub Repositories & Sync',
      icon: 'fab fa-github',
      action: () => {
        window.location.hash = '#github';
        onClose();
      },
    },
    {
      id: 'nav-terminal',
      group: 'Navigation',
      label: 'Open Developer Terminal',
      icon: 'fas fa-terminal',
      action: () => {
        window.location.hash = '#terminal';
        onClose();
      },
    },
    {
      id: 'nav-contact',
      group: 'Navigation',
      label: 'Contact Oke Precious directly',
      icon: 'fas fa-paper-plane',
      action: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
    {
      id: 'mode-recruiter',
      group: 'View Modes',
      label: 'Switch to Recruiter View (30s Executive Brief)',
      icon: 'fas fa-briefcase',
      action: () => {
        onModeChange('recruiter');
        onClose();
      },
    },
    {
      id: 'mode-developer',
      group: 'View Modes',
      label: 'Switch to Developer View (Architecture & Code)',
      icon: 'fas fa-code',
      action: () => {
        onModeChange('developer');
        onClose();
      },
    },
    {
      id: 'mode-normal',
      group: 'View Modes',
      label: 'Switch to Standard Portfolio View',
      icon: 'fas fa-sliders',
      action: () => {
        onModeChange('normal');
        onClose();
      },
    },
    {
      id: 'act-resume-pdf',
      group: 'Resume & Documents',
      label: 'Download Resume PDF (Live from Docs)',
      icon: 'fas fa-file-pdf',
      action: () => {
        if (onDownloadCV) onDownloadCV();
        onClose();
      },
    },
    {
      id: 'act-resume-web',
      group: 'Resume & Documents',
      label: 'Open Interactive Web Resume',
      icon: 'fas fa-id-card',
      action: () => {
        if (onOpenResume) onOpenResume();
        onClose();
      },
    },
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      group: 'Project Case Studies',
      label: `Inspect Case Study: ${p.title} (${p.category})`,
      icon: 'fas fa-folder-open',
      action: () => {
        if (onSelectProject) onSelectProject(p);
        onClose();
      },
    })),
  ];

  const filtered = ACTIONS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '12vh 20px 20px',
        backgroundColor: 'rgba(3, 6, 15, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '640px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          background: 'rgba(9, 14, 30, 0.95)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 242, 254, 0.18)',
          overflow: 'hidden',
          padding: 0,
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '18px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <i className="fas fa-magnifying-glass" style={{ color: 'var(--cyan-primary)', fontSize: '16px' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections, projects, modes..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '15px',
            }}
          />
          <kbd
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '6px',
              padding: '2px 8px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontFamily: 'monospace',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '10px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
              No commands found for "{query}". Try "projects", "resume", or "recruiter".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(0, 242, 254, 0.25)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'all 0.1s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <i
                      className={item.icon}
                      style={{
                        color: isSelected ? 'var(--cyan-primary)' : 'var(--text-muted)',
                        fontSize: '14px',
                        width: '18px',
                        textAlign: 'center',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '13.5px',
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? '#fff' : 'var(--text-head)',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: isSelected ? 'var(--cyan-muted)' : 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.group}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Hint Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            background: 'rgba(6, 10, 22, 0.9)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '11.5px',
            color: 'var(--text-dim)',
          }}
        >
          <div style={{ display: 'flex', gap: '14px' }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span style={{ color: 'var(--cyan-primary)' }}>Oke Precious · Dev Tools</span>
        </div>
      </div>
    </div>
  );
}
