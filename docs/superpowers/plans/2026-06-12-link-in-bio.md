# Link-in-bio de Godson — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Page statique link-in-bio à deux vues (Godson / label CTN Mafia), photo héro fondue, boutons-liens avec icônes aux couleurs de marque, pilotée par un fichier de config `links.js`.

**Architecture:** Quatre fichiers à la racine (`index.html`, `styles.css`, `app.js`, `links.js`) + assets fournis dans `assets/`. Les deux vues vivent dans le même HTML ; `app.js` génère les boutons-liens depuis `CONFIG` (défini dans `links.js`) et gère la bascule de vue avec gestion du focus. Aucun framework, aucun build, fonctionne en ouvrant `index.html` directement (`file://`).

**Tech Stack:** HTML5, CSS3 (custom properties, `prefers-reduced-motion`), JavaScript vanilla (ES6, DOM API). Google Fonts (Inter + Noto Sans JP). Spec de référence : `docs/superpowers/specs/2026-06-12-link-in-bio-design.md`.

**Vérification :** spec validée sans framework de test (logique triviale) — chaque tâche se termine par une vérification manuelle dans le navigateur avec résultat attendu explicite. Checkpoint visuel avec Godson après la Tâche 4.

---

### Task 1: Config `links.js`

**Files:**
- Create: `links.js`

- [ ] **Step 1: Écrire le fichier de config complet**

```js
// ============================================================
// CONFIG — C'EST ICI QUE TU MODIFIES TES INFOS.
// Remplace chaque url: "#" par ta vraie URL :
//   - Email     → "mailto:ton@email.com"
//   - WhatsApp  → "https://wa.me/33XXXXXXXXX" (numéro sans + ni espaces)
//   - Les autres → l'URL complète de ton profil
// Pour ajouter/retirer/réordonner un lien : édite simplement la liste.
// color = fond du badge (couleur officielle de la marque)
// dark: true = icône noire (pour les fonds clairs comme Snapchat)
// ============================================================

const IG_GRADIENT =
  "radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";

const CONFIG = {
  godson: {
    name: "Godson",
    aka: "Muzvn",
    bio: "マフィアへようこそ",
    photo: "assets/photos/muzvnpic.jpeg",
    links: [
      { label: "Instagram",         url: "#", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",             url: "#", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "Snapchat",          url: "#", icon: "assets/icons/snapchat.svg",  color: "#FFFC00",   dark: true  },
      { label: "WhatsApp",          url: "#", icon: "assets/icons/whatsapp.svg",  color: "#25D366",   dark: false },
      { label: "X",                 url: "#", icon: "assets/icons/x.svg",         color: "#000000",   dark: false },
      { label: "YouTube — Musique", url: "#", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "TikTok",            url: "#", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "Facebook",          url: "#", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
  ctn: {
    name: "CTN MAFIA",
    sub: "Label · マフィアへようこそ",
    logo: "assets/photos/CTN Mafia logo 2.0N.png",
    links: [
      { label: "Instagram", url: "#", icon: "assets/icons/instagram.svg", color: IG_GRADIENT, dark: false },
      { label: "Email",     url: "#", icon: "assets/icons/gmail.svg",     color: "#EA4335",   dark: false },
      { label: "TikTok",    url: "#", icon: "assets/icons/tiktok.svg",    color: "#010101",   dark: false },
      { label: "YouTube",   url: "#", icon: "assets/icons/youtube.svg",   color: "#FF0000",   dark: false },
      { label: "Facebook",  url: "#", icon: "assets/icons/facebook.svg",  color: "#1877F2",   dark: false },
    ],
  },
};
```

- [ ] **Step 2: Vérifier la syntaxe**

