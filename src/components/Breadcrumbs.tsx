import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export type Crumb = { name: string; href?: string };

type Props = { items: Crumb[] };

const BASE = "https://pigeon-palace-net.lovable.app";

const Breadcrumbs = ({ items }: Props) => {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${BASE}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-xs md:text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              )}
              {isLast || !c.href ? (
                <span
                  className="font-semibold text-foreground"
                  aria-current={isLast ? "page" : undefined}
                >
                  {c.name}
                </span>
              ) : (
                <Link
                  to={c.href}
                  className="inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
