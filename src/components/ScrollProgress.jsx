import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollWidth(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scrollProgress"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scrollWidth}%`,
        background: 'linear-gradient(90deg, #00F2FE 0%, #6366F1 50%, #8B5CF6 100%)',
        boxShadow: '0 0 10px rgba(0, 242, 254, 0.7)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}
