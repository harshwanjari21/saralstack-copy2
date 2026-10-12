import { Zap, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Saralstack from '../../public/SaralStackLogo (2).png';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Website Rework', href: '#services' },
    { name: 'SEO Optimization', href: '#services' },
    { name: 'Web3 Tools & Integrations', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Top section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 sm:gap-3 mb-4 group">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg to-highlight flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={Saralstack} alt="SaralStack Logo" />
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                <span className="text-foreground">Saral</span>
                <span className="text-accent">Stack</span>
              </span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              You see your product being built-collaborative, transparent development with scalable engineering at startup-friendly pricing, so you’re part of the process, not just the client.  </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">Accepting new projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-base text-foreground font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-base text-foreground font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office & MSME */}
          <div>
            <h4 className="text-sm sm:text-base text-foreground font-semibold mb-3 sm:mb-4">Registered Office</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Juni+Shukrawari,+Ganesh+Nagar,+Azamshah+Layout,+Nagpur,+Maharashtra+440024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors leading-relaxed block mb-4 group"
            >
              <span>House No. 207, Juni Shukrawari, Ganesh Nagar, Azamshah Layout, Nagpur, Maharashtra 440024</span>
              <ArrowUpRight className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/20">
              <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground block">
                  MSME Registration
                </span>
                <span className="text-xs font-mono font-medium text-foreground">
                  UDYAM-MH-20-0348149
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-left">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} SaralStack. All rights reserved.
              </p>
              <span className="hidden sm:inline text-border">•</span>
              <p className="text-xs text-muted-foreground">
                MSME: <span className="text-foreground font-medium font-mono">UDYAM-MH-20-0348149</span>
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
