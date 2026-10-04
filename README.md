<div align="center">

# Julien Saleh

**Élève-ingénieur en cybersécurité** · Master Objets Connectés & Cybersécurité — ESILV, labellisé SecNumEdu par l’ANSSI

Recherche un **stage de fin d’études de 6 mois** · Paris / Île-de-France · disponible dès que possible

[![Site](https://img.shields.io/badge/Site-djuju02.github.io-8b6cff?style=for-the-badge&logo=githubpages&logoColor=white)](https://djuju02.github.io/)
[![Portfolio](https://img.shields.io/badge/Portfolio-djuju02.fr-22d3ee?style=for-the-badge&logo=googlechrome&logoColor=white)](https://djuju02.fr/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-juliensaleh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juliensaleh)
[![Root-Me](https://img.shields.io/badge/Root--Me-Djuju02-111?style=for-the-badge)](https://www.root-me.org/Djuju02)

<a href="https://djuju02.github.io/"><img src=".github/apercu.jpg" alt="Aperçu du site djuju02.github.io" width="820"></a>

</div>

## En bref

| | |
| --- | --- |
| 🛡️ **Accor** — 5 mois | Gestion des vulnérabilités dans l’équipe Applicative Security : outillage DefectDojo en Python, rapports automatisés, mise en production via GitLab CI, participation à des tests d’intrusion |
| 🎯 **Deloitte** — projet ESILV | Chef de projet : durcissement des postes et VM d’une équipe Red Team |
| 🔌 **Equans Ineo Défense** — projet ESILV | Station blanche embarquée d’analyse antivirus des supports USB |
| 🐳 **Lab DevSecOps** | Image Docker durcie de 1,12 Go à 59,9 Mo, 0 vulnérabilité HIGH / CRITICAL, Kubernetes (k3d) |
| 🔍 **Audit de djuju02.fr** | Audit en boîte blanche de mon propre site : 9 constats, tous corrigés et vérifiés |
| 📈 | 10 mois de stages · TOEIC 900/990 · top 200 du concours Algoréa |

**Domaines :** sécurité opérationnelle · DevSecOps · système & bas niveau · GRC (EBIOS RM, ISO 27001/27005) · développement Python et C#

## Ce que contient ce site

Une page unique, bilingue, qui présente mon parcours de façon claire pour un recruteur :

- **À propos** et six façons de lire mon profil (SecOps, DevSecOps, système, GRC, dev, gestion de projet), chacune reliée à la vue correspondante du [portfolio détaillé](https://djuju02.fr/portfolio)
- **Parcours** : expériences, formation et engagement associatif
- **Projets** filtrables, dont mon site [djuju02.fr](https://djuju02.fr), l’audit de sécurité qui l’accompagne et des **démos interactives** de mes projets d’école (routage en oignon, consensus de Ben-Or, QR code, caméra thermique…)
- **Compétences**, langues et formations complémentaires
- **Hors du clavier** : escalade, tennis, cuisine, robotique, voyages

## Côté technique

<img src=".github/apercu-mobile.jpg" alt="Version mobile" width="220" align="right">

- **HTML, CSS et JavaScript vanilla** : aucun framework, aucune dépendance, aucun tracker
- **FR / EN** : le français est écrit dans `index.html`, l’anglais dans `i18n.js` ; le choix est mémorisé
- **Thème clair / sombre** qui suit le système, avec bouton pour le forcer
- **Responsive** du mobile au grand écran, animations désactivées si `prefers-reduced-motion`
- **Accessibilité** : lien d’évitement, navigation clavier, libellés ARIA traduits
- **SEO** : Open Graph, URL canonique, données structurées JSON-LD `Person`
- **PWA** : manifeste et service worker « réseau d’abord » pour un accès hors-ligne

<br clear="right">

### Structure

```
index.html            contenu (FR) et structure
i18n.js               traductions anglaises
styles.css            styles — couleurs dans les variables :root
script.js             menu, filtres, thème, langue, animations
sw.js                 service worker
assets/               photo, logos, vignettes des démos
.github/              captures d’écran de ce README
```

### Modifier le contenu

1. Modifier le texte français dans `index.html`.
2. Si l’élément porte `data-i18n="cle"`, mettre à jour la même clé dans `i18n.js`.
3. Nouveau projet : copier un `<article class="project">` ; `data-tags` accepte `sec`, `devsecops`, `sys`, `grc`, `dev`.
4. Après une modification, incrémenter `VERSION` dans `sw.js` pour que les visiteurs reçoivent la nouvelle version.

### Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

<div align="center"><sub>Envie d’échanger ? Le plus simple : le <a href="https://djuju02.fr/portfolio#contact">formulaire de contact</a> ou <a href="https://www.linkedin.com/in/juliensaleh">LinkedIn</a>.</sub></div>
