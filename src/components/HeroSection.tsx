import { ArrowRight, Zap, Users, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveBackground from './InteractiveBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <InteractiveBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-accent font-medium">IT Solutions Simplified</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                <span className="text-foreground">We Build</span>
                <br />
                <span className="text-foreground">Digital</span>
                <br />
                <span className="relative">
                  <span className="text-gradient">Solutions</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0 7 Q50 0 100 4 T200 3" stroke="hsl(var(--highlight))" strokeWidth="2" fill="none" className="animate-draw" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium quality at honest prices. We work <span className="text-foreground font-medium">with you</span>, not just for you — keeping you involved at every step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                How We Work
              </Button>
            </div>
          </div>

          {/* Right side - USP Cards */}
          <div className="relative lg:pl-8">
            <div className="space-y-4">
              {/* USP Card 1 */}
              <div 
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 animate-fade-in cursor-default"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    <IndianRupee className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Startup-Friendly Pricing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Quality work doesn't need to break the bank. We offer competitive rates without compromising on excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* USP Card 2 */}
              <div 
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-highlight/30 transition-all duration-500 animate-fade-in cursor-default"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-highlight/10 text-highlight group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">You're Part of the Team</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Agile development with continuous collaboration. Review, feedback, and iterate together until it's perfect.
                    </p>
                  </div>
                </div>
              </div>

              {/* USP Card 3 */}
              <div 
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 animate-fade-in cursor-default"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Built for Speed</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fast turnaround times with agile sprints. See progress weekly, not monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-y-1/2 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
