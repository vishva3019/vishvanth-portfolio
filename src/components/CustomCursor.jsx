import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });

  useEffect(() => {
    if (isTouch) return;

    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const updateTrailing = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: '#c9a66b',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          transition: 'transform 0.05s linear, opacity 0.2s ease',
          opacity: isHovered ? 0 : 0.9,
          boxShadow: '0 0 8px rgba(201, 166, 107, 0.8)'
        }}
      />
      {/* Outer fluid trailing ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          border: isHovered ? '1px solid rgba(201, 166, 107, 0.7)' : '1px solid rgba(201, 166, 107, 0.35)',
          backgroundColor: isHovered ? 'rgba(201, 166, 107, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 14)}px, ${
            trailingPos.y - (isHovered ? 24 : 14)
          }px, 0)`,
          transition:
            'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease',
          boxShadow: isHovered ? '0 0 20px rgba(201, 166, 107, 0.25)' : 'none'
        }}
      />
    </>
  );
}
