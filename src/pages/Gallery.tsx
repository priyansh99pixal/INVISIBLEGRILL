import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { galleryItems } from "@/data/gallery";
import LazyVideo from "@/components/LazyVideo";
import { prefetchVideo } from "@/lib/prefetchVideo";

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery — Home Safety Invisible Grill | Lucknow & Ranchi";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="container px-4">
          <div className="mb-6 md:mb-8">
            <Breadcrumbs items={[{ name: "Gallery" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <Link
              to="/#gallery"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-accent hover:text-accent/80 transition-colors mb-5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Complete Installation Gallery
            </h1>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Every project we've delivered across Lucknow &amp; Ranchi — invisible grills, safety nets and bird protection systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {galleryItems.map((item, i) => {
              const base = item.src.replace(/\.jpg$/, "");
              return (
                <button
                  key={i}
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => prefetchVideo(item.video)}
                  onFocus={() => prefetchVideo(item.video)}
                  onTouchStart={() => prefetchVideo(item.video)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg md:rounded-xl bg-muted"
                  aria-label={`View ${item.title}`}
                >
                  {item.video ? (
                    <LazyVideo
                      src={item.video}
                      poster={item.src}
                      className="w-full h-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                      ariaLabel={`${item.title} — ${item.location}`}
                    />
                  ) : (
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
                        loading={i < 6 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                        onError={(e) => (e.currentTarget.style.opacity = "0")}
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                      />
                    </picture>
                  )}
                  <span className="pointer-events-none absolute inset-0 ring-1 ring-transparent group-hover:ring-accent/50 rounded-lg md:rounded-xl transition-colors" />
                </button>
              );
            })}
          </div>

          <p className="mt-10 md:mt-14 text-center text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            {galleryItems.length} Projects · 2,000+ Verified Installations
          </p>
        </div>
      </main>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl p-0 bg-primary border-primary/50 overflow-hidden">
          {open !== null && (
            <div className="relative">
              {galleryItems[open].video ? (
                <video
                  poster={galleryItems[open].src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[85vh] object-contain bg-primary"
                >
                  <source src={galleryItems[open].video.replace(/\.mp4($|\?)/, ".webm$1")} type="video/webm" />
                  <source src={galleryItems[open].video} type="video/mp4" />
                </video>
              ) : (
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${galleryItems[open].src.replace(/\.jpg$/, "")}-800.webp 800w, ${galleryItems[open].src.replace(/\.jpg$/, "")}-1200.webp 1200w`}
                    sizes="(min-width: 768px) 900px, 100vw"
                  />
                  <img
                    src={galleryItems[open].src}
                    alt={galleryItems[open].title}
                    loading="eager"
                    decoding="async"
                    className="w-full max-h-[85vh] object-contain bg-primary"
                  />
                </picture>
              )}
              <button
                onClick={() => setOpen(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center text-primary hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
