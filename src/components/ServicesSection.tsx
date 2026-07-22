import { Home, Building2, Wrench, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Balcony Bird Nets",
    description: "Custom-fit UV-stable HDPE nets. Keeps pigeons out, keeps your view in.",
    price: "From ₹999",
    highlight: false,
  },
  {
    icon: Building2,
    number: "02",
    title: "Full Building Coverage",
    description: "End-to-end pigeon-proofing for apartment complexes, hotels & commercial towers.",
    price: "Custom quote",
    highlight: true,
  },
  {
    icon: Wrench,
    number: "03",
    title: "Repair & Maintenance",
    description: "Same-day repair for torn or aging nets. Extended warranty on serviced areas.",
    price: "From ₹499",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Anti-Bird Spikes",
    description: "Stainless steel spikes for ledges, windowsills and parapets. Humane & effective.",
    price: "From ₹299/ft",
    highlight: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-14 md:py-20 bg-background relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20 max-w-5xl">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
                Our expertise
              </span>
            </div>
            <h2
              id="services-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-[1.02] tracking-tight"
            >
              Specialised solutions,<br />
              <span className="text-secondary">installed with precision.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm md:text-right">
            Every job begins with a free on-site survey. Every install ends with a written 5-year warranty.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" role="list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className={`group relative rounded-3xl p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  service.highlight
                    ? "bg-primary text-primary-foreground border-primary card-shadow"
                    : "bg-card text-card-foreground border-border card-shadow hover:card-hover-shadow"
                }`}
              >
                {service.highlight && (
                  <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-40" />
                )}
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <span className={`font-display font-bold text-xs tracking-[0.24em] ${service.highlight ? "text-gold" : "text-secondary"}`}>
                      {service.number}
                    </span>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110 ${
                      service.highlight
                        ? "bg-gold/15 border-gold/30"
                        : "bg-secondary/10 border-secondary/20"
                    }`}>
                      <Icon className={`w-5 h-5 ${service.highlight ? "text-gold" : "text-secondary"}`} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-bold mb-3 font-display leading-tight ${service.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm md:text-[15px] mb-8 leading-relaxed flex-1 ${service.highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>

                  <div className={`flex items-center justify-between pt-5 border-t ${service.highlight ? "border-primary-foreground/15" : "border-border"}`}>
                    <span className={`font-display font-bold text-base ${service.highlight ? "text-gold" : "text-secondary"}`}>
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      aria-label={`Enquire about ${service.title}`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:rotate-45 ${
                        service.highlight
                          ? "bg-gold text-gold-foreground"
                          : "bg-foreground text-background"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
