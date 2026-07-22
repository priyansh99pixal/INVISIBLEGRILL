import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

const OFFER_DURATION = 5 * 60 * 60; // 5 hours in seconds
const STORAGE_KEY = "star_offer_deadline";
const OFFER_CODE = "STAR50";

const format = (n: number) => n.toString().padStart(2, "0");

const OfferPopup = () => {
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState(OFFER_DURATION);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let deadline = stored ? parseInt(stored, 10) : NaN;
    if (!deadline || isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + OFFER_DURATION * 1000;
      localStorage.setItem(STORAGE_KEY, deadline.toString());
    }
    const tick = () => {
      const diff = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      setRemaining(diff);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const close = () => setOpen(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(OFFER_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center flex-1">
      <span className="font-display font-semibold text-2xl tabular-nums text-primary-foreground leading-none">
        {format(value)}
      </span>
      <span className="mt-1.5 text-[8px] tracking-[0.28em] uppercase font-display font-medium text-primary-foreground/55">
        {label}
      </span>
    </div>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close offer"
        onClick={close}
        className="absolute inset-0 bg-primary/85 backdrop-blur-md"
      />

      {/* Card */}
      <div className="relative w-full max-w-[340px] animate-scale-in">
        {/* Gold outer hairline */}
        <div className="absolute -inset-px rounded-[6px] bg-gradient-to-b from-gold/40 via-gold/10 to-gold/30 pointer-events-none" />

        <div className="relative rounded-[5px] bg-card overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground flex items-center justify-center transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Masthead — compact */}
          <div className="relative px-5 pt-5 pb-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border border-gold/50 flex items-center justify-center">
              <span className="font-display font-bold text-[11px] text-gold tracking-tight">S</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[8.5px] tracking-[0.3em] uppercase font-display font-semibold text-muted-foreground leading-none">
                Home Safety
              </p>
              <p className="mt-1 text-[8px] tracking-[0.24em] uppercase font-display text-muted-foreground/60 leading-none">
                Invisible Grill
              </p>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gold/10 border border-gold/25">
              <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
              <span className="text-[8px] tracking-[0.22em] uppercase font-display font-semibold text-gold">
                Live
              </span>
            </span>
          </div>

          {/* Hairline divider with ornament */}
          <div className="px-5 flex items-center gap-2">
            <span className="flex-1 h-px bg-foreground/10" />
            <span className="w-1 h-1 rotate-45 bg-gold/50" />
            <span className="flex-1 h-px bg-foreground/10" />
          </div>

          {/* Body */}
          <div className="relative px-5 pt-4 pb-5 text-center">
            <p className="text-[9px] tracking-[0.34em] uppercase font-display font-semibold text-secondary">
              Seasonal Offer
            </p>

            <h2
              id="offer-title"
              className="mt-2 font-display font-semibold text-[22px] leading-[1.1] tracking-tight text-foreground"
            >
              <span className="text-gold">50% Off</span> Professional
              <br /> Installation
            </h2>

            <p className="mt-2 text-[11.5px] leading-snug text-muted-foreground max-w-[260px] mx-auto">
              Limited allocation for verified balcony surveys in Lucknow &amp; Ranchi.
            </p>

            {/* Timer */}
            <div className="mt-4 rounded-[3px] bg-primary px-3 py-3 flex items-stretch">
              <TimeUnit value={hours} label="Hrs" />
              <span className="self-center font-display text-lg text-gold/50 -mt-1.5">·</span>
              <TimeUnit value={minutes} label="Min" />
              <span className="self-center font-display text-lg text-gold/50 -mt-1.5">·</span>
              <TimeUnit value={seconds} label="Sec" />
            </div>

            {/* Offer code */}
            <button
              type="button"
              onClick={copyCode}
              className="mt-3 w-full group flex items-center justify-between px-3 py-2 rounded-[3px] border border-dashed border-gold/45 bg-gold/[0.04] hover:bg-gold/[0.08] transition text-left"
            >
              <div>
                <p className="text-[8px] tracking-[0.28em] uppercase font-display font-semibold text-muted-foreground leading-none">
                  Code
                </p>
                <p className="mt-1 font-display font-bold text-[13px] tracking-[0.22em] text-foreground leading-none">
                  {OFFER_CODE}
                </p>
              </div>
              <span className="text-[9px] tracking-[0.22em] uppercase font-display font-semibold text-gold">
                {copied ? "Copied ✓" : "Tap to copy"}
              </span>
            </button>

            {/* Primary CTA */}
            <a
              href="tel:+919576951751"
              onClick={close}
              className="mt-3 inline-flex items-center justify-center gap-2 w-full h-10 rounded-[3px] bg-gold text-gold-foreground font-display font-semibold text-[12px] tracking-[0.14em] uppercase hover:brightness-110 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              Reserve by Phone
            </a>

            <button
              type="button"
              onClick={close}
              className="mt-3 text-[10px] text-muted-foreground/70 hover:text-foreground underline-offset-4 hover:underline transition"
            >
              Dismiss
            </button>
          </div>

          {/* Footer */}
          <div className="px-5 py-2 border-t border-foreground/8 bg-foreground/[0.02] flex items-center justify-between">
            <span className="text-[8px] tracking-[0.24em] uppercase font-display text-muted-foreground">
              Since 2015 · 5-Yr Warranty
            </span>
            <span className="text-[8px] tracking-[0.24em] uppercase font-display text-muted-foreground">
              Lucknow · Ranchi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
