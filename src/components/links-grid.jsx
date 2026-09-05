import { CONFIG } from "@/data/links.js";
import { asset } from "@/utils/asset.js";

// Grille de liens : même langage "glass" que la nav flottante, pour que
// les deux se répondent visuellement au lieu d'être des styles isolés.
export function LinksGrid() {
  return (
    <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-3">
      {CONFIG.godson.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener" : undefined}
          className="flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3.5 py-2.5 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur-md transition hover:bg-white/85 hover:shadow-md sm:gap-2.5 sm:px-5 sm:py-3 sm:text-sm"
        >
          <img src={asset(link.icon)} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
