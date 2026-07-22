import heroImage from "@/assets/hero-balcony.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";

const stats = [
  { value: "2,000+", label: "Installs" },
  { value: "Since 2015", label: "Trusted Trade" },
  { value: "5 Year", label: "Warranty" },

];

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-dvh w-full flex flex-col overflow-hidden bg-primary"
    >
      {/* Full-bleed background image */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-55"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/55 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-primary/40" />
      </div>

      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-secondary/20 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold/15 blur-[140px]" />
      </div>

      {/* Top brand rail (spaced below fixed navbar) */}
      <div className="relative z-10 container pt-28 md:pt-32">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex flex-col">
            <span className="font-display font-extrabold text-primary-foreground text-sm tracking-tight leading-none">
              HOME SAFETY INVISIBLE GRILL
            </span>
            <span className="text-secondary text-[10px] font-bold tracking-[0.24em] uppercase mt-1">
              Grill &amp; Safety Net · Est. 2015
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="text-primary-foreground text-[10px] font-semibold tracking-[0.16em] uppercase">
              Lucknow · Ranchi
            </span>
          </div>
        </div>
      </div>

      {/* Content anchored to bottom */}
      <div className="relative z-10 container flex-1 flex flex-col justify-end pb-16 pt-16 md:pt-20">
        <div className="max-w-2xl animate-fade-up">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary-hover,208_60%_18%))]/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-secondary/30 mb-7">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
            <span className="text-primary-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
              Lucknow&apos;s #1 rated installer · 4.9 / 5
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display font-extrabold text-primary-foreground leading-[0.9] tracking-[-0.04em] text-balance mb-6"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#5cbdb9] via-accent to-secondary text-[3.75rem] sm:text-[6rem] lg:text-[8.5rem] leading-[0.85]">
              INVISIBLE GRILL
            </span>
            <span className="block text-primary-foreground/90 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mt-4">
              Unobstructed views. Uncompromised safety.
            </span>
          </h1>

          <p className="font-body text-primary-foreground/75 text-base sm:text-lg leading-relaxed max-w-xl mb-9">
            Nearly-invisible <strong className="text-primary-foreground font-semibold">SS-316 marine-grade</strong> balcony grills, bird nets and safety nets — precision-installed to disappear into your view while keeping birds, pests and little ones exactly where they should be.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="text-base px-8 min-h-14 bg-gold hover:bg-gold/90 text-gold-foreground gold-glow font-bold group rounded-xl"
            >
              <a href="#contact">
                Get Free Site Survey
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 min-h-14 rounded-xl border-primary-foreground/25 bg-primary-foreground/[0.06] backdrop-blur text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:+919576951751" aria-label="Call us at +91 95769 51751">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                +91 95769 51751
              </a>
            </Button>
          </div>

          {/* Stats — hairline divided */}
          <dl className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary-foreground/15 pt-8 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <div className="font-display text-2xl md:text-[1.75rem] font-bold text-primary-foreground leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-secondary uppercase tracking-[0.2em] font-bold mt-2">
                    {stat.label}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Hairline architectural rule */}
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
