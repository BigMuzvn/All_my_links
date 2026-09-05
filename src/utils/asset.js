// Les fichiers dans public/ sont servis tels quels, à la racine du site.
// Sur GitHub Pages le site vit sous /All_my_links/ (cf. `base` dans vite.config.js),
// donc on préfixe avec BASE_URL pour que les chemins marchent en dev comme en prod.
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
