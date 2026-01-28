import { Users, Target, Zap, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: 'Client-First', label: 'Our Core Value' },
  { icon: Target, value: 'Agile', label: 'Development Process' },
  { icon: Zap, value: 'Fast', label: 'Delivery Timeline' },
  { icon: Award, value: 'Affordable', label: 'Pricing Model' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[24px] text-gray-300 font-medium text-muted-foreground">About SaralStack</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">We're Not Just </span>
              <span className="text-foreground">Developers, </span>
              <span className="text-gradient">We're Partners</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">SaralStack</span> was born from a simple belief: 
                quality IT solutions shouldn't break the bank. We combine enterprise-level expertise with 
                <span className="text-highlight font-medium"> startup-friendly pricing</span>.
              </p>
              <p>
                Our name says it all — <span className="text-accent font-medium">"Saral"</span> means simple in Hindi. 
                We simplify complex technology, making it accessible and affordable for businesses of all sizes.
              </p>
              <p>
                What sets us apart? We don't disappear after signing. You're part of our development process, 
                attending demos, providing feedback, and shaping the product you actually need.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-lg shadow-accent/25"
              >
                Let's Talk
              </a>
              <span className="text-sm text-muted-foreground">No commitment required</span>
            </div>
          </div>

          {/* Right side - Stats/Values */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-accent/20 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-highlight/20 rotate-45" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="mt-8 glass-card rounded-2xl p-6 border-l-4 border-accent">
              <p className="text-foreground italic mb-4">
                "Technology should empower, not overwhelm. We build solutions that grow with your business."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center text-sm font-bold text-background">
                  S
                </div>
                <div>
                  <div className="font-semibold text-foreground">SaralStack Team</div>
                  <div className="text-xs text-muted-foreground">Building the future, simply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
