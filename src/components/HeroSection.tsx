import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveBackground from './InteractiveBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <InteractiveBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">Transforming Ideas into Digital Reality</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Build Smarter with</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            SaralStack
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We craft innovative IT solutions that simplify complexity and accelerate your business growth. From web development to cloud infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" className="group">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
