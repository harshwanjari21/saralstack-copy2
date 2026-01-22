import { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
      
      {/* Large geometric shapes */}
      <div
        className="absolute w-[800px] h-[800px] -right-[200px] -top-[200px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.08}px, ${(mousePosition.y - 50) * 0.08}px)`,
        }}
      >
        <div className="w-full h-full rounded-full border border-accent/10 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin-reverse" />
        <div className="absolute inset-16 rounded-full border border-accent/10" />
      </div>

      {/* Accent blob */}
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl transition-all duration-700 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x - 20}%`,
          top: `${mousePosition.y - 20}%`,
        }}
      />

      {/* Floating geometric elements */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'url(#glow)' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated triangles */}
        <polygon
          points="100,50 150,130 50,130"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          opacity="0.3"
          className="animate-float-1"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.3}px, ${(mousePosition.y - 50) * 0.3}px)`,
            transformOrigin: 'center',
          }}
        />
        <polygon
          points="85%,70% 90%,85% 80%,85%"
          fill="none"
          stroke="hsl(var(--highlight))"
          strokeWidth="1"
          opacity="0.4"
          className="animate-float-2"
        />
        
        {/* Animated squares */}
        <rect
          x="10%"
          y="60%"
          width="40"
          height="40"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          opacity="0.2"
          className="animate-float-3"
          style={{
            transform: `rotate(${mousePosition.x * 0.2}deg)`,
            transformOrigin: 'center',
          }}
        />
        <rect
          x="75%"
          y="20%"
          width="60"
          height="60"
          fill="none"
          stroke="hsl(var(--highlight))"
          strokeWidth="1"
          opacity="0.3"
          className="animate-float-1"
        />

        {/* Connection lines */}
        <line
          x1="20%"
          y1="30%"
          x2="40%"
          y2="50%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          opacity="0.1"
          strokeDasharray="5,5"
          className="animate-dash"
        />
        <line
          x1="60%"
          y1="80%"
          x2="80%"
          y2="60%"
          stroke="hsl(var(--highlight))"
          strokeWidth="1"
          opacity="0.15"
          strokeDasharray="5,5"
          className="animate-dash"
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-8 left-8 w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-t from-highlight/50 to-transparent" />
        <div className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-highlight/50 to-transparent" />
      </div>
    </div>
  );
};

export default InteractiveBackground;
