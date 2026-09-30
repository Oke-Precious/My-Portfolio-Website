import React from 'react';

export default function GlassCard({
  children,
  className = '',
  enableTilt = false,
  highlightOnHover = true,
  style = {},
  ...props
}) {
  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = (e) => {
    if (!enableTilt) return;
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <div
      className={`glass-card ${highlightOnHover ? 'glass-card-hoverable' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
