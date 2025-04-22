'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export const BackgroundFollowGlow = ({
  color = '#12B4F9', // Hex color
  size = 250, // Diameter of glow in px
  blur = '80px', // Amount of blur
  className,
  children,
}) => {
  const glowRef = useRef(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const hexToRGBA = (hex, alpha = 0.7) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;

    const followCursor = () => {
      setCurrentPos((prev) => {
        const dx = (targetPos.x - prev.x) * 0.1; // Smoothness factor
        const dy = (targetPos.y - prev.y) * 0.1;
        return {
          x: prev.x + dx,
          y: prev.y + dy,
        };
      });
      animationFrame = requestAnimationFrame(followCursor);
    };

    animationFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPos]);

  return (
    <div
      className={cn(
        'relative w-full min-h-screen overflow-hidden bg-black',
        className
      )}
    >
      {/* Glowing circle */}
      <div
        ref={glowRef}
        className='pointer-events-none absolute z-0'
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${currentPos.x - size / 2}px`,
          top: `${currentPos.y - size / 2}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${hexToRGBA(
            color,
            0.5
          )} 0%, transparent 70%)`,
          filter: `blur(${blur})`,
          transition: 'transform 0.05s linear',
        }}
      />
      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
};
