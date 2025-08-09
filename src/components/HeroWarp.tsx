"use client";
import { useRef, useState, useEffect } from "react";
import { heroWarp } from "@/lib/heroWarp.config";

export default function HeroWarp() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const distortionStyle = prefersReducedMotion ? {} : {
    filter: `blur(${Math.sin(Date.now() * 0.001) * 0.5 + 0.5}px) hue-rotate(${mousePos.x * 10}deg)`,
    transform: `perspective(1000px) rotateX(${(mousePos.y - 0.5) * 2}deg) rotateY(${(mousePos.x - 0.5) * 2}deg) scale(${1 + (mousePos.x * 0.02)})`,
    textShadow: `${mousePos.x * 4}px ${mousePos.y * 4}px 8px rgba(56, 189, 248, 0.3)`,
    transition: 'all 0.1s ease-out'
  };

  return (
    <div className="relative min-h-screen grid place-items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,.18),transparent_60%)]" />
      
      <h1 
        ref={textRef}
        className="text-[clamp(3rem,12vw,20rem)] font-display font-black leading-tight text-center tracking-tight text-white select-none"
        style={distortionStyle}
      >
        Future-Proof Product Management
      </h1>

      {!prefersReducedMotion && (
        <div 
          className="absolute pointer-events-none"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.1s ease-out'
          }}
        />
      )}
    </div>
  );
}
