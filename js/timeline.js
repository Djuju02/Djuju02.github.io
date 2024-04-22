document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.previousElementSibling.classList.add('highlight');
    });
    item.addEventListener('mouseleave', () => {
      item.previousElementSibling.classList.remove('highlight');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.timeline-item');
    let heightAccumulator = 0;  // Accumulateur pour la hauteur totale des éléments précédents
  
    items.forEach((item, index) => {
      const content = index % 2 === 0 ? item.querySelector('.left') : item.querySelector('.right');
      if (content) {
        content.style.top = heightAccumulator + 'px'; // Définir la position top basée sur l'accumulation
        heightAccumulator += content.offsetHeight + 20; // Ajouter la hauteur de l'élément actuel à l'accumulateur
        const imgDiv = item.querySelector('.timeline-img');
        imgDiv.style.top = (content.offsetTop + content.offsetHeight / 2 - imgDiv.offsetHeight / 2) + 'px';
      }
    });
  });
  
  