Run (PowerShell) : `node -e "const fs=require('fs');eval(fs.readFileSync('links.js','utf8'));console.log(CONFIG.godson.links.length, CONFIG.ctn.links.length)"`
Expected: `8 5`
(Si Node n'est pas installé : sauter — la vérification navigateur de la Tâche 4 couvrira la syntaxe.)

- [ ] **Step 3: Commit**

```powershell
git add links.js && git commit -m "feat: config des liens (Godson + CTN Mafia)"
```

---

### Task 2: Structure `index.html`

**Files:**
- Create: `index.html`

- [ ] **Step 1: Écrire le HTML complet**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Godson aka Muzvn — マフィアへようこそ</title>
  <meta name="description" content="Tous les liens de Godson aka Muzvn et du label CTN Mafia : réseaux, musique, contact.">
  <meta name="theme-color" content="#0e0e10">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Noto+Sans+JP:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="phone">

    <!-- ===== VUE GODSON ===== -->
    <main class="view" id="view-godson">
      <header class="hero">
        <img id="hero-photo" alt="Photo de Godson">
        <div class="fade" aria-hidden="true"></div>
        <div class="identity">
          <h1 class="name" id="title-godson" tabindex="-1"></h1>
          <p class="bio" lang="ja"></p>
        </div>
      </header>
      <div class="kanji-bg" aria-hidden="true">マフィア</div>

      <div class="content">
        <nav class="links" id="links-godson" aria-label="Liens de Godson"></nav>
        <button class="btn btn-ctn" id="open-ctn">CTN MAFIA <span class="jp" lang="ja">組</span> <span aria-hidden="true">→</span></button>
        <p class="footer">© 2026 Godson · Muzvn</p>
      </div>
    </main>

    <!-- ===== VUE CTN MAFIA ===== -->
    <section class="view hidden" id="view-ctn" aria-labelledby="title-ctn">
      <header class="hero-ctn">
        <button class="back" id="back-ctn"><span aria-hidden="true">←</span> Retour</button>
        <img class="logo-ctn" id="ctn-logo" alt="Logo CTN Mafia">
        <h2 class="ctn-name" id="title-ctn" tabindex="-1"></h2>
        <p class="ctn-sub"></p>
        <div class="fade" aria-hidden="true"></div>
      </header>

      <div class="content">
        <nav class="links" id="links-ctn" aria-label="Liens de CTN Mafia"></nav>
        <p class="footer">© 2026 CTN Mafia</p>
      </div>
    </section>

  </div>

  <script src="links.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

Notes : les textes (nom, bio, sous-titre) et les `src` des images sont injectés par `app.js` depuis `CONFIG` — un seul endroit à éditer. Les titres ont `tabindex="-1"` pour recevoir le focus à la bascule de vue.

- [ ] **Step 2: Vérifier dans le navigateur**

Run : `Invoke-Item index.html`
Expected: page noire quasi vide (styles/scripts pas encore créés → 404 en console, normal). Aucune erreur de parsing HTML.

- [ ] **Step 3: Commit**

```powershell
git add index.html && git commit -m "feat: structure HTML des deux vues"
```

---

### Task 3: Styles `styles.css`

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Écrire le CSS complet**

```css
/* ===== Palette (spec : Mix A×B) ===== */
:root {
  --bg: #0e0e10;
  --card: #1c1c1f;
  --card-hover: #26262a;
  --text: #f5f5f7;
  --muted: #98989d;
  --red: #dc2626;
  --red-dark: #7f1d1d;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.phone {
  width: 100%;
  max-width: 430px;
  position: relative;
}

/* ===== Vues & animation d'entrée ===== */
.view { animation: fadeUp .45s ease both; }
.view.hidden { display: none; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== Héro : photo fondue ===== */
.hero {
  position: relative;
  width: 100%;
  height: 58vh;
  min-height: 380px;
  max-height: 560px;
  overflow: hidden;
  background: linear-gradient(180deg, #1a1a1d, var(--bg)); /* visible si la photo manque */
}
.hero img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.hero .fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(14,14,16,0) 0%,
    rgba(14,14,16,0) 45%,
    rgba(14,14,16,.55) 72%,
    var(--bg) 98%);
}
.hero .identity { position: absolute; left: 22px; right: 22px; bottom: 10px; }
.name {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: .3px;
  text-shadow: 0 2px 14px rgba(0,0,0,.7);
  outline: none;
}
.name .aka { color: var(--red); font-weight: 600; font-size: 21px; }
.bio {
  margin-top: 4px;
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--red);
  font-size: 15px;
  letter-spacing: 4px;
  text-shadow: 0 1px 10px rgba(0,0,0,.8);
}

/* ===== Filigrane kanji ===== */
.kanji-bg {
  position: absolute;
  right: 8px;
  top: max(380px, min(58vh, 560px)); /* suit le min/max-height du héro */
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 100px;
  font-weight: 700;
  color: rgba(220, 38, 38, 0.05);
  writing-mode: vertical-rl;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

/* ===== Liste de liens ===== */
.content { padding: 22px 22px 60px; position: relative; }
.links { display: flex; flex-direction: column; gap: 12px; }

.btn {
  display: flex; align-items: center; gap: 14px;
  width: 100%;
  background: var(--card);
  border: 1px solid #28282c;
  border-radius: 16px;
  padding: 13px 16px;
  min-height: 56px;            /* spec : cibles tactiles ≥ 44px */
  color: var(--text);
  text-decoration: none;
  font-family: inherit;
  font-size: 15px; font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,.35);
  transition: transform .15s ease, background .15s ease, border-color .15s ease;
  cursor: pointer;
}
.btn:hover { background: var(--card-hover); border-color: #3a3a3e; transform: translateY(-2px); }
.btn:active { transform: scale(.97); }
.btn:focus-visible { outline: 2px solid var(--red); outline-offset: 2px; }
.btn .label { flex: 1; text-align: left; }
.btn .go {
  width: 34px; height: 34px; border-radius: 50%;
  background: #2e2e33; color: #cfcfd4;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
}

/* ===== Badges d'icônes (couleurs de marque) ===== */
.badge {
  width: 38px; height: 38px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 700; color: #fff;
  flex-shrink: 0;
  /* garde les badges noirs (X, TikTok) visibles sur carte sombre — cf. mockup validé */
  border: 1px solid rgba(255,255,255,.14);
}
.badge img {
  width: 22px; height: 22px;
  filter: brightness(0) invert(1);   /* icône monochrome → blanche */
}
.badge.dark { color: #111; }
.badge.dark img { filter: brightness(0); }  /* fond clair → icône noire */

/* ===== Bouton CTN Mafia ===== */
.btn-ctn {
  margin-top: 22px;
  background: linear-gradient(90deg, var(--red-dark), var(--red));
  border: none;
  justify-content: center;
  font-weight: 700; letter-spacing: 2px;
  color: #fff;
  box-shadow: 0 4px 18px rgba(220,38,38,.35);
}
.btn-ctn:hover { background: linear-gradient(90deg, #991b1b, #c72020); transform: translateY(-2px); }
.btn-ctn .jp { font-family: 'Noto Sans JP', sans-serif; margin-left: 8px; }

/* ===== Vue CTN Mafia ===== */
.hero-ctn {
  position: relative;
  width: 100%;
  height: 42vh;
  min-height: 300px;
  max-height: 420px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, rgba(220,38,38,.22) 0%, rgba(14,14,16,0) 60%),
    #111113;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
}
.hero-ctn .fade {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(14,14,16,0) 55%, var(--bg) 98%);
  pointer-events: none;
}
.logo-ctn {
  width: 110px; height: 110px;
  object-fit: contain;
  border-radius: 26px;
  background: linear-gradient(135deg, #18181b, #060607);
  border: 2.5px solid var(--red);
  box-shadow: 0 0 36px rgba(220,38,38,.35);
}
.ctn-name { margin-top: 16px; font-size: 26px; font-weight: 800; letter-spacing: 6px; outline: none; }
.ctn-sub { margin-top: 4px; color: var(--muted); font-size: 13px; letter-spacing: 1px; }

.back {
  position: absolute;
  top: 12px; left: 12px;
  z-index: 5;
  display: inline-flex; align-items: center; gap: 8px;
  color: #d6d6db; font-size: 14px; font-weight: 600;
  background: rgba(20,20,23,.65);
  backdrop-filter: blur(6px);
  border: 1px solid #2e2e33;
  border-radius: 999px;
  cursor: pointer;
  padding: 10px 16px;
  min-height: 44px;            /* spec : cible tactile ≥ 44px */
  font-family: inherit;
}
.back:hover { color: #fff; background: rgba(40,40,45,.8); }
.back:focus-visible { outline: 2px solid var(--red); outline-offset: 2px; }

.footer { text-align: center; margin-top: 34px; color: #98989d; font-size: 12px; }

/* ===== Accessibilité : animations désactivables (spec) ===== */
@media (prefers-reduced-motion: reduce) {
  .view { animation: none; }
  .btn, .back { transition: none; }
  .btn:hover, .btn:active, .btn-ctn:hover { transform: none; }
}
```

- [ ] **Step 2: Vérifier dans le navigateur**

Run : `Invoke-Item index.html` (ou rafraîchir)
Expected: héro dégradé sombre en haut (photo pas encore injectée), zone de contenu noire en dessous, kanji マフィア en filigrane à droite. Pas encore de liens (app.js manquant).

- [ ] **Step 3: Commit**

```powershell
git add styles.css && git commit -m "feat: styles Mix A×B (héro fondu, badges, vues)"
```

---

### Task 4: Logique `app.js` (rendu + bascule + fallbacks)

**Files:**
- Create: `app.js`

- [ ] **Step 1: Écrire le JS complet**

```js
// Rendu des liens depuis CONFIG (links.js) + bascule de vues.
// Aucune dépendance. Fonctionne en file:// comme en HTTP.

function createLinkButton(link) {
  const a = document.createElement("a");
  a.className = "btn";
  a.href = link.url;
  // Les vrais liens externes s'ouvrent dans un nouvel onglet ;
  // mailto: et les placeholders "#" restent dans la page.
  if (link.url !== "#" && !link.url.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener";
  }

  const badge = document.createElement("span");
  badge.className = "badge" + (link.dark ? " dark" : "");
  badge.style.background = link.color;
  badge.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.src = link.icon;
  img.alt = "";
  // Spec : icône manquante → fallback première lettre de la plateforme.
  img.addEventListener("error", () => {
    img.remove();
    badge.textContent = link.label.charAt(0);
  });
  badge.appendChild(img);

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = link.label;

  const go = document.createElement("span");
  go.className = "go";
  go.textContent = "→";
  go.setAttribute("aria-hidden", "true");

  a.append(badge, label, go);
  return a;
}

function renderProfile() {
  const g = CONFIG.godson;
  document.getElementById("hero-photo").src = g.photo;
  // Spec : photo manquante → le héro garde son dégradé sombre.
  document.getElementById("hero-photo").addEventListener("error", (e) => e.target.remove());
  document.getElementById("title-godson").innerHTML =
    `${g.name} <span class="aka">aka</span> ${g.aka}`;
  document.querySelector("#view-godson .bio").textContent = g.bio;

  const c = CONFIG.ctn;
  document.getElementById("ctn-logo").src = c.logo;
  document.getElementById("ctn-logo").addEventListener("error", (e) => e.target.remove());
  document.getElementById("title-ctn").textContent = c.name;
  document.querySelector("#view-ctn .ctn-sub").textContent = c.sub;

  const navG = document.getElementById("links-godson");
  g.links.forEach((link) => navG.appendChild(createLinkButton(link)));
  const navC = document.getElementById("links-ctn");
  c.links.forEach((link) => navC.appendChild(createLinkButton(link)));
}

function showView(which) {
  const godson = document.getElementById("view-godson");
  const ctn = document.getElementById("view-ctn");
  godson.classList.toggle("hidden", which !== "godson");
  ctn.classList.toggle("hidden", which !== "ctn");
  window.scrollTo({ top: 0 });
  // Accessibilité (spec) : focus sur le titre de la vue affichée.
  document.getElementById(which === "godson" ? "title-godson" : "title-ctn").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  document.getElementById("open-ctn").addEventListener("click", () => showView("ctn"));
  document.getElementById("back-ctn").addEventListener("click", () => showView("godson"));
});
```

- [ ] **Step 2: Vérification complète dans le navigateur**

Run : `Invoke-Item index.html` (ou rafraîchir, Ctrl+F5)
Expected, vue Godson :
- photo `muzvnpic.jpeg` plein écran fondue dans le noir, « Godson aka Muzvn » (aka en rouge) + bio rouge par-dessus ;
- 8 boutons dans l'ordre spec, chacun avec icône blanche sur badge couleur de marque (Snapchat : icône noire sur jaune), flèche à droite ;
- bouton rouge « CTN MAFIA 組 → » en dernier.

Clic sur CTN MAFIA → vue label : logo PNG dans cadre rouge avec halo, « CTN MAFIA », 5 boutons dans l'ordre spec, bouton « ← Retour » qui ramène à la vue Godson. Tab/Entrée au clavier fonctionnent, focus visible.

- [ ] **Step 3: Vérifier les fallbacks (spec)**

1. Renommer temporairement `assets/icons/x.svg` en `x_.svg` → rafraîchir → le bouton X affiche la lettre « X » sur badge noir. Renommer en sens inverse.
2. DevTools → onglet Réseau → bloquer `muzvnpic.jpeg` (ou renommer temporairement) → rafraîchir → héro = dégradé sombre, page utilisable. Restaurer.

Expected: aucun bouton cassé, aucune image en erreur visible.

- [ ] **Step 4: Commit**

```powershell
git add app.js && git commit -m "feat: rendu des liens, bascule de vues, fallbacks"
```

- [ ] **Step 5: CHECKPOINT — validation visuelle par Godson**

Demander à Godson d'ouvrir `index.html` (idéalement aussi sur son téléphone via le réseau local ou en l'envoyant) et de confirmer le rendu avant la suite.

