import { ShieldCheck, Award, Clock, BadgeCheck } from "lucide-react";

const items = [
  { icon: Award, value: "Since 2015", label: "10+ yrs of trade" },
  { icon: ShieldCheck, value: "5-Year", label: "written warranty" },
  { icon: BadgeCheck, value: "SS-304/316", label: "food-grade hardware" },
  { icon: Clock, value: "48-Hour", label: "install turnaround" },
];

const TrustStrip = () => {
  return (
    <section aria-label="Trust indicators" className="bg-primary border-y border-primary-foreground/10 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative">
        <ul
          role="list"
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10 border-x border-primary-foreground/10"
        >
          {items.map(({ icon: Icon, value, label }) => (
            <li key={value} className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-5 md:py-6">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-primary-foreground text-sm md:text-base leading-tight">
                  {value}
                </div>
                <div className="text-primary-foreground/60 text-[11px] md:text-xs uppercase tracking-wider truncate">
                  {label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
