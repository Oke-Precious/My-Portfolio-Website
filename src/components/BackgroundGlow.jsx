import React, { useEffect, useState } from 'react';

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable mouse-follow on devices that support hover
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsDesktop(hasHover);

    if (!hasHover) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="ambient-backdrop"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          opacity: 0.8,
        }}
      />

      {/* Atmospheric Luminous Orbs (Optimized with high performance) */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(20, 184, 166, 0.06) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.09) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Mouse Following Ambient Glow (Desktop hover only) */}
      {isDesktop && (
        <div
          style={{
            position: 'fixed',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 242, 254, 0.07) 0%, rgba(99, 102, 241, 0.03) 40%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)',
            transition: 'opacity 0.3s ease',
            opacity: mousePos.x > 0 ? 1 : 0,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
