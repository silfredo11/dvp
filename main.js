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

document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente, solo la flecha derecha es visible.
    document.getElementById('arrow-left').style.display = 'none';
    document.getElementById('arrow-right').style.display = 'flex';
});

document.getElementById('arrow-right').addEventListener('click', function() {
    // Muestra la cuarta card y ajusta la visibilidad de las flechas
    scrollCards('right');
    document.getElementById('arrow-left').style.display = 'flex';
    this.style.display = 'none'; // Oculta la flecha derecha
});

document.getElementById('arrow-left').addEventListener('click', function() {
    // Ajusta la visibilidad de las flechas al volver a la posición original
    scrollCards('left');
    document.getElementById('arrow-right').style.display = 'flex';
    this.style.display = 'none'; // Oculta la flecha izquierda
});

function scrollCards(direction) {
    const container = document.querySelector('.main__section--nuestros-servicios__content');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const gap = parseInt(getComputedStyle(document.querySelector('.card')).marginRight);

    // Calcula el nuevo desplazamiento basado en la dirección
    let newScrollPosition = container.scrollLeft + (direction === 'right' ? (cardWidth + gap) : -(cardWidth + gap));

    // Aplica el desplazamiento
    container.scroll({ left: newScrollPosition, behavior: 'smooth' });
}


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


