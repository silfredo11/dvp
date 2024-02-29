document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function activateLink(currentId) {
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentId}`) {
                link.classList.add("active");
            }
        });
    }

    window.onscroll = () => {
        let currentSectionId = ""; // Inicialmente no hay ninguna sección activa
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            activateLink(currentSectionId);
        } else {
            // Si no hay ninguna sección que cumpla el criterio, activar por defecto el primer enlace
            // Esto asume que el primer enlace es 'Home' o el inicio de tu sitio.
            const firstSectionId = sections[0].getAttribute("id");
            activateLink(firstSectionId);
        }
    };

    // Activa el primer enlace al cargar la página si está en la parte superior
    activateLink(sections[0].getAttribute("id"));
});




/* Scroll- smoot */


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


