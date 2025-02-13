// GESTION DU MODE SOMBRE/CLAIR
const themeToggle = document.getElementById('theme-toggle');
const themeToggleIcon = themeToggle?.querySelector('img');
const body = document.body;

function updateThemeIcon(isLightMode) {
  if (themeToggleIcon) {
    themeToggleIcon.src = isLightMode ? 'assets/icon-moon.png' : 'assets/icon-sun.png';
  }
}

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

// TRANSLATIONS COMPLETES
const translations = {
  fr: {
    title: "Mon Portfolio",
    about: "Qui suis-je ?",
    aboutText: "Passionné par la technologie et l'innovation, je suis un ingénieur spécialisé en cybersécurité avec une solide expérience en développement et en réseaux. Toujours à l'affût des dernières avancées technologiques, je m'efforce de créer des solutions sécurisées et innovantes. N'hésitez pas à me contacter pour discuter de projets, collaborer ou simplement partager notre passion commune pour l'informatique.",
    experience: "Mes expériences",
    experienceItem1Title: "ESILV - Ingénieur numérique",
    experienceItem1Period: "2020 - 2025",
    experienceItem1Desc: "Étudiant à l'ESILV en master Objects Connectés et Cybersécurité",
    experienceItem2Title: "Stage chez Accor - 4 mois",
    experienceItem2Period: "2024",
    experienceItem2Desc: "Participation à des pentests.",
    experienceItem3Title: "Nely - Stagiaire IT",
    experienceItem3Period: "2023",
    experienceItem3Desc: "Responsable de la sécurité des infrastructures IT, mise en place de mesures de sécurité proactives.",
    experienceItem4Title: "Riga Technical University - Semestre d'échange",
    experienceItem4Period: "2022",
    experienceItem4Desc: "Échange international en Lettonie.",
    experienceItem5Title: "Safe Handling - Stagiaire IT",
    experienceItem5Period: "2022",
    experienceItem5Desc: "Responsable de la sécurité des infrastructures IT, mise en place de mesures de sécurité proactives.",
    experienceItem6Title: "Collège Lycée Notre-Dame des Oiseaux",
    experienceItem6Period: "2017 - 2020",
    experienceItem6Desc: "Baccalauréat scientifique spécialité mathématiques - mention bien",
    projects: "Mes projets",
    project1Title: "Coupe de France de Robotique",
    project1Desc: "Développement de robots autonomes pour des compétitions internationales.",
    project2Title: "Station blanche embarquée",
    project2Desc: "Création d'une plateforme de diagnostic embarqué pour véhicules connectés.",
    project3Title: "Éolienne urbaine",
    project3Desc: "Conception d'une éolienne compacte adaptée aux environnements urbains.",
    popupTitle: "Titre du projet",
    popupDesc: "Description complète du projet.",
    skills: "Mes compétences",
    skillDevTitle: "Développement",
    skillDevLanguages: "Langages : C#, C, C++, Python, JavaScript, TypeScript, HTML, CSS, LaTeX",
    skillDevTech: "Technologies : JSON, XML, Git",
    skillNetTitle: "Réseau & Systèmes",
    skillNetTools: "Outils : Wireshark, Cisco Packet Tracer, VirtualBox, Docker",
    skillNetSystems: "Systèmes : Linux (Kali, Ubuntu), Windows, MacOS",
    skillCyberTitle: "Cybersécurité",
    skillCyberConcepts: "Concepts : OWASP Top 10, Cryptographie, Sécurité réseau",
    skillCyberTools: "Outils : Burp Suite, Reverse Engineering",
    skillDBTitle: "Bases de Données",
    skillDBSystems: "SGBD : MySQL, Oracle",
    skillDBModeling: "Modélisation : Conception de bases de données",
    skillSoftTitle: "Soft Skills",
    skillSoft1: "Leadership et gestion d'équipe",
    skillSoft2: "Travail en équipe",
    skillSoft3: "Design Thinking",
    skillSoft4: "Méthodologies Agiles (Scrum)",
    skillCertTitle: "Certifications",
    skillCert1: "TOEIC : 900/990",
    skillCert2: "Certification Agile Scrum",
    skillCert3: "Diplôme de Design Thinking",
    skillLangTitle: "Langues",
    skillLang1: "Français : Langue maternelle",
    skillLang2: "Anglais : Niveau B2",
    skillLang3: "Espagnol : Notions",
    skillLang4: "Arabe : Notions",
    skillInterestsTitle: "Centres d'intérêts",
    skillInterests1: "Tennis (17 ans)",
    skillInterests2: "Escalade",
    skillInterests3: "Voyages",
    skillInterests4: "Robotique & Modélisation 3D",
    skillInterests5: "Cuisine",
    contact: "Me contacter",
    contactText: "N'hésitez pas à échanger avec moi, je serai ravi de discuter de nouvelles opportunités ou simplement de partager autour de sujets qui nous passionnent.",
    contactLinkedin: "LinkedIn",
    contactEmail: "Email",
    contactGitHub: "GitHub",
    contactRootMe: "Root Me",
    cvText: "CV FR",
    cvFile: "CV_Julien_SALEH_FR.pdf",
    footerText: "&copy; 2024 Julien Saleh. Tous droits réservés."
  },
  en: {
    title: "My Portfolio",
    about: "About Me",
    aboutText: "Passionate about technology and innovation, I am an engineer specializing in cybersecurity with a strong background in development and networking. Always keen on the latest technological advancements, I strive to create secure and innovative solutions. Feel free to contact me to discuss projects, collaborate, or simply share our common passion for IT.",
    experience: "My Experiences",
    experienceItem1Title: "ESILV - Digital Engineer",
    experienceItem1Period: "2020 - 2025",
    experienceItem1Desc: "Student at ESILV in the Connected Objects and Cybersecurity Master's program.",
    experienceItem2Title: "Internship at Accor - 4 months",
    experienceItem2Period: "2024",
    experienceItem2Desc: "Participated in pentesting.",
    experienceItem3Title: "Nely - IT Intern",
    experienceItem3Period: "2023",
    experienceItem3Desc: "In charge of IT infrastructure security, implementing proactive security measures.",
    experienceItem4Title: "Riga Technical University - Exchange Semester",
    experienceItem4Period: "2022",
    experienceItem4Desc: "International exchange in Latvia.",
    experienceItem5Title: "Safe Handling - IT Intern",
    experienceItem5Period: "2022",
    experienceItem5Desc: "In charge of IT infrastructure security, implementing proactive security measures.",
    experienceItem6Title: "Collège Lycée Notre-Dame des Oiseaux",
    experienceItem6Period: "2017 - 2020",
    experienceItem6Desc: "Scientific Baccalaureate with a specialization in Mathematics - with honors.",
    projects: "My Projects",
    project1Title: "French Robotics Cup",
    project1Desc: "Development of autonomous robots for international competitions.",
    project2Title: "Embedded White Station",
    project2Desc: "Creation of an on-board diagnostic platform for connected vehicles.",
    project3Title: "Urban Wind Turbine",
    project3Desc: "Design of a compact wind turbine suitable for urban environments.",
    popupTitle: "Project Title",
    popupDesc: "Full project description.",
    skills: "My Skills",
    skillDevTitle: "Development",
    skillDevLanguages: "Languages: C#, C, C++, Python, JavaScript, TypeScript, HTML, CSS, LaTeX",
    skillDevTech: "Technologies: JSON, XML, Git",
    skillNetTitle: "Networking & Systems",
    skillNetTools: "Tools: Wireshark, Cisco Packet Tracer, VirtualBox, Docker",
    skillNetSystems: "Systems: Linux (Kali, Ubuntu), Windows, MacOS",
    skillCyberTitle: "Cybersecurity",
    skillCyberConcepts: "Concepts: OWASP Top 10, Cryptography, Network Security",
    skillCyberTools: "Tools: Burp Suite, Reverse Engineering",
    skillDBTitle: "Databases",
    skillDBSystems: "DBMS: MySQL, Oracle",
    skillDBModeling: "Modeling: Database design",
    skillSoftTitle: "Soft Skills",
    skillSoft1: "Leadership and team management",
    skillSoft2: "Teamwork",
    skillSoft3: "Design Thinking",
    skillSoft4: "Agile methodologies (Scrum)",
    skillCertTitle: "Certifications",
    skillCert1: "TOEIC: 900/990",
    skillCert2: "Agile Scrum Certification",
    skillCert3: "Design Thinking Diploma",
    skillLangTitle: "Languages",
    skillLang1: "French: Native",
    skillLang2: "English: B2 level",
    skillLang3: "Spanish: Basic",
    skillLang4: "Arabic: Basic",
    skillInterestsTitle: "Interests",
    skillInterests1: "Tennis (17 years)",
    skillInterests2: "Climbing",
    skillInterests3: "Travel",
    skillInterests4: "Robotics & 3D Modeling",
    skillInterests5: "Cooking",
    contact: "Contact Me",
    contactText: "Feel free to reach out to me; I would be delighted to discuss new opportunities or simply share insights on topics that inspire us.",
    contactLinkedin: "LinkedIn",
    contactEmail: "Email",
    contactGitHub: "GitHub",
    contactRootMe: "Root Me",
    cvText: "CV EN",
    cvFile: "CV_Julien_SALEH_EN.pdf",
    footerText: "&copy; 2024 Julien Saleh. All rights reserved."
  }
};

