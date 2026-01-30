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
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Typography */}
          <div className="lg:col-span-7 space-y-8 mt-16">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card animate-fade-in">
              <div className="relative">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping" />
              </div>
              <span className="text-[18px] font-medium text-gray-200">
                Now accepting new projects
              </span>
              <Sparkles className="w-4 h-4 text-highlight" />
            </div>

            {/* Main heading - Super bold and dramatic */}
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]">
                <span className="block text-foreground">We Build</span>
                <span className="block text-foreground/60">Digital</span>
                <span className="block">
                  <AnimatedText />
                </span>
              </h1>
            </div>

            {/* Brand name with creative treatment */}
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-transparent" />
              <span className="text-lg font-semibold tracking-widest text-accent uppercase">
                SaralStack
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-highlight to-transparent" />
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" className="group text-base">
                <a href="#contact" className="flex items-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* USP Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { text: 'Affordable Rates', icon: '₹' },
                { text: 'Agile Process', icon: '⚡' },
                { text: 'Client-First', icon: '🤝' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-foreground/80 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Code block */}
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border border-accent/20 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-highlight/20 rotate-45" />
              
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
