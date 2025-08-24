
# Nouveau portfolio — Julien Saleh

Ce dossier contient une refonte complète, optimisée **mobile-first**, accessible et performante.
- **Aucun framework**: HTML/CSS/JS vanilla ultra légers.
- **Performances**: pas de librairies lourdes (FontAwesome/OwlCarousel supprimés). Images lazy‑load, CSS moderne.
- **Accessibilité**: sémantique, contraste, navigation clavier, *skip link*, modale accessible.
- **Dark mode**: automatique (préférences système) + bouton (persistant).
- **PWA**: manifest + service worker pour une expérience type app (offline basique).
- **SEO**: métadonnées, OpenGraph/Twitter, données structurées JSON‑LD.

## Déployer sur GitHub Pages
1. Créez une branche `main` (si besoin).
2. Copiez le contenu de ce dossier à la racine de `Djuju02.github.io` (remplacez l'existant).
3. `git add . && git commit -m "refonte portfolio" && git push`.
4. Dans **Settings → Pages**, source : `Deploy from a branch`, branche : `main` (ou `master`).

## Personnaliser
- **Contenu**: modifiez directement `index.html` (sections *Expériences*, *Projets*, *Compétences*, *Contact*).
- **Tags de projets**: ajoutez `data-tags="iot,web,sec"` sur `.project-card` pour activer le filtrage.
- **Couleurs**: changez les variables CSS en haut de `styles.css`.
- **Icônes**: remplacez `favicon.svg`, `icon-192.png`, `icon-512.png`.
- **PWA**: adaptez `manifest.webmanifest` (nom, couleurs), et `sw.js` (stratégie de cache).

## TODO (optionnel)
- Page projet détaillée par projet.
- Section *Recommandations* / *Certificats*.
- Suivi léger analytics côté serveur (pas de tracker intrusif).