---

### Task 5: Finitions accessibilité/perf + URLs réelles + journal

**Files:**
- Modify: `links.js` (URLs réelles fournies par Godson)
- Modify: `NOTES.md`

- [ ] **Step 1: Remplacer les `url: "#"` par les vraies URLs**

Demander à Godson la liste (Instagram, email, Snapchat, numéro WhatsApp, X, YouTube, TikTok, Facebook + les 5 de CTN Mafia) et remplacer dans `links.js`. Format : voir le commentaire d'en-tête du fichier.

- [ ] **Step 2: Passer la checklist de vérification de la spec**

- [ ] Les 8 + 5 liens s'affichent dans le bon ordre depuis `links.js`
- [ ] Chaque lien ouvre la bonne destination (nouvel onglet pour les externes, mailto pour Email)
- [ ] Bascule Godson ↔ CTN Mafia au clic ET au clavier, focus déplacé sur le titre
- [ ] Rendu correct à ~390px de large (DevTools mode mobile) et desktop
- [ ] `prefers-reduced-motion` (DevTools → Rendering → émuler) : plus d'animations
- [ ] Lighthouse mobile (DevTools → Lighthouse) : Accessibilité ≥ 95, Performance ≥ 90 — si un score est en dessous, corriger avant de continuer (image trop lourde → compresser ; contraste → ajuster la couleur)

