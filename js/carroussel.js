$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [2000])
    });
    $('.stop').on('click', function(){
        owl.trigger('stop.owl.autoplay')
    });
});

$('.item').on('click', function() {
    // Récupérez les données de l'élément cliqué
    var imageSrc = $(this).find('img').attr('src');
    var title = $(this).find('h4').text();
    var description = $(this).find('p').text();
    
    // Ouvrez la modal avec ces données
    openModal(imageSrc, title, description);
});


// JavaScript pour ouvrir et fermer la fenêtre modale
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Ouvrir la modal
function openModal(imageSrc, title, description) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalText").innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    modal.style.display = "block";
}

// Fermer la modal en cliquant sur le bouton (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Fermer la modal en cliquant en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
