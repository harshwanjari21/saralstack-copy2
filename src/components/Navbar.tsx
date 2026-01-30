import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Saral from '../../public/SaralStackLogo (2).png';
const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-background/20 backdrop-blur-sm'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: '0.375rem' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg from-accentflex items-center justify-center transform ">
            
                <img src={Saral} alt="SaralStack Logo" className='w-full h-full object-cover'/>
              </div>
              <div className="absolute inset-0 w-10 h-10 rounded-lg from-accent to-highlight blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">
              <span className="text-foreground text-lg sm:text-xl lg:text-2xl">Saral</span>
              <span className="text-accent text-lg sm:text-xl lg:text-2xl">Stack</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 lg:px-4 py-2 text-sm lg:text-md font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-highlight group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" className="group text-sm" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <span>Get Started</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[60] p-2.5 rounded-t-xl rounded-bl-lg border-2 border-transparent bg-transparent text-foreground hover:text-accent hover:border-accent/30 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu (now positioned under navbar and visually attached) */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[calc(100vh-64px)] pb-6' : 'max-h-0'}`}
          style={{ backgroundColor: 'rgb(7, 16, 23)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
        >
          <div className="flex flex-col gap-3 pt-2 px-4 rounded-b-xl border-t border-border/10 z-[54]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="default" className="mt-4 w-full text-sm" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
