function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const themeToggleImg = document.querySelector('#theme-toggle img');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleImg.src = 'assets/icons/moon.png'; // Image pour le thème clair
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleImg.src = 'assets/icons/sun.png'; // Image pour le thème sombre
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const initialTheme = document.documentElement.getAttribute('data-theme');
    const themeToggleImg = document.querySelector('#theme-toggle img');
    themeToggleImg.src = initialTheme === 'dark' ? 'assets/icons/sun.png' : 'assets/icons/moon.png';

    document.querySelector('#theme-toggle img').addEventListener('click', toggleTheme);
});
