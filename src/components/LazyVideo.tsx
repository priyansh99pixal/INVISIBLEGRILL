import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlayOnVisible?: boolean;
  ariaLabel?: string;
}

/**
 * Mobile-safe lazy video:
 * - Always renders the <video> element with a poster so mobile browsers show
 *   something immediately (iOS Safari won't render posters reliably if the
 *   element is mounted late).
 * - preload="none" keeps the network idle until the tile scrolls into view.
 * - IntersectionObserver upgrades preload and calls .play() only when visible,
 *   which respects iOS/Android autoplay rules (muted + playsInline + user-gesture-free).
 */
export const LazyVideo = ({
  src,
  poster,
  className,
  autoPlayOnVisible = true,
  ariaLabel,
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const webmSrc = src.replace(/\.mp4($|\?)/, ".webm$1");

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("preload", "auto");
      if (autoPlayOnVisible) el.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.setAttribute("preload", "metadata");
            if (autoPlayOnVisible) el.play().catch(() => {
              setIsVideoVisible(false);
            });
          } else {
            el.pause();
          }
        }
      },
      { rootMargin: "200px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlayOnVisible]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          loading="eager"
          decoding="async"
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isVideoVisible && !hasVideoError ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        {...({ "webkit-playsinline": "true" } as Record<string, string>)}
        preload="none"
        aria-label={ariaLabel}
        onCanPlay={() => setIsVideoVisible(true)}
        onPlaying={() => setIsVideoVisible(true)}
        onError={() => {
          setHasVideoError(true);
          setIsVideoVisible(false);
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isVideoVisible && !hasVideoError ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg ring-1 ring-border/60">
          <Play className="h-4 w-4 translate-x-0.5 fill-current" aria-hidden="true" />
        </span>
      </span>
    </div>
  );
};

export default LazyVideo;
