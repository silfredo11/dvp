window.addEventListener("load", () => { // Cambio de `DOMContentLoaded` a `load`
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function activateLink(currentId) {
      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
          }
      });
  }

  function getCurrentSection() {
      let currentSectionId = '';
      let currentSectionPos = 0;
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= sectionTop - 100) { // Ajuste en el margen de activación
              if (window.scrollY >= currentSectionPos) {
                  currentSectionId = section.getAttribute("id");
                  currentSectionPos = sectionTop;
              }
          }
      });
      return currentSectionId;
  }

  window.onscroll = () => {
      const currentSectionId = getCurrentSection();
      if (currentSectionId) {
          activateLink(currentSectionId);
      }
  };

  // Activar el enlace correspondiente al cargar la página o al recargar en una sección específica
  const initialSectionId = getCurrentSection();
  if (initialSectionId) {
      activateLink(initialSectionId);
  } else {
      activateLink(sections[0].getAttribute("id"));
  }
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


