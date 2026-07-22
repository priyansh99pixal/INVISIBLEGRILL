import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-accent/20 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)]"
          : "bg-primary/70 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Primary" className="container flex items-center justify-between h-16 sm:h-[72px]">
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 text-primary-foreground font-display leading-tight min-w-0"
          aria-label="Home Safety Invisible Grill — home"
        >
          {/* Monogram badge */}
          <span
            aria-hidden="true"
            className="relative flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11 rounded-[10px] bg-gradient-to-br from-accent to-accent/70 shadow-[0_4px_14px_-4px_hsl(var(--accent)/0.55)] ring-1 ring-accent/40 flex items-center justify-center overflow-hidden"
          >
            {/* Inner navy plate */}
            <span className="absolute inset-[2px] rounded-[8px] bg-primary flex items-center justify-center">
              <span className="font-display font-black text-[15px] sm:text-base tracking-tighter text-accent leading-none">
                HS<span className="text-primary-foreground">I</span>
              </span>
            </span>
            {/* Corner tick */}
            <span className="absolute -top-px -right-px h-2 w-2 rounded-bl-[3px] bg-accent" />
          </span>

          {/* Wordmark */}
          <span className="flex flex-col leading-none min-w-0">
            <span className="flex items-baseline gap-1.5 min-w-0">
              <span className="font-display font-bold text-[15px] sm:text-[17px] md:text-lg tracking-[-0.01em] text-primary-foreground truncate">
                Home Safety
              </span>
              <span className="hidden xs:inline h-1 w-1 rounded-full bg-accent/70 flex-shrink-0" />
            </span>
            <span className="mt-1 flex items-center gap-1.5 min-w-0">
              <span className="font-display font-semibold text-[11px] sm:text-[12.5px] tracking-[0.18em] uppercase text-accent truncate">
                Invisible Grill
              </span>
              <ShieldCheck className="hidden sm:block h-3 w-3 text-accent/80 flex-shrink-0" aria-hidden="true" />
            </span>
          </span>
        </a>


        <ul className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="secondary" size="sm" className="accent-glow font-semibold min-h-10">
            <a href="#contact">Get Quote</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-primary-foreground inline-flex items-center justify-center min-h-11 min-w-11 rounded-md"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-primary border-t border-primary-foreground/10 py-4">
          <div className="container flex flex-col gap-2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/80 hover:text-primary-foreground py-3 font-medium border-b border-primary-foreground/5 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="secondary" className="accent-glow font-semibold mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
