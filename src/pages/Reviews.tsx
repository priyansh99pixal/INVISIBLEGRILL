import { Star, BadgeCheck, MapPin, Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { testimonials } from "@/data/testimonials";

const Reviews = () => {
  useEffect(() => {
    document.title = "Customer Reviews — Home Safety Invisible Grill";
  }, []);

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-[0.08]" />
          <div aria-hidden="true" className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/15 blur-3xl" />

          <div className="container relative">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold text-sm uppercase tracking-[0.2em] font-bold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Link>

            <div className="mb-8 [&_*]:!text-primary-foreground/80 [&_[aria-current='page']]:!text-gold [&_a:hover]:!text-gold">
              <Breadcrumbs items={[{ name: "Customer Reviews" }]} />
            </div>


            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
                All Customer Reviews
              </span>
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.02] tracking-tight max-w-3xl">
              What our customers say<br />
              <span className="text-gold">across Lucknow & Ranchi.</span>
            </h1>

            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div>
                <div className="font-display font-bold text-5xl md:text-6xl leading-none">
                  4.9<span className="text-2xl text-primary-foreground/50">/5</span>
                </div>
                <div className="flex gap-0.5 mt-2" aria-label="4.9 out of 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className="border-l border-primary-foreground/20 pl-10">
                <div className="font-display font-bold text-4xl md:text-5xl leading-none">
                  250+
                </div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-2">
                  Verified Reviews
                </div>
              </div>
              <div className="border-l border-primary-foreground/20 pl-10">
                <div className="font-display font-bold text-4xl md:text-5xl leading-none">
                  2,000+
                </div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-2">
                  Happy Homes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="py-20 md:py-24 bg-background relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-[0.03]" />
          <div className="container relative">
            <ul role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t) => (
                <li key={t.name + t.date}>
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
                      <Quote className="w-6 h-6 text-secondary/25 mb-2" aria-hidden="true" />
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

            <div className="mt-16 rounded-2xl border border-gold/30 bg-gold/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-base md:text-lg text-foreground">
                <span className="font-bold">Ready for your own 5-star install?</span>{" "}
                <span className="text-muted-foreground">Free site survey across Lucknow & Ranchi.</span>
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-[0.18em] hover:card-hover-shadow transition-all"
              >
                Book Free Survey
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;