Expected: toutes les cases cochées.

- [ ] **Step 3: Mettre à jour `NOTES.md`** (règle CLAUDE.md)

Ajouter une entrée datée : implémentation terminée, fichiers créés, résultat de la checklist et des scores Lighthouse, et tout problème rencontré.

- [ ] **Step 4: Commit final**

```powershell
git add links.js NOTES.md && git commit -m "feat: URLs réelles + vérification finale (checklist spec)"
```

---

## Self-review (faite à la rédaction)

- **Couverture spec :** contenu/ordre des liens (T1), structure deux vues + héro fondu (T2/T3), couleurs de marque + recoloration des icônes (T1/T3/T4), fallbacks icône/photo (T4), focus/clavier/cibles ≥ 44px/`prefers-reduced-motion` (T3/T4), checklist + Lighthouse (T5), journal NOTES.md (T5). Hors périmètre (hébergement, `#ctn`, analytics) : exclu, conforme.
- **Placeholders :** les `url: "#"` sont un choix de spec (URLs fournies par Godson en T5), pas un trou de plan.
- **Cohérence des types :** champs `CONFIG` (name, aka, bio, photo, sub, logo, links[].label/url/icon/color/dark) identiques entre T1 (définition) et T4 (consommation) ; ids HTML de T2 tous référencés dans T4.
