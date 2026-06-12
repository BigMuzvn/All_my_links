# Spec — Page link-in-bio de Godson

**Date :** 2026-06-12
**Statut :** validée par Godson (brainstorming avec mockups navigateur)
**Référence visuelle :** mockup `rendu-haute-fidelite-v2.html` (session `.superpowers/brainstorm/586-1781269353/`), inspiration fanbase.to

## Objectif

Page web statique type Linktree / fanbase.to pour Godson : photo, identité, liens vers ses réseaux (qui servent de contacts pro) et vers son label CTN Mafia. Ouverte principalement depuis Instagram/TikTok sur mobile.

## Contenu

### Vue principale — Godson
- **Photo héro** : `assets/photos/muzvnpic.jpeg`, plein écran en haut (~55-58 % de la hauteur), fondue dans le fond noir via dégradé.
- **Nom** (par-dessus le bas de la photo) : « Godson **aka** Muzvn » — « aka » en rouge.
- **Bio** : « マフィアへようこそ » en rouge, sous le nom.
- **Liens**, dans cet ordre :
  1. Instagram
  2. Email (`mailto:`)
  3. Snapchat
  4. WhatsApp (`https://wa.me/…`)
  5. X
  6. YouTube — Musique
  7. TikTok
  8. Facebook
- **Bouton « CTN MAFIA 組 → »** : bouton rouge dégradé, ouvre la vue CTN Mafia.

### Vue secondaire — CTN Mafia (label)
- **Header** : logo `assets/photos/ctn-mafia-logo.png` centré avec halo rouge, fondu dans le noir ; nom « CTN MAFIA » ; sous-titre « Label · マフィアへようこそ ».
- **Bouton retour** flottant en haut à gauche (pilule semi-transparente « ← Retour »).
- **Liens**, dans cet ordre : Instagram, Email, TikTok, YouTube, Facebook.

Les URLs réelles seront fournies par Godson ; en attendant, placeholders `#` clairement signalés dans la config.

## Design visuel (Mix « A×B » validé)

- **Palette** : fond `#0e0e10`, cartes `#1c1c1f`, texte `#f5f5f7`, texte secondaire `#98989d`, accent rouge `#dc2626` (foncé `#7f1d1d`).
- **Typo** : Inter (texte) + Noto Sans JP (kanji), Google Fonts, une seule requête.
- **Filigrane** : kanji « マフィア » vertical, rouge très transparent, sous le héro à droite.
- **Boutons-liens** : rectangles arrondis (~16px), hauteur ≥ 52px, badge icône de plateforme à gauche (38×38, couleur de marque), libellé, flèche ronde à droite. Ombre douce, hover/active animés (translation/scale).
- **Animations** : fade-up à l'apparition de chaque vue, transitions 150ms sur les boutons. Respecter `prefers-reduced-motion` (désactiver les animations).
- **Icônes** : vrais logos fournis par Godson dans `assets/icons/` — SVG monochromes (style simpleicons) : `instagram.svg`, `gmail.svg` (pour Email), `snapchat.svg`, `whatsapp.svg`, `x.svg`, `youtube.svg`, `tiktok.svg`, `facebook.svg`. Chaque badge prend la **couleur logique de la marque** (Instagram dégradé, Gmail rouge `#EA4335`, Snapchat jaune `#FFFC00` avec icône noire, WhatsApp vert `#25D366`, X noir, YouTube rouge `#FF0000`, TikTok noir, Facebook bleu `#1877F2`), l'icône étant recolorée en blanc (ou noir sur fond clair) via filtre CSS sur `<img>` (`brightness(0)` ± `invert(1)`) — technique compatible `file://` qui permet aussi le fallback « lettre » via `onerror`. Les couleurs sont définies dans `links.js`.

## Architecture technique

Statique pur, zéro framework, zéro build (YAGNI, conforme CLAUDE.md).

```
index.html      — structure des deux vues
styles.css      — tout le style
app.js          — rendu des liens depuis la config + bascule de vues
links.js        — LA config à éditer (identité, bios, liens, chemins d'assets)
assets/
├── photos/     — godson.jpg, ctn-mafia.png
└── icons/      — instagram.svg, email.svg, … (8 plateformes ; la vue CTN réutilise les mêmes icônes)
```

- **`links.js`** : un objet JS global clairement commenté (ex. `const CONFIG = { godson: { name, bio, links: [{ label, url, icon }] }, ctn: {…} }`). Choisi plutôt que `links.json` + `fetch` pour fonctionner aussi en ouvrant `index.html` en double-clic (pas de serveur requis).
- **Bascule de vues** : les deux vues dans le même HTML, toggle par classe via JS, sans rechargement ni lib de routing. Au changement de vue : scroll en haut + focus déplacé sur le titre de la vue (accessibilité).
- **Rendu des liens** : `app.js` génère les boutons depuis `CONFIG` pour que l'ajout/retrait d'un lien ne demande que l'édition de `links.js`.
- **Robustesse** : si une icône manque, le badge affiche la première lettre de la plateforme ; si la photo manque, le héro garde le fond dégradé sombre (la page reste utilisable).

## Accessibilité & performance

- Contraste AA minimum pour textes et boutons (rouge `#dc2626` réservé aux éléments larges/décoratifs ; le texte des boutons est blanc sur carte sombre).
- Cibles tactiles ≥ 44px (boutons 52px+, bouton retour 44px+).
- `alt` sur photo et logo ; icônes décoratives en `aria-hidden` avec libellé textuel à côté.
- Navigation clavier complète : boutons réels (`<a>`/`<button>`), focus visible, focus géré à la bascule de vue.
- Page légère : pas de JS externe, une requête Google Fonts (`display=swap`), images servies aux bonnes dimensions ; viewport mobile-first, mise en page max-width ~430px centrée sur desktop.

## Vérification

Pas de logique assez complexe pour du TDD outillé ; vérification manuelle systématique avant de déclarer terminé :
- [ ] Les 8 + 5 liens s'affichent dans le bon ordre depuis `links.js`
- [ ] Bascule Godson ↔ CTN Mafia (clic + clavier) avec retour
- [ ] Rendu mobile (~390px) et desktop, fondu photo correct
- [ ] Icône manquante → fallback lettre ; photo manquante → page utilisable
- [ ] Lighthouse mobile : accessibilité ≥ 95, perf ≥ 90
- [ ] `prefers-reduced-motion` désactive les animations

## Hors périmètre (plus tard si besoin)

- Hébergement/déploiement (la page sera prête pour GitHub Pages/Netlify tel quel)
- Lien profond vers la vue CTN (`#ctn`), analytics, partage Open Graph avancé