// GESTION DE LA LANGUE
const languageToggle = document.getElementById('language-toggle');
const cvDownload = document.getElementById('cv-download');
const rootmeLink = document.getElementById('rootme-link');

function changeLanguage(lang) {
  // Mise à jour de tous les éléments ayant l'attribut data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Mise à jour spécifique du lien CV et Root Me
  if (cvDownload) {
    cvDownload.setAttribute('href', translations[lang]['cvFile']);
  }
  if (rootmeLink) {
    rootmeLink.setAttribute('href', translations[lang]['rootMeLink']);
  }
  
  // Mise à jour du copyright avec l'année courante
  const currentYear = new Date().getFullYear();
  let footerMessage = "";
  if(lang === "fr") {
    footerMessage = `&copy; 2024${currentYear > 2024 ? " - " + currentYear : ""} Julien Saleh. Tous droits réservés.`;
  } else {
    footerMessage = `&copy; 2024${currentYear > 2024 ? " - " + currentYear : ""} Julien Saleh. All rights reserved.`;
  }
  const footerText = document.querySelector('footer .footer-content p');
  if (footerText) {
    footerText.innerHTML = footerMessage;
  }
}

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
  languageToggle.setAttribute('data-lang', 'fr');
  if (languageToggle.querySelector('img')) {
    languageToggle.querySelector('img').src = 'assets/icon-fr.png';
  }
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
    // Utilisation d'icônes FontAwesome pour des boutons ronds et modernes
    navText: [
      "<div class='custom-nav left-nav'><i class='fas fa-chevron-left'></i></div>",
      "<div class='custom-nav right-nav'><i class='fas fa-chevron-right'></i></div>"
    ],
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
    $(".indicator").on("click", function () {
      const index = $(this).data("index");
      $carousel.trigger("to.owl.carousel", [index, 300, true]);
    });
  }

  function updateIndicators(event) {
    const totalItems = event.item.count;
    const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
    const normalizedIndex = (currentIndex + totalItems) % totalItems;
    $(".indicator").removeClass("active");
    $(`.indicator[data-index="${normalizedIndex}"]`).addClass("active");
  }
});

// Défilement fluide
document.querySelectorAll('nav a.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Popup des projets
document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.owl-carousel .item');
  const popup = document.getElementById('project-popup');
  const closeBtn = document.querySelector('.close-btn');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      const imageSrc = item.querySelector('img').getAttribute('src');
      const title = item.querySelector('h3').textContent;
      const description = item.getAttribute('data-description') || item.querySelector('p').textContent;
      popupImage.setAttribute('src', imageSrc);
      popupTitle.textContent = title;
      popupDescription.textContent = description;
      popup.style.display = 'block';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  window.addEventListener('click', event => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  // INITIALISATION DE AOS POUR LES ANIMATIONS SCROLL
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true
    });
  }
});
