# Projet : Page link-in-bio personnelle de Godson

## Objectif
Une page web type Linktree / fanbase.to : photo/avatar, nom, courte bio, et une liste de boutons-liens vers les comptes de Godson (réseaux sociaux, musique, etc.). Design soigné, mobile-first (la page sera surtout ouverte depuis Instagram/TikTok sur téléphone).

## Règles de travail
- Utilise les skills Superpowers : brainstorming avant de coder, plan validé par Godson, TDD quand pertinent.
- Mobile-first, performance et accessibilité (contrastes, tailles tactiles ≥ 44px).
- Les liens et textes personnels doivent être faciles à modifier (voir `src/data/links.js`).

## Stack (mise à jour 2026-09-04)
Le projet est passé d'une page statique HTML/CSS/JS à **Vite + React**, décision explicite de Godson pour construire une direction artistique originale (Aceternity UI, Framer Motion, animations) plutôt qu'un template link-in-bio classique. Voir `NOTES.md` pour l'historique complet (deux tentatives de refonte visuelle abandonnées avant ce choix). Build : `npm run build` (déploie automatiquement sur GitHub Pages via `.github/workflows/deploy.yml`). Dev local : `npm run dev`.

## Journal — IMPORTANT
Tiens à jour un fichier `NOTES.md` à la racine : après chaque étape significative (décision de design, fin de tâche, problème rencontré), ajoute une entrée datée et concise. Un autre assistant (Claude Cowork) suit ce projet via ce fichier et peut y laisser des messages dans la section "Messages pour Claude Code" — lis-la au début de chaque session.
