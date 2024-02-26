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

function scrollCards(direction) {
    const container = document.querySelector('.main__section--nuestros-servicios__content');
    const cardWidth = document.querySelector('.card').clientWidth; // Ancho de una card
    const gap = 40; // El gap definido en tu CSS

    if (direction === 'right') {
        container.scrollLeft += cardWidth + gap;
    } else {
        container.scrollLeft -= cardWidth + gap;
    }
}

/* Animation card service code*/

// Asegura que inicialmente solo la flecha derecha sea visible.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('arrow-left').style.display = 'none'; // Oculta la flecha izquierda al cargar la página.
    document.getElementById('arrow-right').style.display = 'flex'; // Asegura que la flecha derecha esté visible.
});

document.getElementById('arrow-right').addEventListener('click', function() {
    scrollCards('right');
    // Muestra la flecha izquierda y oculta la derecha después de moverse hacia la derecha
    document.getElementById('arrow-left').style.display = 'flex';
    document.getElementById('arrow-right').style.display = 'none';
});

document.getElementById('arrow-left').addEventListener('click', function() {
    scrollCards('left');
    // Muestra la flecha derecha y oculta la izquierda después de moverse hacia la izquierda
    document.getElementById('arrow-right').style.display = 'flex';
    document.getElementById('arrow-left').style.display = 'none';
});

function scrollCards(direction) {
    const container = document.querySelector('.main__section--nuestros-servicios__content');
    let currentTransform = parseInt(container.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    const cardWidth = document.querySelector('.card').offsetWidth + parseInt(getComputedStyle(document.querySelector('.card')).marginRight);
    
    if (direction === 'right') {
        // Mueve las cards hacia la izquierda para mostrar la siguiente card
        container.style.transform = `translateX(${currentTransform - cardWidth}px)`;
    } else if (direction === 'left') {
        // Mueve las cards hacia la derecha para volver a mostrar la card anterior
        container.style.transform = `translateX(${currentTransform + cardWidth}px)`;
    }
    container.style.transition = 'transform 0.5s ease-out';
}



