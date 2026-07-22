import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ServiceMap = () => {
  return (
    <section
      id="coverage"
      aria-labelledby="coverage-heading"
      className="py-14 md:py-20 subtle-gradient relative overflow-hidden"
    >
      <div className="container relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
              Service coverage
            </span>
          </div>
          <h2
            id="coverage-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]"
          >
            Serving <span className="text-secondary">Lucknow</span> &amp; Ranchi
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            Local crews, local response times. Our teams operate across every
            major neighbourhood — usually on-site within 24 hours of your call.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-stretch">
          {/* Map */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-card min-h-[420px]">
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-gradient-to-br from-secondary/20 via-transparent to-gold/20 pointer-events-none rounded-[2rem]"
            />
            <iframe
              title="Home Safety Invisible Grill — Lucknow service area map"
              src="https://www.google.com/maps?q=Lucknow,Uttar+Pradesh,India&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            <div className="relative bg-primary text-primary-foreground rounded-[1.75rem] p-7 shadow-xl overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-gold" aria-hidden="true" />
                  <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-primary-foreground/70">
                    Head office
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Lucknow, Uttar Pradesh</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                  Covering Gomti Nagar, Hazratganj, Indira Nagar, Aliganj,
                  Vibhuti Khand, Jankipuram &amp; all surrounding areas.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Lucknow,Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-[1.75rem] p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-muted-foreground">
                  Branch
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Ranchi, Jharkhand
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Serving Kanke Road, Lalpur, Doranda, Harmu, Ashok Nagar
                &amp; nearby localities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919576951751"
                className="bg-card border border-border rounded-2xl p-5 hover:border-secondary/50 hover:shadow-md transition-all group"
              >
                <Phone className="w-5 h-5 text-secondary mb-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Call us</div>
                <div className="font-display font-bold text-foreground text-sm">+91 95769 51751</div>
              </a>
              <div className="bg-card border border-border rounded-2xl p-5">
                <Clock className="w-5 h-5 text-secondary mb-2" aria-hidden="true" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Open</div>
                <div className="font-display font-bold text-foreground text-sm">Mon–Sun · 8am–8pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
