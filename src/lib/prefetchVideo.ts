const prefetched = new Set<string>();

/**
 * Warm the browser cache for a video URL. Safe to call repeatedly — each URL
 * is only fetched once per session. Uses <link rel="prefetch"> when supported
 * (respects Save-Data + connection hints) and falls back to a low-priority fetch.
 */
export function prefetchVideo(url?: string) {
  if (!url || prefetched.has(url)) return;
  if (typeof document === "undefined") return;

  const urls = url.endsWith(".mp4") ? [url.replace(/\.mp4($|\?)/, ".webm$1"), url] : [url];

  for (const videoUrl of urls) try {
    if (prefetched.has(videoUrl)) continue;
    prefetched.add(videoUrl);
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "video";
    link.href = videoUrl;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  } catch {
    // Fallback: low-priority fetch that populates the HTTP cache.
    fetch(videoUrl, { mode: "no-cors", credentials: "omit" }).catch(() => {});
  }
}
