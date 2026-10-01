import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReduced) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .glass-card-hoverable');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central crisp dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#00F2FE',
          pointerEvents: 'none',
          zIndex: 100000,
          transition: 'transform 0.04s linear, background-color 0.2s ease',
          boxShadow: '0 0 8px #00F2FE',
        }}
      />

      {/* Trailing subtle ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate(${pos.x - (isHovered ? 20 : 14)}px, ${pos.y - (isHovered ? 20 : 14)}px)`,
          width: isHovered ? '40px' : '28px',
          height: isHovered ? '40px' : '28px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? 'rgba(0, 242, 254, 0.7)' : 'rgba(0, 242, 254, 0.3)'}`,
          backgroundColor: isHovered ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease',
        }}
      />
    </>
  );
}
