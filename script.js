// GESTION DU MODE SOMBRE/CLAIR
const themeToggle = document.getElementById('theme-toggle');
const themeToggleIcon = themeToggle?.querySelector('img');
const body = document.body;

// Fonction pour mettre à jour l'icône du thème
function updateThemeIcon(isLightMode) {
  if (themeToggleIcon) {
    themeToggleIcon.src = isLightMode ? 'assets/icon-moon.png' : 'assets/icon-sun.png';
  }
}

// Initialisation du thème
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme === 'light-mode');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    updateThemeIcon(false);
  } else {
    body.classList.add('light-mode');
    updateThemeIcon(true);
  }
}

// Gestion du clic sur le bouton de changement de thème
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.contains('light-mode');
    body.classList.toggle('light-mode', !isLightMode);
    body.classList.toggle('dark-mode', isLightMode);
    updateThemeIcon(!isLightMode);
    localStorage.setItem('theme', isLightMode ? 'dark-mode' : 'light-mode');
  });
}

initializeTheme();

// GESTION DE LA LANGUE
const languageToggle = document.getElementById('language-toggle');
const cvDownload = document.getElementById('cv-download'); // Ajouté pour le CV
const rootmeLink = document.getElementById('rootme-link'); // Ajouté pour le lien Root Me

const translations = {
  fr: {
    about: 'Qui suis-je ?',
    experience: 'Mes expériences',
    projects: 'Mes projets',
    skills: 'Mes compétences',
    contact: 'Me contacter',
    aboutText: 'Passionné par la technologie et l\'innovation, je suis un ingénieur spécialisé en cybersécurité avec une solide expérience en développement et en réseaux. Toujours à l\'affût des dernières avancées technologiques, je m\'efforce de créer des solutions sécurisées et innovantes. N\'hésitez pas à me contacter pour discuter de projets, collaborer ou simplement partager notre passion commune pour l\'informatique.',
    contactText: 'N\'hésitez pas à échanger avec moi, je serai ravi de discuter de nouvelles opportunités ou simplement de partager autour de sujets qui nous passionnent.',
    cvText: 'CV FR', // Ajouté pour le texte du bouton CV en français
    cvFile: 'CV_Julien_SALEH_FR.pdf', // Ajouté pour le fichier CV en français
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rootMeLink: 'https://www.root-me.org/Djuju02?lang=fr',
    rootMeText: 'Root Me',
    footerText: '&copy; 2024 Julien Saleh. Tous droits réservés.'
  },
  en: {
    about: 'About Me',
    experience: 'My Experiences',
    projects: 'My Projects',
    skills: 'My Skills',
    contact: 'Contact Me',
    aboutText: 'Passionate about technology and innovation, I am an engineer specializing in cybersecurity with a strong background in development and networking. Always keen on the latest technological advancements, I strive to create secure and innovative solutions. Feel free to contact me to discuss projects, collaborate, or simply share our common passion for IT.',
    contactText: 'Feel free to reach out to me; I would be delighted to discuss new opportunities or simply share insights on topics that inspire us.',
    cvText: 'CV EN', // Ajouté pour le texte du bouton CV en anglais
    cvFile: 'CV_Julien_SALEH_EN.pdf', // Ajouté pour le fichier CV en anglais
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rootMeLink: 'https://www.root-me.org/Djuju02?lang=en',
    rootMeText: 'Root Me',
    footerText: '&copy; 2024 Julien Saleh. All rights reserved.'
  }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
  const navLinks = document.querySelectorAll('nav a.scroll-link');
  const keys = ['about', 'experience', 'projects', 'skills', 'contact'];

  // Mise à jour des liens de navigation
  navLinks.forEach((link, index) => {
    if (keys[index]) link.textContent = translations[lang][keys[index]];
  });

  // Mise à jour des sections principales
  const sections = document.querySelectorAll('main section');
  sections.forEach((section) => {
    const header = section.querySelector('h2');
    const paragraph = section.querySelector('p');
    const sectionId = section.getAttribute('id');

    if (header && translations[lang][sectionId]) {
      header.textContent = translations[lang][sectionId];
    }

    if (paragraph && translations[lang][`${sectionId}Text`]) {
      paragraph.textContent = translations[lang][`${sectionId}Text`];
    }
  });

  // Mise à jour du bouton de téléchargement du CV
  if (cvDownload) {
    cvDownload.querySelector('span').textContent = translations[lang]['cvText'];
    cvDownload.setAttribute('href', translations[lang]['cvFile']);
  }
  // Mise à jour du lien Root Me
  if (rootmeLink) {
    rootmeLink.setAttribute('href', translations[lang]['rootMeLink']);
    rootmeLink.querySelector('h3').textContent = translations[lang]['rootMeText'];
  }
  // Mise à jour du pied de page
  const footerText = document.querySelector('footer .footer-content p');
  if (footerText && translations[lang]['footerText']) {
    footerText.innerHTML = translations[lang]['footerText'];
  }
}



