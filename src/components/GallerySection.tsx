import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, ShieldCheck, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import LazyVideo from "@/components/LazyVideo";
import { prefetchVideo } from "@/lib/prefetchVideo";

const items = galleryItems.slice(0, 8);

const GallerySection = () => {
  const [open, setOpen] = useState<number | null>(null);


  return (
    <section id="gallery" className="relative py-14 md:py-20 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Signature Installations
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            A curated selection of invisible grills, safety nets and bird protection projects delivered across Lucknow &amp; Ranchi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              onMouseEnter={() => prefetchVideo(item.video)}
              onFocus={() => prefetchVideo(item.video)}
              onTouchStart={() => prefetchVideo(item.video)}
              className="group relative text-left rounded-xl md:rounded-2xl overflow-hidden bg-card border border-border/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 block w-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                {item.video ? (
                  <LazyVideo
                    src={item.video}
                    poster={item.src}
                    className="w-full h-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    ariaLabel={`${item.title} — ${item.location}`}
                  />
                ) : (() => {
                  const base = item.src.replace(/\.jpg$/, "");
                  return (
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${base}-400.webp 400w, ${base}-800.webp 800w, ${base}-1200.webp 1200w`}
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 32vw, 48vw"
                      />
                      <img
                        src={item.src}
                        alt={`${item.title} — ${item.location}`}
                        width="800"
                        height="1000"
                        loading={i < 4 ? "eager" : "lazy"}
                        fetchPriority={i < 2 ? "high" : "auto"}
                        decoding="async"
                        draggable={false}
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0";
                        }}
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      />
                    </picture>
                  );
                })()}

                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />

                <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full bg-background/95 backdrop-blur text-[9px] md:text-[10px] font-bold tracking-[0.12em] uppercase text-primary border border-border/40">
                    {item.category}
                  </span>
                  <span className="hidden md:flex w-8 h-8 rounded-full bg-accent text-accent-foreground items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <div className="flex items-center gap-1 text-primary-foreground/85 text-[10px] md:text-[11px] font-medium mb-1">
                    <MapPin className="w-3 h-3" />
                    <span className="tracking-wide truncate">{item.location}</span>
                  </div>
                  <h3 className="font-display text-sm md:text-lg font-bold text-primary-foreground leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 bg-card">
                <div className="flex items-center gap-1.5 min-w-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={2.2} />
                  <span className="text-[10px] md:text-[12px] font-semibold text-foreground/85 tracking-wide truncate">
                    {item.spec}
                  </span>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl ring-1 ring-transparent group-hover:ring-accent/40 transition-colors duration-500" />
            </button>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex flex-col items-center gap-6">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm md:text-base tracking-wide shadow-lg hover:shadow-2xl hover:bg-primary/90 transition-all"
          >
            View All Gallery
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </span>
          </Link>
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            <span className="w-8 h-px bg-accent" />
            2,000+ Verified Installations
            <span className="w-8 h-px bg-accent" />
          </div>
        </div>

      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl p-0 bg-primary border-primary/50 overflow-hidden">
          {open !== null && (
            <div className="relative">
              {items[open].video ? (
                <video
                  poster={items[open].src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[80vh] object-contain bg-primary"
                >
                  <source src={items[open].video.replace(/\.mp4($|\?)/, ".webm$1")} type="video/webm" />
                  <source src={items[open].video} type="video/mp4" />
                </video>
              ) : (
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${items[open].src.replace(/\.jpg$/, "")}-800.webp 800w, ${items[open].src.replace(/\.jpg$/, "")}-1200.webp 1200w`}
                    sizes="(min-width: 768px) 900px, 100vw"
                  />
                  <img
                    src={items[open].src}
                    alt={items[open].title}
                    loading="eager"
                    decoding="async"
                    className="w-full max-h-[80vh] object-contain bg-primary"
                  />
                </picture>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary via-primary/85 to-transparent">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
                  {items[open].category}
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mt-1">
                  {items[open].title}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-primary-foreground/80 text-xs">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{items[open].location}</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" />{items[open].spec}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/95 text-primary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
