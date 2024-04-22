document.querySelectorAll('.scroll-dot').forEach(dot => {
    dot.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Ajouter la classe 'active' à l'élément de navigation correspondant à la section visible
window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            document.querySelectorAll('.scroll-dot').forEach(dot => {
                dot.classList.remove('active');
                if (document.querySelector(dot.getAttribute('href')) === section) {
                    dot.classList.add('active');
                }
            });
        }
    });
});