// Gestion du clic pour changer de langue
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const currentLang = languageToggle.getAttribute('data-lang') || 'fr';
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    languageToggle.setAttribute('data-lang', newLang);
    if (languageToggle.querySelector('img')) {
      languageToggle.querySelector('img').src = `assets/icon-${newLang}.png`;
    }
    changeLanguage(newLang);
  });

  // Initialiser la langue par défaut
  languageToggle.setAttribute('data-lang', 'fr');
  if (languageToggle.querySelector('img')) {
    languageToggle.querySelector('img').src = 'assets/icon-fr.png';
  }
  // Appeler changeLanguage pour initialiser le texte du bouton CV
  changeLanguage('fr');
}

// INITIALISATION DU CARROUSEL AVEC OWL CAROUSEL
$(document).ready(function () {
  const $carousel = $(".owl-carousel");
  const $indicators = $(".carousel-indicators");

  $carousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<div class='custom-nav left-nav'>&lt;</div>", "<div class='custom-nav right-nav'>&gt;</div>"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    },
    onInitialized: createIndicators,
    onChanged: updateIndicators
  });

  // Créer les indicateurs de pagination
  function createIndicators(event) {
    const totalItems = event.item.count;
    $indicators.empty();
    for (let i = 0; i < totalItems; i++) {
      const indicator = $("<div>")
        .addClass("indicator")
        .attr("data-index", i);
      if (i === 0) indicator.addClass("active");
      $indicators.append(indicator);
    }

    // Gestion du clic sur les indicateurs
    $(".indicator").on("click", function () {
      const index = $(this).data("index");
      $carousel.trigger("to.owl.carousel", [index, 300, true]); // Modification ici
    });
  }

  // Mettre à jour les indicateurs actifs
  function updateIndicators(event) {
    const totalItems = event.item.count;
    const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
    const normalizedIndex = (currentIndex + totalItems) % totalItems;
    $(".indicator").removeClass("active");
    $(`.indicator[data-index="${normalizedIndex}"]`).addClass("active");
  }
});


// GESTION DU DÉFILEMENT FLUIDE
document.querySelectorAll('nav a.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    // Défilement fluide vers la section cible
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// GESTION DU POPUP DES PROJETS
document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.owl-carousel .item');
  const popup = document.getElementById('project-popup');
  const closeBtn = document.querySelector('.close-btn');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      // Récupérer les informations du projet
      const imageSrc = item.querySelector('img').getAttribute('src');
      const title = item.querySelector('h3').textContent;
      const description = item.getAttribute('data-description') || item.querySelector('p').textContent;

      // Mettre à jour le contenu du popup
      popupImage.setAttribute('src', imageSrc);
      popupTitle.textContent = title;
      popupDescription.textContent = description;

      // Afficher le popup
      popup.style.display = 'block';
    });
  });

  // Fermer le popup en cliquant sur la croix
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  // Fermer le popup en cliquant en dehors du contenu
  window.addEventListener('click', event => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
