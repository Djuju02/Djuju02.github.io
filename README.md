# Julien Saleh — Portfolio

Site personnel publié sur **https://djuju02.github.io/**.

HTML, CSS et JavaScript vanilla, sans framework ni dépendance (hors polices Google Fonts).

- **Bilingue FR / EN** : le français est écrit directement dans `index.html`, l’anglais dans `i18n.js` (même clé `data-i18n`). Le choix est mémorisé.
- **Thème clair / sombre** : suit le système, bouton pour forcer, choix mémorisé.
- **Accessibilité** : skip link, navigation clavier, `prefers-reduced-motion` respecté.
- **SEO** : balises Open Graph, URL canonique, données structurées JSON-LD (`Person`).
- **PWA** : `manifest.webmanifest` + `sw.js` (réseau d’abord, cache en secours hors-ligne).

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Contenu (FR) et structure de la page |
| `i18n.js` | Traductions anglaises |
| `styles.css` | Styles — couleurs dans les variables `:root` en haut du fichier |
| `script.js` | Menu, filtres projets, thème, langue, animations |
| `assets/` | Photo et logos |
| `CV_Julien_SALEH_FR.pdf` / `_EN.pdf` | CV téléchargeables depuis le bouton du hero |

## Modifier le contenu

1. Modifier le texte français dans `index.html`.
2. Si l’élément a un attribut `data-i18n="cle"`, mettre à jour la même clé dans `i18n.js`.
3. Pour un nouveau projet : copier un `<article class="project">` ; `data-tags` accepte `off`, `def`, `iot`, `web` (filtres).
4. Après une modification importante, incrémenter `VERSION` dans `sw.js` pour invalider le cache.

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
