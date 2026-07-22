import { Phone, Mail, MapPin, MessageCircle, Shield, Award, Clock } from "lucide-react";
import logo from "@/assets/hsi-logo.jpg";

const PHONE = "+91 95769 51751";
const PHONE_RAW = "919576951751";
const EMAIL = "satyamkumarsim@gmail.com";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Top hairline accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* CTA strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent">
                Free Site Survey
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Secure your balcony today.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
                "Hi, I'd like a free site survey for invisible grill installation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 hover:border-accent px-5 py-3 rounded-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-4">
          <a href="#" className="inline-flex items-center gap-3" aria-label="Home Safety Invisible Grill — home">
            <img
              src={logo}
              alt="HSI logo"
              className="w-11 h-11 rounded-sm object-cover bg-background"
            />
            <div>
              <div className="font-display font-bold text-base leading-tight">
                Home Safety
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-accent">
                Invisible Grill
              </div>
            </div>
          </a>
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            Precision-engineered invisible grills, safety nets, and bird nets for balconies —
            unobstructed views, uncompromised safety. Serving Lucknow &amp; Ranchi since 2018.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/80 border border-primary-foreground/15 px-2.5 py-1.5">
              <Shield className="h-3 w-3 text-accent" /> Since 2015 · 5-Yr Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/80 border border-primary-foreground/15 px-2.5 py-1.5">
              <Award className="h-3 w-3 text-accent" /> SS-316 Grade
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-primary-foreground/80 border border-primary-foreground/15 px-2.5 py-1.5">
              <Clock className="h-3 w-3 text-accent" /> 48-Hr Install
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-2">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><a href="#services" className="hover:text-accent transition-colors">Invisible Grill</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Safety Nets</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Bird Nets</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Balcony Nets</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Anti-Pigeon Nets</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
            
            <li><a href="#testimonials" className="hover:text-accent transition-colors">Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#coverage" className="hover:text-accent transition-colors">Service Areas</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <a href={`tel:${PHONE_RAW}`} className="text-primary-foreground hover:text-accent transition-colors">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="text-primary-foreground/80 hover:text-accent transition-colors break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="text-primary-foreground/70">
                Serving Lucknow &amp; Ranchi<br />
                <span className="text-xs text-primary-foreground/50">Mon–Sun · 8:00 AM – 8:00 PM</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50 font-mono">
            © {year} Home Safety Invisible Grill · All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <span className="font-mono">Est. 2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
