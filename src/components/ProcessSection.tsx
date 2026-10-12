import { MessageSquare, Lightbulb, Code2, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start by understanding your vision, goals, and challenges. Deep dive into your requirements to create a solid foundation.',
    highlight: 'Free consultation',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design & Plan',
    description: 'Our team crafts detailed wireframes, prototypes, and technical architecture. You approve every design before we code.',
    highlight: 'You approve designs',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop',
    description: 'Agile development with weekly demos. You see progress in real-time and provide feedback that shapes the product.',
    highlight: 'Weekly demos',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Rigorous testing, optimization, and smooth deployment. We ensure your product is production-ready and performs flawlessly.',
    highlight: 'Zero-downtime deploy',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Support',
    description: 'Post-launch support and maintenance. We stay with you to ensure your product continues to evolve and excel.',
    highlight: 'Ongoing partnership',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-16 sm:py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden md:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            <span className="text-sm sm:text-base md:text-lg lg:text-[24px] text-gray-200 font-medium text-muted-foreground">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Our Agile </span>
            <span className="text-gradient">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            You're not just a client — you're part of the team. Our transparent, collaborative approach keeps you involved at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - responsive positioning */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-highlight to-accent opacity-30" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-start gap-4 sm:gap-8 mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-[15px] sm:left-[31px] md:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-background border-2 border-accent z-10">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
                </div>

                {/* Content card */}
                <div className={`ml-10 sm:ml-20 md:ml-0 md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)] ${
                  isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-accent/80 transition-all duration-500 group">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-yellow-600 font-bold text-accent/30">{step.number}</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 leading-relaxed">{step.description}</p>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs sm:text-sm font-medium text-green-300">{step.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
