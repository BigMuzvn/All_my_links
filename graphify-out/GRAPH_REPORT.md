# Graph Report - All_my_links  (2026-09-05)

## Corpus Check
- 56 files · ~81,057 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 223 nodes · 267 edges · 24 communities (12 shown, 10 thin omitted)
- Extraction: 78% EXTRACTED · 21% INFERRED · 1% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.87)
- Token cost: 229,578 input · 0 output

## Community Hubs (Navigation)
- App v1 statique et deploiement
- Dependances npm
- Sections de la page React
- Config shadcn et registres
- Build Vite et scripts npm
- Direction artistique et assets
- Design v1 et accessibilite
- Nav flottante et morph text
- Particules interactives WebGL
- Alias de chemins jsconfig
- Shader de nuages
- Methode Superpowers plan et spec
- Icones hors plateformes
- Composant Button shadcn
- Icones Email et Gmail
- Icones Facebook
- Icones Instagram
- Icones Snapchat
- Icones TikTok
- Icones X et Twitter
- Icones WhatsApp
- Icones YouTube

## God Nodes (most connected - your core abstractions)
1. `asset()` - 12 edges
2. `TouchTexture` - 7 edges
3. `tailwind` - 6 edges
4. `aliases` - 6 edges
5. `Objet global CONFIG (godson + ctn)` - 6 edges
6. `Muzvn Artist Portrait (Hannya Mask)` - 6 edges
7. `CTN Mafia Label Logo` - 6 edges
8. `InteractiveParticles()` - 5 edges
9. `Pivot vers Vite + React + Tailwind + Motion` - 5 edges
10. `3D Chain-Link Decor Render A` - 5 edges

## Surprising Connections (you probably didn't know these)
- `createLinkButton(link)` --semantically_similar_to--> `Nav flottante social-dock (floating dock)`  [INFERRED] [semantically similar]
  docs/superpowers/plans/2026-06-12-link-in-bio.md → NOTES.md
- `Robustesse : fallbacks icône et photo` --semantically_similar_to--> `Correctif nav mobile : suppression du mode replié`  [INFERRED] [semantically similar]
  docs/superpowers/specs/2026-06-12-link-in-bio-design.md → NOTES.md
- `Architecture à deux vues (Godson / CTN Mafia)` --semantically_similar_to--> `Section Projets — staggered grid (en pause)`  [INFERRED] [semantically similar]
  docs/superpowers/specs/2026-06-12-link-in-bio-design.md → NOTES.md
- `Point de montage React #root + entrée /src/main.jsx` --semantically_similar_to--> `Task 2 — structure index.html (deux vues)`  [INFERRED] [semantically similar]
  index.html → docs/superpowers/plans/2026-06-12-link-in-bio.md
- `Point de montage React #root + entrée /src/main.jsx` --implements--> `Pivot vers Vite + React + Tailwind + Motion`  [INFERRED]
  index.html → NOTES.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Pile statique v1 : quatre fichiers pilotés par CONFIG** — docs_superpowers_plans_2026_06_12_link_in_bio_task1_links_js, docs_superpowers_plans_2026_06_12_link_in_bio_task2_index_html, docs_superpowers_plans_2026_06_12_link_in_bio_task3_styles_css, docs_superpowers_plans_2026_06_12_link_in_bio_task4_app_js, docs_superpowers_specs_2026_06_12_link_in_bio_design_static_zero_build_architecture [EXTRACTED 1.00]
- **Sections React empilées sur le fond animé** — notes_cloud_shader_background, notes_floating_dock_nav, notes_morph_text, notes_staggered_grid, notes_scroll_decision [INFERRED 0.85]
- **Chaîne de publication GitHub Pages (build → artifact dist → deploy → BASE_URL)** — _github_workflows_deploy_build, _github_workflows_deploy_deploy, notes_github_pages_deploy, notes_asset_helper, claude_stack_vite_react [INFERRED 0.85]
- **Black-ground, high-contrast visual system across all first-party assets** — public_assets_photos_muzvnpic, public_assets_photos_ctn_mafia_logo, public_assets_particles_mes_liens, public_assets_decor_link_3d_a, public_assets_decor_link_3d_b [INFERRED 0.85]
- **"Mes Liens" section visual treatment (particle heading + floating 3D chain links)** — public_assets_particles_mes_liens, public_assets_decor_link_3d_a, public_assets_decor_link_3d_b, public_assets_particles_mes_liens_particle_text_effect, public_assets_decor_link_3d_b_floating_decor_layer [INFERRED 0.75]
- **Dual identity presentation: Godson/Muzvn the artist and CTN Mafia the label** — public_assets_photos_muzvnpic, public_assets_photos_ctn_mafia_logo, public_assets_photos_muzvnpic_godson_muzvn_identity, public_assets_photos_ctn_mafia_logo_ctn_mafia_label [INFERRED 0.85]
- **PNG icons consumed by the floating social dock (src/components/social-dock.jsx)** — public_assets_icons_ctnmafia_png, public_assets_icons_email_png, public_assets_icons_facebook_png, public_assets_icons_github_png, public_assets_icons_insta_png, public_assets_icons_portfolio_png, public_assets_icons_snapchat_png, public_assets_icons_tik_tok_png, public_assets_icons_twitter_png, public_assets_icons_whatsapp_png, public_assets_icons_youtube_png [INFERRED 0.75]
- **SVG brand glyphs consumed by the links grid (src/data/links.js)** — public_assets_icons_facebook_svg, public_assets_icons_gmail_svg, public_assets_icons_instagram_svg, public_assets_icons_snapchat_svg, public_assets_icons_tiktok_svg, public_assets_icons_whatsapp_svg, public_assets_icons_x_svg, public_assets_icons_youtube_svg [INFERRED 0.75]
- **Brands duplicated as both an SVG and a PNG asset in the icons folder** — public_assets_icons_facebook_svg, public_assets_icons_facebook_png, public_assets_icons_snapchat_svg, public_assets_icons_snapchat_png, public_assets_icons_tiktok_svg, public_assets_icons_tik_tok_png, public_assets_icons_whatsapp_svg, public_assets_icons_whatsapp_png, public_assets_icons_youtube_svg, public_assets_icons_youtube_png, public_assets_icons_instagram_svg, public_assets_icons_insta_png, public_assets_icons_x_svg, public_assets_icons_twitter_png, public_assets_icons_gmail_svg, public_assets_icons_email_png [INFERRED 0.85]

