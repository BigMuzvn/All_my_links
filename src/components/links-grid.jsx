import { CONFIG } from "@/data/links.js";
import { asset } from "@/utils/asset.js";

// Grille de liens : même langage "glass" que la nav flottante, pour que
// les deux se répondent visuellement au lieu d'être des styles isolés.
export function LinksGrid() {
  return (
    <div className="links-grid flex w-full max-w-3xl flex-wrap items-center justify-center gap-1.5 sm:gap-3">
      {CONFIG.godson.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener" : undefined}
          aria-label={link.label}
          className="link-pill flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-2 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur-md transition hover:bg-white/90 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:scale-[0.98] active:bg-white/90 sm:gap-2.5 sm:px-5 sm:py-3 sm:text-sm"
        >
          <img src={asset(link.icon)} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className={link.mobileLabel ? "max-[340px]:hidden" : undefined}>
            {link.label}
          </span>
          {link.mobileLabel ? (
            <span className="hidden max-[340px]:inline">{link.mobileLabel}</span>
          ) : null}
        </a>
      ))}
    </div>
  );
}
