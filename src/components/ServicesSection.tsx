import { Globe, Smartphone, Palette, RefreshCcw, Search, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Scalable web solutions engineered for performance and growth. We transform your vision into powerful digital experiences that captivate users.',
    tags: ['React', 'Next.js', 'Node.js', 'Django', 'Flask'],
    color: 'accent',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    tags: ['React Native'],
    color: 'highlight',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind. We create designs that convert visitors into customers.',
    tags: ['Figma', 'Prototyping', 'User Research'],
    color: 'accent',
  },
  {
    icon: RefreshCcw,
    title: 'Website Rework',
    description: 'Transform your outdated website into a modern, high-performing digital presence. Complete redesign and code refactoring.',
    tags: ['Modernization', 'Performance', 'Migration'],
    color: 'highlight',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search engine rankings and drive organic traffic. Technical SEO, content strategy, and performance optimization.',
    tags: ['Technical SEO', 'Analytics', 'Content'],
    color: 'accent',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[24px] text-gray-300 font-medium text-muted-foreground">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Services That </span>
            <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we deliver end-to-end IT solutions that transform your business vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 border border-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color === 'accent' ? 'text-accent' : 'text-highlight'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-foreground/70 border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-border/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
