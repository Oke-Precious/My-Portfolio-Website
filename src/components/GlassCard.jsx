import React, { useRef } from 'react';

export default function GlassCard({
  children,
  className = '',
  enableTilt = false,
  enableSpotlight = true,
  highlightOnHover = true,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    const card = cardRef.current || e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (enableSpotlight) {
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    }

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = cardRef.current || e.currentTarget;
    if (enableSpotlight) {
      card.style.setProperty('--spotlight-opacity', '0');
    }
    if (enableTilt) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card ${highlightOnHover ? 'glass-card-hoverable' : ''} ${enableSpotlight ? 'glass-card-spotlight' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease',
        position: 'relative',
        ...style,
      }}
      {...props}
    >
      {/* Subtle radial spotlight sheen beneath content */}
      {enableSpotlight && (
        <div
          className="glass-card-spotlight-layer"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 'var(--spotlight-opacity, 0)',
            transition: 'opacity 0.3s ease',
            background:
              'radial-gradient(420px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(0, 242, 254, 0.09), transparent 80%)',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
