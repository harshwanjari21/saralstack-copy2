import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speed: number;
}

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          baseX: Math.random() * 100,
          baseY: Math.random() * 100,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/30 via-accent/5 to-transparent blur-3xl transition-transform duration-700 ease-out"
        style={{
          left: `${mousePosition.x - 15}%`,
          top: `${mousePosition.y - 15}%`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl transition-transform duration-1000 ease-out"
        style={{
          left: `${mousePosition.x + 10}%`,
          top: `${mousePosition.y + 10}%`,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, index) => {
        const distanceX = (mousePosition.x - particle.baseX) * particle.speed * 0.3;
        const distanceY = (mousePosition.y - particle.baseY) * particle.speed * 0.3;
        
        return (
          <div
            key={index}
            className="absolute rounded-full bg-accent/40 transition-all duration-500 ease-out"
            style={{
              left: `${particle.baseX + distanceX}%`,
              top: `${particle.baseY + distanceY}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        );
      })}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 12}%`}
            y1="0%"
            x2={`${20 + i * 12}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default InteractiveBackground;
