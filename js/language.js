function setLanguage(language) {
    fetch(`locale/${language}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('welcome').innerText = data.welcome;
        document.getElementById('about-title').innerText = data.about;
        document.getElementById('about-text').innerText = data.aboutText;
        document.getElementById('projects-title').innerText = data.projects;
        document.getElementById('contact-title').innerText = data.contact;
        document.getElementById('contact-text').innerText = data.contactText;
      });
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang');
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    document.documentElement.setAttribute('lang', newLang);
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#language-toggle img').addEventListener('click', toggleLanguage);
});