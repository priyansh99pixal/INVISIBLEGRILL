import { Quote, Star, BadgeCheck, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const homepageReviews = testimonials.slice(0, 5);
  const [featured, ...rest] = homepageReviews;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-14 md:py-20 bg-background relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-[0.04]" />
      <div aria-hidden="true" className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
                Verified Customers · Real Homes
              </span>
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>
            <h2
              id="testimonials-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-[1.02] tracking-tight"
            >
              Trusted by 2,000+ homes<br />
              <span className="text-secondary">across Lucknow & Ranchi.</span>
            </h2>
          </div>

          <div className="flex items-center gap-5 md:pb-3">
            <div className="text-right">
              <div className="font-display font-bold text-4xl md:text-5xl text-foreground leading-none">
                4.9<span className="text-2xl text-muted-foreground">/5</span>
              </div>
              <div className="flex gap-0.5 mt-2 justify-end" aria-label="4.9 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">
                500+ verified reviews
              </div>
            </div>
          </div>
        </div>

        {/* Featured hero review */}
        <figure className="relative rounded-3xl overflow-hidden card-shadow mb-8 grid lg:grid-cols-2 bg-primary text-primary-foreground">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <img
              src={featured.image}
              alt={`Actual invisible grill installation — ${featured.location}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-primary/40 to-transparent" />
            <span aria-hidden="true" className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-gold" />
            <span aria-hidden="true" className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-gold" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-gold-foreground text-[10px] font-bold uppercase tracking-[0.18em]">
                <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Actual Install
              </span>
            </div>
          </div>

          <div className="relative p-8 md:p-12 flex flex-col">
            <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-30" />
            <span aria-hidden="true" className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
            <span aria-hidden="true" className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-gold/60" />

            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-10 h-10 text-gold" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                  <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                  Verified
                </span>
              </div>
              <div className="flex gap-1 mb-5" aria-label={`${featured.rating} out of 5 stars`}>
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.2] font-medium tracking-tight text-balance flex-1">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-primary-foreground/15 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-display font-bold text-lg">
                    {featured.initial}
                  </div>
                  <div>
                    <div className="font-bold">{featured.name}</div>
                    <div className="text-primary-foreground/60 text-sm flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {featured.location}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-[11px] uppercase tracking-wider text-primary-foreground/50">Service</div>
                  <div className="text-sm font-bold text-gold">{featured.service}</div>
                </div>
              </figcaption>
            </div>
          </div>
        </figure>

        {/* Remaining 4 reviews with images */}
        <ul role="list" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {rest.map((t) => (
            <li key={t.name}>
              <figure className="h-full bg-card rounded-3xl overflow-hidden card-shadow border border-border relative hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={`${t.service} installation — ${t.location}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <span aria-hidden="true" className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold" />
                  <span aria-hidden="true" className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-gold text-gold-foreground text-[9px] font-bold uppercase tracking-wider">
                      {t.service}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t.date}
                    </span>
                  </div>
                  <blockquote className="text-foreground text-[14px] leading-relaxed mb-5 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-display font-bold text-sm">
                      {t.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-foreground text-sm truncate flex items-center gap-1.5">
                        {t.name}
                        <BadgeCheck className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                      </div>
                      <div className="text-muted-foreground text-xs truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                        {t.location}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>

        {/* View all reviews CTA */}
        <div className="mt-12 md:mt-14 flex justify-center">
          <Link
            to="/reviews"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-[0.18em] card-shadow hover:card-hover-shadow hover:-translate-y-0.5 transition-all"
          >
            View All 250+ Reviews
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Trust footer */}
        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
            <p className="text-sm md:text-base text-foreground">
              <span className="font-bold">Every review is verified</span>
              <span className="text-muted-foreground"> · Real customers · Real installations across Lucknow & Ranchi</span>
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-bold text-secondary hover:text-secondary/80 uppercase tracking-wider whitespace-nowrap"
          >
            Join 2,000+ happy homes →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
