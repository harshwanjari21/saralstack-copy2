import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'saralstack.info@gmail.com', href: 'mailto:saralstack.info@gmail.com' },
  {
    icon: Phone,
    label: 'Phone',
    values: [
      { value: '+91 7410128253', href: 'tel:+917410128253' },
      { value: '+91 7066352882', href: 'tel:+917066352882' },
    ],
  },
  { icon: MapPin, label: 'Location', value: 'India (Remote-First)', href: '#' },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_AUTO_TEMPLATE = import.meta.env.VITE_EMAILJS_AUTO_TEMPLATE_ID;
  const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check EmailJS config (owner template + public key required)
    if (!EMAILJS_SERVICE || !EMAILJS_TEMPLATE || !EMAILJS_PUBLIC) {
      toast({
        title: 'Email not configured',
        description:
          'Missing EmailJS configuration. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
      };

      const sendPromises: Promise<any>[] = [
        // owner notification
        emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLIC),
      ];

      // Optionally send an auto-reply to the user if auto template is configured
      if (EMAILJS_AUTO_TEMPLATE) {
        // Only attempt auto-reply when we have a valid sender email
        if (!formData.email || !formData.email.includes('@')) {
          // eslint-disable-next-line no-console
          console.warn('Skipping auto-reply: sender email is missing or invalid', formData.email);
        } else {
          // Auto-reply template should expect: to_name, to_email, message
          // Include reply_to as some templates expect this key
          const autoParams = {
            to_name: formData.name,
            to_email: formData.email,
            email: formData.email, // some templates use {{email}} in the To field
            reply_to: formData.email,
            message: formData.message,
          };

          // Log params to help debug template variable mismatches
          // eslint-disable-next-line no-console
          console.log('EmailJS autoParams:', autoParams);

          sendPromises.push(emailjs.send(EMAILJS_SERVICE, EMAILJS_AUTO_TEMPLATE, autoParams, EMAILJS_PUBLIC));
        }
      }

      // Send both (or just owner) in parallel and handle partial failures
      const results = await Promise.allSettled(sendPromises);
      // Log results for debugging
      // eslint-disable-next-line no-console
      console.log('EmailJS send results:', results);

      const rejected = results.filter((r) => r.status === 'rejected') as PromiseRejectedResult[];
      if (rejected.length > 0) {
        // Log detailed info
        // eslint-disable-next-line no-console
        console.error('EmailJS failures:', rejected);
        const first = rejected[0].reason;
        // eslint-disable-next-line no-console
        console.error('First EmailJS failure detail:', first?.status, first?.text || first);

        // If owner send failed too, treat as full failure
        if (rejected.length === results.length) {
          toast({
            title: 'Send failed',
            description: 'There was an error sending your message via EmailJS. Check the dashboard logs.',
            variant: 'destructive',
          });
        } else {
          // Partial failure (likely auto-reply failed)
          toast({
            title: 'Message received (partial)',
            description: 'Your message was received but the auto-reply could not be delivered. We logged the error.',
          });
        }
      } else {
        toast({
          title: 'Message sent! 🎉',
          description: "We've received your message. We'll get back to you within 24 hours.",
        });
      }

      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('EmailJS send error:', err);
      toast({
        title: 'Send failed',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-secondary/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />

          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Let's Build </span>
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company / Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 ">
            {/* Contact details */}
            <div className="glass-card rounded-2xl p-6 space-y-8 bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.values ? (
                      item.values.map((v, i) => (
                        <a key={i} href={v.href} className="text-foreground font-medium block group-hover:text-accent transition-colors">
                          {v.value}
                        </a>
                      ))
                    ) : (
                      <a href={item.href} className="text-foreground font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick response promise */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-highlight">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-highlight animate-pulse" />
                <span className="text-sm font-medium text-highlight">Quick Response</span>
              </div>
              <p className="text-muted-foreground text-sm">
                We typically respond within 24 hours. For urgent inquiries, give us a call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
