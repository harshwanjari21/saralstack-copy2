import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.5 ? 165 : 35, // teal or gold
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw aurora waves
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height * 0.5 + 
            Math.sin(x * 0.003 + time + i * 0.5) * 100 +
            Math.sin(x * 0.001 + time * 0.5) * 150 +
            (mouseRef.current.y - canvas.height / 2) * 0.1;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        if (i % 2 === 0) {
          gradient.addColorStop(0, `hsla(165, 80%, 45%, ${0.03 - i * 0.005})`);
          gradient.addColorStop(0.5, `hsla(180, 70%, 40%, ${0.05 - i * 0.008})`);
          gradient.addColorStop(1, `hsla(200, 80%, 50%, ${0.03 - i * 0.005})`);
        } else {
          gradient.addColorStop(0, `hsla(35, 95%, 60%, ${0.02 - i * 0.003})`);
          gradient.addColorStop(1, `hsla(45, 90%, 55%, ${0.03 - i * 0.005})`);
        }
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw and update particles
      particlesRef.current.forEach((particle, index) => {
        // Mouse influence
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          particle.vx += (dx / dist) * force * 0.02;
          particle.vy += (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${particle.hue}, 80%, 60%, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        particlesRef.current.slice(index + 1).forEach((other) => {
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
      
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Large glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-highlight/15 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      
      {/* Floating 3D shapes */}
      <div className="absolute top-20 right-[20%] w-20 h-20 border border-accent/30 rotate-45 animate-float-3d">
        <div className="absolute inset-2 border border-accent/20" />
      </div>
      <div className="absolute bottom-32 left-[15%] w-16 h-16 border border-highlight/30 rotate-12 animate-float-3d-reverse">
        <div className="absolute inset-2 border border-highlight/20" />
      </div>
      
      {/* Tech circles */}
      <div className="absolute top-1/3 right-[10%] w-64 h-64">
        <div className="absolute inset-0 rounded-full border border-accent/10 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border border-dashed border-accent/20 animate-spin-reverse" />
        <div className="absolute inset-8 rounded-full border border-accent/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
