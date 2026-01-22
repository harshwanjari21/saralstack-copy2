import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveBackground from './InteractiveBackground';
import AnimatedText from './AnimatedText';
import CodeBlock from './CodeBlock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <InteractiveBackground />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card animate-fade-in">
              <div className="relative">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-foreground/80">
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

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Premium IT solutions at <span className="text-highlight font-semibold">startup-friendly prices</span>. 
              We don't just build for you — we build <span className="text-accent font-semibold">with you</span>, 
              every step of the way.
            </p>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="lg" className="group text-base">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center text-xs font-bold text-foreground/70"
                    >
                      {['S', 'A', 'R'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Team Ready</div>
                  <div className="text-muted-foreground">Let's build together</div>
                </div>
              </div>
            </div>

            {/* USP Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 glass-card px-4 py-3 rounded-xl animate-float-3d">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction Goal</div>
              </div>
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

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 flex items-center gap-2 text-xs text-muted-foreground font-mono">
        <div className="w-4 h-px bg-accent" />
        <span>01</span>
      </div>
      <div className="absolute top-8 right-8 flex items-center gap-2 text-xs text-muted-foreground font-mono">
        <span>HERO</span>
        <div className="w-4 h-px bg-highlight" />
      </div>
    </section>
  );
};

export default HeroSection;
