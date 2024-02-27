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


/*Arrow code */

/* Arrow code */

/* Arrow code */

document.addEventListener("DOMContentLoaded", () => {
    const mainSection = document.querySelector('.main__section--nuestros-servicios');
    const scrollBtns = document.querySelectorAll('.scroll-btn');
    const container = document.querySelector('.ourService__wrappa');
    const cardWidth = container.offsetWidth / 2; // Ancho de cada tarjeta (50% del contenedor)

    mainSection.addEventListener('mouseover', () => {
        scrollBtns.forEach(btn => {
            btn.style.display = 'block';
        });
    });

    mainSection.addEventListener('mouseout', () => {
        scrollBtns.forEach(btn => {
            btn.style.display = 'none';
        });
    });

    document.querySelector('.scroll-btn.left').addEventListener('click', function() {
        const scrollLeft = Math.max(container.scrollLeft - cardWidth - 60, 0); // Desplazamiento hacia la izquierda, teniendo en cuenta el ancho de la tarjeta y el espacio entre tarjetas
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    });

    document.querySelector('.scroll-btn.right').addEventListener('click', function() {
        const scrollRight = Math.min(container.scrollLeft + cardWidth + 60, container.scrollWidth - container.clientWidth); // Desplazamiento hacia la derecha, teniendo en cuenta el ancho de la tarjeta y el espacio entre tarjetas
        container.scrollTo({ left: scrollRight, behavior: 'smooth' });
    });
});


/* Modal code */

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal-container");
    const closeModal = document.getElementById("close-modal");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault(); // Previene la navegación si tus cards están dentro de <a>
            modal.style.display = "flex"; // Muestra el modal
            // Aquí puedes agregar la lógica para cargar el contenido específico en el modal basado en la card clickeada
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta el modal
    });
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


