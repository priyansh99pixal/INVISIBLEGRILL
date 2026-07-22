import { MessageCircle, Phone, CalendarCheck } from "lucide-react";

const PHONE = "919576951751";
const TEL = "+919576951751";
const MESSAGE =
  "Hi! I'm interested in getting a bird net / safety net installed on my balcony. Could you share a quote?";

const WhatsAppButton = () => {
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="sticky bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.15)]"
    >
      <div className="container grid grid-cols-3 gap-2 sm:gap-3 py-2 sm:py-2.5">
        <a
          href={`tel:${TEL}`}
          aria-label="Call us at +91 95769 51751"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-secondary text-secondary-foreground min-h-11 px-2 sm:px-4 font-semibold text-xs sm:text-sm hover:bg-secondary/90 active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>
        <a
          href={`tel:${TEL}`}
          aria-label="Book a free site inspection — call +91 95769 51751"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gold text-gold-foreground min-h-11 px-2 sm:px-4 font-bold text-xs sm:text-sm hover:bg-gold/90 active:scale-[0.98] transition-all gold-glow"
        >
          <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          <span className="whitespace-nowrap">Get Inspection</span>
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#25D366] text-white min-h-11 px-2 sm:px-4 font-semibold text-xs sm:text-sm hover:bg-[#22c55e] active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" aria-hidden="true" strokeWidth={0} />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
