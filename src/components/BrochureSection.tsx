import { useState } from "react";
import { Download, FileText, BadgeCheck, ShieldCheck, Eye, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const brochureAsset = { url: "/star-individual-brochure.pdf" };

const highlights = [
  "Full product catalogue — Invisible Grill, Bird Nets, Safety Nets",
  "Material specs: SS-316 / SS-304 wire, marine-grade fittings",
  "Installation process, warranty terms & transparent pricing",
];

const BrochureSection = () => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section
      id="brochure"
      aria-labelledby="brochure-heading"
      className="py-14 md:py-20 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
                Company Brochure · 2025 Edition
              </span>
            </div>

            <h2
              id="brochure-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.02] tracking-tight text-balance mb-6"
            >
              Every spec, every material,<br />
              <span className="text-gold">in one PDF.</span>
            </h2>

            <p className="text-lg text-primary-foreground/75 max-w-xl leading-relaxed mb-8">
              Review our complete product specifications, material certifications,
              and installation warranties — preview instantly or download the PDF.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <BadgeCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-primary-foreground/85 text-[15px]">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-gold-foreground font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Preview brochure in a modal window"
              >
                <Eye className="w-5 h-5" aria-hidden="true" />
                <span>Preview Brochure</span>
              </button>
              <a
                href={brochureAsset.url}
                download="Star-Individual-Brochure.pdf"
                className="group inline-flex items-center justify-center gap-3 bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/20 hover:border-gold/50 text-primary-foreground font-bold px-6 py-3.5 rounded-xl transition-all"
                aria-label="Download brochure PDF"
              >
                <Download className="w-5 h-5 text-gold" aria-hidden="true" />
                <span>Download PDF</span>
                <span className="hidden sm:inline text-xs font-normal opacity-60 border-l border-primary-foreground/20 pl-3">
                  4.4 MB
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-primary-foreground/50">
              <ShieldCheck className="w-4 h-4 text-gold/70" aria-hidden="true" />
              <span>No sign-up. Instant preview & download. Updated Jan 2025.</span>
            </div>
          </div>

          {/* Right: compact brochure cover */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[280px]">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-gold/15 blur-sm" />
              <div aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-secondary/25" />

              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="relative block w-full text-left rounded-xl overflow-hidden bg-gradient-to-br from-secondary/25 via-primary to-primary border border-gold/30 aspect-[3/4] group card-shadow hover:card-hover-shadow transition-all hover:-translate-y-1"
                aria-label="Open brochure preview"
              >
                <div aria-hidden="true" className="absolute inset-0 grid-pattern opacity-30" />
                <span aria-hidden="true" className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-gold" />
                <span aria-hidden="true" className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-gold" />
                <span aria-hidden="true" className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-gold" />
                <span aria-hidden="true" className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-gold" />

                <div className="relative h-full flex flex-col p-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold/15 border border-gold/30">
                      <span className="w-1 h-1 rounded-full bg-gold" aria-hidden="true" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                        Brochure
                      </span>
                    </div>
                    <FileText className="w-4 h-4 text-gold/70" aria-hidden="true" />
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                      Home Safety Invisible Grill
                    </div>
                    <div className="font-display text-xl font-bold leading-[1.1] text-primary-foreground">
                      Invisible Grill<br />
                      <span className="text-gold">& Safety Nets</span>
                    </div>
                    <div className="mt-3 text-[10px] text-primary-foreground/60 uppercase tracking-widest">
                      Lucknow · Ranchi · 2025
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/15">
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-primary-foreground/50">Format</div>
                      <div className="text-xs font-bold text-primary-foreground">PDF · 4.4 MB</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gold text-gold-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">Brochure Preview</DialogTitle>
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-gold" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  Home Safety Invisible Grill · 2025
                </div>
                <div className="font-bold text-foreground text-sm truncate">
                  Company Brochure
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={brochureAsset.url}
                download="Star-Individual-Brochure.pdf"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-gold-foreground font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                type="button"
                onClick={() => setPreviewOpen(false)}
                className="w-9 h-9 rounded-lg border border-border hover:bg-muted flex items-center justify-center text-foreground transition-colors"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-muted overflow-hidden">
            <iframe
              src={`${brochureAsset.url}#view=FitH`}
              title="Home Safety Invisible Grill brochure preview"
              className="w-full h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrochureSection;
