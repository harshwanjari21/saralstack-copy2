import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveBackground from './InteractiveBackground';
import AnimatedText from './AnimatedText';
import CodeBlock from './CodeBlock';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-background">
      <InteractiveBackground />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(2.5rem+env(safe-area-inset-top,0px))] lg:pt-[calc(2rem+env(safe-area-inset-top,0px))]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - Typography */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-8 mt-16 sm:mt-12 lg:mt-16">
            {/* Floating badge - hidden on mobile to prevent navbar collision */}
            <div className="hidden md:inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card animate-fade-in">
              <div className="relative">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-200">
                Now accepting new projects
              </span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-highlight" />
            </div>

            {/* Main heading - Responsive sizes */}
            <div className="space-y-1 sm:space-y-2 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] sm:leading-[0.9]">
                <span className="block text-foreground">We Build</span>
                <span className="block text-foreground/60">Digital</span>
                <span className="block">
                  <AnimatedText />
                </span>
              </h1>
            </div>

            {/* Brand name with creative treatment */}
            <div className="flex items-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-px flex-1 max-w-[40px] sm:max-w-[60px] bg-gradient-to-r from-accent to-transparent" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-widest text-accent uppercase">
                SaralStack
              </span>
              <div className="h-px flex-1 max-w-[40px] sm:max-w-[60px] bg-gradient-to-l from-highlight to-transparent" />
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" className="group text-sm sm:text-base w-full sm:w-auto">
                <a href="#contact" className="flex items-center justify-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* USP Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { text: 'Affordable Rates', icon: '₹' },
                { text: 'Agile Process', icon: '⚡' },
                { text: 'Client-First', icon: '🤝' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/50 border border-border/50 text-xs sm:text-sm text-foreground/80 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Code block */}
          <div className="lg:col-span-5 animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative elements - hidden on very small screens */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-16 sm:w-24 h-16 sm:h-24 border border-accent/20 rounded-full animate-spin-slow" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 border border-highlight/20 rotate-45" />
              
              <CodeBlock />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
