import { Users, Repeat, Zap, TrendingUp } from 'lucide-react';
import saralstack from '../../public/SaralStackLogo (2).png';
const values = [
  { 
    icon: Users, 
    number: '01', 
    title: 'Client-First', 
    description: 'Your vision drives every decision',
    color: 'accent' as const,
  },
  { 
    icon: Repeat, 
    number: '02', 
    title: 'Agile Process', 
    description: 'Transparent iterations with feedback',
    color: 'highlight' as const,
  },
  { 
    icon: Zap, 
    number: '03', 
    title: 'Rapid Delivery', 
    description: 'Launch faster, quality intact',
    color: 'highlight' as const,
  },
  { 
    icon: TrendingUp, 
    number: '04', 
    title: 'Smart Pricing', 
    description: 'Enterprise quality, startup rates',
    color: 'accent' as const,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm sm:text-base md:text-lg lg:text-[24px] text-gray-200 font-medium text-muted-foreground">About SaralStack</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">We're Not Just </span>
              <span className="text-foreground">Developers, </span>
              <span className="text-gradient">We're Partners</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform shadow-lg shadow-accent/25"
              >
                Let's Talk
              </a>
              <span className="text-xs sm:text-sm text-muted-foreground">No commitment required</span>
            </div>
          </div>

          {/* Right side - Stats/Values */}
          <div className="relative mt-8 lg:mt-0">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 border border-accent/20 rounded-full animate-spin-slow hidden sm:block" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 border border-highlight/20 rotate-45 hidden sm:block" />

            {/* Elegant value cards with visual appeal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((item, index) => {
                const isAccent = item.color === 'accent';
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      isAccent 
                        ? 'from-accent/10 via-accent/5 to-transparent' 
                        : 'from-highlight/10 via-highlight/5 to-transparent'
                    }`} />
                    
                    {/* Border glow effect */}
                    <div className={`absolute inset-0 rounded-2xl border ${
                      isAccent ? 'border-accent/20' : 'border-highlight/20'
                    }`} />
                    
                    {/* Content */}
                    <div className="relative p-4 sm:p-5 lg:p-6 h-full flex flex-col">
                      {/* Top row - Icon and number */}
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                          isAccent 
                            ? 'bg-accent/15 border border-accent/30' 
                            : 'bg-highlight/15 border border-highlight/30'
                        }`}>
                          <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isAccent ? 'text-accent' : 'text-highlight'}`} />
                        </div>
                        <span className={`text-3xl sm:text-4xl font-bold ${isAccent ? 'text-white' : 'text-white'}`}>
                          {item.number}
                        </span>
                      </div>
                      
                      {/* Title with gradient underline */}
                      <div className="mb-2 sm:mb-3">
                        <h4 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
                          {item.title}
                        </h4>
                        <div className={`w-10 sm:w-12 h-0.5 rounded-full bg-gradient-to-r ${
                          isAccent ? 'from-accent to-accent/30' : 'from-highlight to-highlight/30'
                        }`} />
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-450 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote card */}
            <div className="mt-6 sm:mt-8 glass-card rounded-2xl p-3 sm:p-4 border-l-4 border-accent">
              <p className="text-sm sm:text-base text-foreground italic mb-3 sm:mb-4">
                "Technology should empower, not overwhelm. We build solutions that grow with your business."
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full to-highlight flex items-center justify-center text-sm font-bold text-background flex-shrink-0">
                  <img src={saralstack} alt="SaralStack Logo" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">SaralStack Team</div>
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
