# NOTES — Journal du projet link-in-bio de Godson

## Journal

### 2026-09-10 — Refonte de l’adaptation mobile
- Audit visuel réel en émulation stricte sur 320×568, 375×667, 390×844, 430×932 et 667×375 : aucun débordement horizontal ni erreur d’exécution.
- Toutes les cibles tactiles (dock et liens) font désormais au moins 44×44 px ; focus clavier et retour visuel au toucher ajoutés.
- Le plein écran repose maintenant sur `dvh`/`svh`, respecte les safe areas iOS et autorise un scroll vertical de secours sur les écrans trop courts ou en paysage.
- Sur 320–340 px, les 8 liens passent dans une grille stable de 2 colonnes et « YouTube — Musique » devient simplement « YouTube » pour éviter tout débordement.
- Optimisation mobile des deux effets WebGL : DPR du fond plafonné à 1,25 et échantillonnage des particules plafonné à 420 px ; qualité visuelle préservée avec moins de charge GPU.
- Accessibilité : vrai titre sémantique « Mes liens », libellés du dock et fallback statique du morphing avec `prefers-reduced-motion`.
- Build Vite validé après les changements. Les avertissements existants de résolution des variantes Geist restent non bloquants.

### 2026-06-12 — Démarrage du brainstorming
- Lecture du CLAUDE.md : page link-in-bio mobile-first, HTML/CSS/JS statique privilégié (YAGNI), liens facilement modifiables, accessibilité (contrastes, cibles tactiles ≥ 44px).
- Plugin Superpowers installé et chargé ; skill `brainstorming` invoquée avant tout code, comme demandé.
- Compagnon visuel lancé (mockups dans le navigateur, http://localhost:65455) ; Godson a demandé de se limiter à 2-3 propositions de design maximum.
- Prochaine étape : questions de clarification (contenu, identité visuelle), puis 2-3 approches, design validé, spec écrite dans `docs/superpowers/specs/`.

### 2026-06-12 — Design validé en brainstorming
- Contenu validé : nom « Godson aka Muzvn », bio « マフィアへようこそ », 8 liens perso (Instagram, Email, Snapchat, WhatsApp, X, YouTube-musique, TikTok, Facebook) + vue séparée pour le label CTN Mafia (Instagram, Email, TikTok, YouTube, Facebook) avec bouton retour.
- Direction visuelle choisie (via mockups navigateur) : **Mix « A×B »** — sombre épuré avec accents rouge #dc2626 et kanji マフィア discret en fond, **photo de profil en hero plein écran fondue dans le noir** (référence : fanbase.to), boutons rectangles arrondis avec badge plateforme + flèche.
- Godson fournit les assets : dossier `assets/photos/` (photo + logo CTN) et `assets/icons/` (vraies icônes SVG des plateformes) créés avec un README d'instructions.
- Prochaine étape : recap du design, spec dans `docs/superpowers/specs/`, puis plan d'implémentation.

### 2026-06-12 — Task 1 complétée : `links.js` créée
- Fichier `links.js` créé avec la config des liens Godson et CTN Mafia (8 + 5 liens) : objet global `CONFIG` consommé par `app.js` (Task 4).
- Revues : un `module.exports` hors spec retiré (YAGNI), logo CTN renommé `ctn-mafia-logo.png` (chemin sans espaces), commentaire `label` ajouté.
- Commits : `3de4ec2`, `a7dabd1`, `204f242`.

### 2026-06-12 — Task 2 complétée : `index.html` structurée
- Fichier `index.html` crée avec deux vues (Godson + CTN Mafia), hero plein écran, kanji en fond, nav de liens dynamique.
- Tous les IDs requis présents et uniques : `view-godson`, `hero-photo`, `title-godson`, `links-godson`, `open-ctn`, `view-ctn`, `back-godson`, `ctn-logo`, `title-ctn`, `links-ctn`.
- Caractères japonais intacts : マフィアへようこそ (titre), マフィア (kanji-bg), 組 (bouton).
- Commit : `efc15f2` (feat: structure HTML des deux vues).
- Revues : `src=""` vides retirés (requête parasite), `back-godson` renommé `back-ctn`, `aria-labelledby` sur la section CTN, flèches ←/→ en `aria-hidden` (commit `7b3235d`, plan synchronisé).
- Prochaines étapes : Task 3 (`styles.css`) et Task 4 (`app.js`).

### 2026-06-12 — Tasks 3 & 4 complétées : la page est fonctionnelle
- `styles.css` (210 lignes) : palette Mix A×B, héro fondu, badges couleurs de marque (+ bordure subtile pour X/TikTok), animations, `prefers-reduced-motion`, cibles ≥ 44px. Commit `f80130c`.
- Revue T3 : kanji clampé au héro (`max/min` au lieu de `58vh` sec), contraste AA du hover CTN corrigé (`#c72020`). Commit `b73dd5e`.
- `app.js` (78 lignes) : rendu des 13 boutons depuis `CONFIG`, bascule de vues avec focus, fallbacks icône→lettre et photo→dégradé. Commit `1cc6c6e`.
- Revue T4 : approuvée ; refs DOM consolidées + `focus({ preventScroll: true })`. Commit `e1c760b`.
- Toutes les tâches passent par : implémentation (sous-agent) → revue conformité spec → revue qualité → correctifs. Plan tenu en sync à chaque déviation.
- **Checkpoint en cours : validation visuelle par Godson, puis T5 (vraies URLs + checklist finale).**

### 2026-06-12 — Task 5 : vraies URLs branchées
- Les 13 liens pointent vers les vrais comptes (paramètres de tracking retirés des URLs partagées). Emails en `mailto:`.
- Poids Noto Sans JP corrigés dans la requête Google Fonts (400;700 — le 400 était utilisé sans être chargé, le 500 chargé sans être utilisé).
- Reste à faire : vérification visuelle finale par Godson (liens, mobile, Lighthouse) puis revue d'ensemble et merge.

### 2026-06-12 — Projet clôturé : page en ligne 🎉
- Revue finale d'ensemble : ✅ prête à merger (couverture spec complète, cohérence inter-fichiers, contrastes AA vérifiés numériquement).
- Mergé dans `main` (commit `1e165ea`), branche `feature/link-in-bio` supprimée.
- Poussé sur GitHub : dépôt créé `link_in_bio_personaliser`, renommé ensuite par Godson en **`All_my_links`** → https://github.com/BigMuzvn/All_my_links
- **GitHub Pages actif : https://bigmuzvn.github.io/All_my_links/** — vérifié en ligne (titre, bio japonaise, bouton CTN MAFIA présents). Godson confirme tout fonctionnel.
- Pour modifier les liens plus tard : éditer `links.js` puis `git push` — la page se met à jour automatiquement.

### 2026-09-04 — Deux tentatives de refonte visuelle, puis pivot vers React
- **Tentative 1** : Godson fournit un mockup "Muzvn. Développeur & créateur" (rochers 3D, verre, anneaux néon, glassmorphism). Implémentée avec visuels générés par IA (Higgsfield) intégrés en `mix-blend-mode: screen`, toggle clair/sombre, badges à anneau néon par marque. **Jugée trop chargée par Godson à la vue du rendu réel** — abandonnée et revert complet (`git checkout`) avant tout commit.
- **Tentative 2** : version simplifiée inspirée de deux autres références (avatar cerclé + halo doux, tuiles d'icônes pleine couleur, cartes titre/description, flèche neutre). Toujours en HTML/CSS/JS vanilla. Fonctionnelle et jugée correcte, mais **Godson décide finalement de ne pas se contenter d'un résultat "par flemme"** et veut une direction 100% originale, construite à la main avec lui section par section — abandon avant commit également.
- **Décision finale** : passage à **Vite + React**, avec Tailwind CSS + Framer Motion comme socle, et des composants Aceternity UI copiés/adaptés au fil du build (ce ne sont pas des packages npm mais des snippets à intégrer un par un). Le contenu de base (13 liens Godson + CTN Mafia) reste, mais la mise en forme est repensée de zéro ; d'autres liens/sections pourront s'ajouter en cours de route.
- Ce choix va à l'encontre du YAGNI initial du `CLAUDE.md` (page statique suffisante) — décision explicite et assumée par Godson, qui veut un résultat "hors du commun", pas un template. `CLAUDE.md` mis à jour en conséquence.
- Godson va construire le design pas à pas avec des croquis, plutôt que de valider un mockup figé en amont — donc pas de spec écrite formelle, on avance section par section.
- **Socle technique posé** (aucun style pour l'instant, juste la plomberie) :
  - Scaffold Vite + React (JS) à la racine, migration de `links.js` en module ES (`src/data/links.js`), assets déplacés vers `public/assets/` (servis via un helper `asset()` qui préfixe avec `import.meta.env.BASE_URL`, nécessaire car le site vit sous `/All_my_links/`).
  - Ancien site statique (`index.html`/`app.js`/`styles.css`/`links.js` à la racine) supprimé — récupérable dans l'historique git si besoin.
  - `npm run build` vérifié en local (build + preview + capture Playwright) : aucune erreur console, tous les liens et l'avatar s'affichent.
  - Déploiement : `.github/workflows/deploy.yml` ajouté (build + déploie sur GitHub Pages à chaque push sur `main`). **Action requise côté Godson** : dans les paramètres GitHub du repo → Settings → Pages → Build and deployment → Source, sélectionner "GitHub Actions" (au lieu de "Deploy from a branch") pour que ce nouveau pipeline prenne le relais de l'ancien déploiement statique.
- Découverte en cours de route : de nouvelles icônes (`github.png`, `portfolio.png`, `twitter.png`, etc.) étaient déjà présentes dans `assets/icons/` sans être utilisées dans la config — probablement ajoutées par Godson en prévision de futurs liens. Question posée à Godson, pas encore intégrées.
- Prochaine étape : Godson apporte un croquis/une direction, on construit la première section ensemble.

### 2026-09-04 — Première section : le fond animé (nuages Aceternity)
- Godson fournit une image de référence (ciel animé, nuages qui défilent) + le snippet Aceternity `cloud-shader-demo` (WebGL brut, pas de Three.js).
- Mise en place : alias `@/*` → `src/*` (vite.config.js + jsconfig.json), puis `npx shadcn@latest init --template vite` pour pouvoir installer des composants Aceternity via `npx shadcn add @aceternity/...`.
- **Découverte en cours de route** : `shadcn init` a généré une config pensée pour Tailwind v4 (variables CSS + `@theme inline`), alors que le projet avait Tailwind v3 installé à l'étape précédente → erreurs `border-border does not exist`. Résolu en migrant vers **Tailwind CSS v4** (`@tailwindcss/postcss`, suppression de `tailwind.config.js` devenu inutile, ajout de l'`@import "tailwindcss"` et du bloc `@theme inline` manquants dans `src/index.css` — `shadcn init` ne les avait pas ajoutés car il s'attendait à un `index.css` déjà généré par un template Vite standard, pas le nôtre écrit à la main).
- `CloudShader` branché en plein écran (`h-screen w-screen`, `overflow: hidden` sur html/body/#root) : correspond au rendu voulu par Godson, vérifié en dev et en build de production via capture Playwright (1440×900, aucune erreur console).
- Contenu du profil (avatar, liens) temporairement retiré de `App.jsx` le temps de valider le fond seul — sera reposé par-dessus à la prochaine étape avec Godson.
- Nouvelles icônes (`github.png`, `portfolio.png`, `twitter.png`, etc.) confirmées par Godson : ajoutées par lui-même, seront utilisées plus tard.
- Prochaine étape : poser le profil (avatar, nom, liens) par-dessus le fond animé, section par section avec Godson.

### 2026-09-04 — Deuxième section : la nav flottante (floating dock)
- Ajout du composant Aceternity `@aceternity/floating-dock-demo` (`src/components/ui/floating-dock.jsx`), basé sur `motion` (le nouveau nom de `framer-motion` — `framer-motion` retiré du projet car jamais utilisé directement, pour éviter les deux libs en double).
- Nav personnalisée dans `src/components/social-dock.jsx` : 5 liens (GitHub, X, Email, Instagram, Portfolio) avec les vraies icônes PNG de Godson (`public/assets/icons/github.png`, `twitter.png`, `email.png`, `insta.png`, `portfolio.png`), pas les icônes Tabler du snippet d'origine.
- Liens : GitHub → `https://github.com/BigMuzvn`, X et Instagram réutilisent les URLs déjà présentes dans `src/data/links.js`, Email → `mailto:godsonmailperso@gmail.com`, Portfolio → lien mort (`#`) volontaire en attendant que Godson ait un portfolio en ligne.
- Petit ajout au composant `floating-dock.jsx` (pas dans le snippet Aceternity d'origine) : support de `target`/`rel` par lien, pour que GitHub/X/Instagram s'ouvrent dans un nouvel onglet.
- Positionnement : fixe, centré en haut, avec marge (`top-10`/`md:top-14`) pour ne pas coller au bord de l'écran, par-dessus le fond animé.
- Vérifié en dev + build de production (aucune erreur console, capture Playwright avec et sans survol pour valider l'effet magnify).
- Prochaine étape : Godson amène le prochain élément (avatar/section suivante) à poser sur le fond.

### 2026-09-04 — Troisième section : le clavier qui tape (typing keyboard)
- Composant hors Aceternity cette fois : registre communautaire **VengeanceUI** (`npx shadcn add <url raw GitHub>` — le CLI shadcn accepte n'importe quelle URL de registre, pas seulement `@aceternity/...`). Fichier généré : `src/components/ui/typing-keyboard.jsx`, pur CSS 3D (transforms), aucune dépendance supplémentaire.
- Wrapper `src/components/intro-typing.jsx` : texte personnalisé "Salut, je suis Godson aka Muzvn." (au lieu du texte de démo par défaut), `scale=0.6` pour bien s'intégrer sous la nav.
- Positionné en bas à gauche de la nav flottante (`fixed left-6 top-36` / `md:left-16 md:top-40`), avec un espacement qui laisse clairement respirer les deux éléments.
- Vérifié en dev + build de production (aucune erreur console, capture Playwright pendant l'animation de frappe).
- Prochaine étape : Godson amène le prochain élément à intégrer.

### 2026-09-05 — Scroll accepté, Partie 3 branchée, clavier remplacé par un morph text
- Après plusieurs allers-retours à essayer de tout faire tenir dans un écran sans défilement (nav/clavier/particules/liens qui se marchaient dessus ou disparaissaient selon la taille de fenêtre), **Godson décide d'accepter le défilement de page**. Ça résout d'un coup tous les problèmes de place et permet d'agrandir confortablement chaque élément.
- Nouveau comportement : le fond de nuages reste fixe (`position: fixed`, en arrière-plan), tout le reste défile par-dessus, la nav flottante reste fixe en haut (toujours accessible).
- **Partie 3 ajoutée** : composant `@aceternity`... non — cette fois `staggered-grid` vient du registre communautaire **VengeanceUI** (comme `typing-keyboard` et `interactive-particles`). Grille de cartes animées au scroll (GSAP ScrollTrigger, fonctionne nativement avec le vrai scroll de la page, pas besoin de carte à défilement séparé comme envisagé initialement). Icônes génériques Github/Slack/Twitter du composant remplacées par les vraies icônes de marque (Instagram, TikTok, YouTube, Snapchat, WhatsApp, Facebook, X) ; 3 cartes interactives au centre (Instagram avec la vraie photo, CTN Mafia, TikTok). Dépendance manquante (`imagesloaded`) installée manuellement, `react-icons` retiré (plus utilisé après le remplacement des icônes).
- **Clavier tapant retiré entièrement** (fichiers supprimés : `intro-typing.jsx`, `ui/typing-keyboard.jsx`) et remplacé par un composant **Morph Text** (VengeanceUI) : le nom de Godson défile en boucle avec un effet de flou/morphing — "Godson" → "Lemaye" → "Muzvn" — sous-texte `マフィアへようこそ` conservé pour la continuité de marque.
- Nav repositionnée plus bas (`top-14`/`md:top-16`) pour que l'infobulle au survol (nom de chaque lien) ne soit plus coupée en haut d'écran.
- Vérifié : build de prod OK, aucune erreur console, animation de la grille au scroll confirmée par capture d'écran séquencée, cycle du morph text confirmé sur plusieurs tours.
- Toujours en attente : nettoyer l'espace vide en bas de la section Projets (probablement lié à l'`aspect-[1.1]` fixe du composant), et la fameuse passe mobile-first repoussée depuis le début.

### 2026-09-05 — Passe mobile-first, Partie 3 mise en pause
- Godson choisit de mettre la section Projets (staggered grid) en pause plutôt que de la retirer : commentée dans `App.jsx` (code intact), et retour à une page plein écran sans défilement comme avant, maintenant sans clavier (remplacé par le morph text la fois précédente).
- **Passe mobile-first enfin faite** : les largeurs fixes en pixels (`w-[700px]` pour les particules, etc.) sont devenues relatives (`w-[92vw] max-w-[700px]`, `aspect-[4.2/1]` pour garder le bon ratio de l'image sans la couper), la police du nom a un plancher plus bas (`clamp(1.6rem, 9vw, 6rem)`), les pilules de liens ont une taille réduite sur petit écran. Vérifié sans erreur sur iPhone SE, iPhone 12, iPhone Pro Max et petit Android (aucun débordement horizontal, tout tient sans scroll).
- **Bug trouvé sur la nav mobile** : le composant Aceternity `floating-dock` a un mode « replié » pensé pour une nav en bas d'écran (le menu s'ouvre vers le haut). Comme notre nav est en haut, le menu s'ouvrait hors-écran — un seul lien restait visible. Godson a tranché : plutôt que de repositionner un menu dépliant, **simplifier** en affichant tous les icônes en permanence (pas de repli), sur mobile comme sur desktop — plus simple et plus fiable. Composant simplifié en conséquence (retrait de la variante mobile et de la dépendance `@tabler/icons-react`, plus utilisée).

## Messages pour Claude Code

(vide pour l'instant)
