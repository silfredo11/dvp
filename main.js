window.addEventListener("load", () => {
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
          if (window.scrollY >= sectionTop - 100) {
              if (window.scrollY >= currentSectionPos) {
                  currentSectionId = section.getAttribute("id");
                  currentSectionPos = sectionTop;
              }
          }
      });
      return currentSectionId;
  }

  function adjustHeaderPosition() {
      const headerSecundario = document.querySelector('.main__section--presentacion--header');
      const mainSectionPresentacion = document.querySelector('.main__section--presentacion');
      const offsetTopPresentacion = mainSectionPresentacion.offsetTop + mainSectionPresentacion.offsetHeight;

      if (window.pageYOffset > offsetTopPresentacion) {
          headerSecundario.style.position = 'fixed';
          headerSecundario.style.top = '0';
      } else {
          headerSecundario.style.position = 'absolute'; // O "static" si quieres que vuelva completamente al flujo normal
          headerSecundario.style.top = 'auto';
      }
  }

  // Integración del código de smooth scroll
  // Asegúrate de que jQuery esté incluido si usas esta parte
  $(document).ready(function() {
      $("a").on('click', function(event) {
          if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 1200, function() {
                  window.location.hash = hash;
              });
          }
      });
  });

  window.onscroll = () => {
      const currentSectionId = getCurrentSection();
      if (currentSectionId) {
          activateLink(currentSectionId);
      }
      adjustHeaderPosition(); // Llama a esta función cada vez que el usuario se desplace
  };

  // Asegúrate de ajustar la posición también al cargar la página
  adjustHeaderPosition();
});


