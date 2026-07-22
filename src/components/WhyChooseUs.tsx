const specs = [
  {
    num: "01",
    category: "Materials",
    title: "Marine grade",
    desc: "AISI SS-316 stainless hardware with UV-stable HDPE mesh — built for Indian monsoons.",
  },
  {
    num: "02",
    category: "Finish",
    title: "Invisible view",
    desc: "1.5 mm precision-tensioned filament preserves 100% of your balcony's panoramic view.",
  },
  {
    num: "03",
    category: "Ethos",
    title: "Humane tech",
    desc: "PETA-safe deterrent — protects your family without any harm to birds or wildlife.",
  },
  {
    num: "04",
    category: "Logistics",
    title: "Rapid deploy",
    desc: "Trained two-person crews complete a standard balcony in under 120 minutes.",
  },
  {
    num: "05",
    category: "Assurance",
    title: "5-year term",
    desc: "Comprehensive written warranty — free service visits and tension adjustments included.",
  },
  {
    num: "06",
    category: "Audit",
    title: "Site precision",
    desc: "Complimentary on-site measurement with a transparent, itemised quote — no obligation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="py-14 md:py-20 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-10 md:mb-14">
            <div className="flex justify-between items-start gap-6">
              <div className="space-y-3 min-w-0">
                <div className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-px w-8 bg-gold" />
                  <p className="text-gold font-display text-[10px] md:text-xs tracking-[0.24em] uppercase font-semibold">
                    Technical Specifications
                  </p>
                </div>
                <h2
                  id="why-heading"
                  className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-balance"
                >
                  The Star
                  <br />
                  Standard
                </h2>
              </div>
              <div className="shrink-0 border border-secondary/40 bg-secondary/10 px-4 py-3 md:px-5 md:py-4 text-center rounded-md">
                <span className="block font-display text-2xl md:text-3xl font-bold leading-none text-secondary">
                  98%
                </span>
                <span className="block text-[8px] md:text-[9px] uppercase tracking-[0.18em] mt-1.5 text-primary-foreground/60">
                  Satisfaction
                </span>
              </div>
            </div>
            <p className="mt-6 text-primary-foreground/70 font-body text-sm md:text-base leading-relaxed max-w-[36ch]">
              Defining the benchmark for premier residences in{" "}
              <span className="text-secondary font-medium">Lucknow &amp; Ranchi</span> since 2015.
            </p>
          </header>

          {/* Spec list */}
          <ul role="list" className="border-t border-primary-foreground/10">
            {specs.map(({ num, category, title, desc }) => (
              <li
                key={num}
                className="group py-6 md:py-7 border-b border-primary-foreground/10 transition-colors hover:bg-primary-foreground/[0.02]"
              >
                <div className="flex gap-4 md:gap-6">
                  <span className="text-gold font-display font-light text-sm md:text-base pt-0.5 tabular-nums shrink-0">
                    {num}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[11px] uppercase tracking-[0.22em] font-display font-semibold text-secondary">
                        {category}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="h-px flex-grow bg-primary-foreground/10 group-hover:bg-gold/30 transition-colors duration-500"
                      />
                    </div>
                    <h4 className="text-lg md:text-xl font-display font-semibold tracking-tight">
                      {title}
                    </h4>
                    <p className="text-xs md:text-sm text-primary-foreground/55 leading-relaxed max-w-prose">
                      {desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer bar */}
          <footer className="mt-10 py-4 bg-secondary/5 border-y border-secondary/25 text-center">
            <p className="text-[10px] md:text-[11px] tracking-[0.22em] font-display font-medium text-secondary uppercase">
              Certified Installation Partner · Lucknow &amp; Ranchi
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
