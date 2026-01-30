import { Globe, Smartphone, Palette, RefreshCcw, Search, ArrowUpRight, Blocks } from 'lucide-react';

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
  {
  icon: Blocks,
  title: 'Web3 Tools & Integrations',
  description: 'Web3 mini apps, platform integrations, websites, and custom Discord/Telegram bots with webhook integration and automation scripts for Web3 products and platforms.',
  tags: ['Web3 Mini Apps', 'Integrations', 'Discord/Telegram Bots', 'Webhooks'],
  color: 'accent',
}
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm sm:text-base md:text-lg lg:text-[24px] text-gray-200 font-medium text-muted-foreground">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Services That </span>
            <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            From concept to deployment, we deliver end-to-end IT solutions that transform your business vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-${service.color}/10 border border-${service.color}/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color === 'accent' ? 'text-accent' : 'text-highlight'}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-secondary/50 text-foreground/70 border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-border/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