## Communities (24 total, 10 thin omitted)

### Community 0 - "App v1 statique et deploiement"
Cohesion: 0.07
Nodes (36): Job build (npm ci + npm run build → artifact dist), Job deploy (actions/deploy-pages vers l'environnement github-pages), Workflow "Deploy sur GitHub Pages", Règle du journal NOTES.md, Projet link-in-bio de Godson, Config éditable src/data/links.js, Stack Vite + React (mise à jour 2026-09-04), Objet global CONFIG (godson + ctn) (+28 more)

### Community 1 - "Dependances npm"
Cohesion: 0.07
Nodes (29): @base-ui/react, class-variance-authority, cn, @fontsource-variable/geist, gsap, imagesloaded, lucide-react, motion (+21 more)

### Community 2 - "Sections de la page React"
Cohesion: 0.15
Nodes (14): App(), FloatingDecor(), LinksGrid(), LinksParticles(), BENTO_ITEMS, FILLER, DockIcon(), LINKS (+6 more)

### Community 3 - "Config shadcn et registres"
Cohesion: 0.09
Nodes (22): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+14 more)

### Community 4 - "Build Vite et scripts npm"
Cohesion: 0.10
Nodes (19): devDependencies, postcss, tailwindcss, @tailwindcss/postcss, vite, @vitejs/plugin-react, name, private (+11 more)

### Community 5 - "Direction artistique et assets"
Cohesion: 0.16
Nodes (20): 3D Chain-Link Decor Render A, Chain-Link = "Link" Visual Metaphor, Claymorphic 3D Icon Style, 3D Chain-Link Decor Render B, Floating Decorative Object Layer, Two-Angle Variant Pair for Parallax Depth, "MES LIENS" Particle Text Source Bitmap, Pure-Black-Ground Asset Convention (+12 more)

### Community 6 - "Design v1 et accessibilite"
Cohesion: 0.17
Nodes (12): Règle mobile-first, performance et accessibilité, Task 3 — styles.css (palette Mix A×B), Task 4 — app.js (rendu, bascule, fallbacks), Exigences accessibilité et performance, Design visuel Mix A×B (palette, typo, filigrane kanji), Robustesse : fallbacks icône et photo, Chargement Google Fonts (Inter + Noto Sans JP), Métadonnées de la page (titre, description, theme-color) (+4 more)

### Community 7 - "Nav flottante et morph text"
Cohesion: 0.25
Nodes (5): NameMorph(), FloatingDock(), hoverEnabled(), IconContainer(), MorphText()

### Community 9 - "Alias de chemins jsconfig"
Cohesion: 0.33
Nodes (5): compilerOptions, baseUrl, paths, include, src

### Community 10 - "Shader de nuages"
Cohesion: 0.53
Nodes (4): CloudShaderDemo(), CloudShader(), compile(), parseHex()

### Community 11 - "Methode Superpowers plan et spec"
Cohesion: 1.00
Nodes (3): Règle de travail Superpowers (brainstorming → plan validé → TDD), Plan d'implémentation link-in-bio (2026-06-12), Spec design link-in-bio (validée 2026-06-12)

### Community 12 - "Icones hors plateformes"
Cohesion: 0.67
Nodes (3): CTN Mafia label logo (PNG, black block wordmark + red script), GitHub icon (PNG, nav dock glyph), Portfolio icon (PNG, nav dock glyph, non-platform link)

## Ambiguous Edges - Review These
- `Dark Japanese Oni/Hannya Art Direction` → `Claymorphic 3D Icon Style`  [AMBIGUOUS]
  public/assets/decor/link-3d-a.png · relation: semantically_similar_to
- `CTN Mafia Circular Manifesto Tagline` → `Founded 2024 / Rebirth March 2026 Timeline Claim`  [AMBIGUOUS]
  public/assets/photos/ctn-mafia-logo.png · relation: references

## Knowledge Gaps
- **80 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+75 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 89 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Dark Japanese Oni/Hannya Art Direction` and `Claymorphic 3D Icon Style`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `CTN Mafia Circular Manifesto Tagline` and `Founded 2024 / Rebirth March 2026 Timeline Claim`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `dependencies` connect `Dependances npm` to `Build Vite et scripts npm`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _80 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App v1 statique et deploiement` be split into smaller, more focused modules?**
  _Cohesion score 0.06507936507936508 - nodes in this community are weakly interconnected._
- **Should `Dependances npm` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Config shadcn et registres` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._