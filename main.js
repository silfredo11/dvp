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
      headerSecundario.style.width = "100%";
      headerSecundario.classList.add("header-fijo");
    } else {
      headerSecundario.style.position = 'absolute'; // O 'static', dependiendo de tu layout inicial.
      headerSecundario.style.top = '0'; // Asegúrate de ajustar esto según sea necesario.
      headerSecundario.classList.remove("header-fijo");
    }
  }
  
  // Implementa debounce para optimizar el rendimiento durante el scroll.
  let timer;
  window.onscroll = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      adjustHeaderPosition();
    }, 10); // Ajusta este tiempo según sea necesario.
  };
  
  // Asegúrate de llamar a adjustHeaderPosition al cargar la página para establecer la posición inicial correcta.
  window.onload = () => {
    adjustHeaderPosition();
  };
  

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

// document.addEventListener("DOMContentLoaded", () => {
//   const wrapper = document.querySelector('.ourService__wrappa');
//   const cards = document.querySelectorAll('.ourService__card');
//   const btnLeft = document.querySelector('.scroll-btn.left');
//   const btnRight = document.querySelector('.scroll-btn.right');

//   if(cards.length > 0) {
//     // Asume que todas las tarjetas tienen el mismo ancho y el contenedor un width fijo o máximo.
//     const cardStyle = getComputedStyle(cards[0]);
//     const cardMarginRight = parseFloat(cardStyle.marginRight);
//     // Añade un extra al ancho de la tarjeta para asegurar que se muestre completamente la siguiente.
//     const extraSpace = 20; // Ajusta este valor según sea necesario para cubrir el gap completo y un poco más.
//     const cardWidth = cards[0].offsetWidth + cardMarginRight + extraSpace; // Añade el margen y el espacio extra al ancho de la tarjeta

//     btnLeft.addEventListener('click', () => {
//       wrapper.scrollLeft -= cardWidth; // Usa el ancho calculado de la tarjeta más el espacio extra
//     });

//     btnRight.addEventListener('click', () => {
//       wrapper.scrollLeft += cardWidth; // Usa el ancho calculado de la tarjeta más el espacio extra
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.ourService__wrappa');
  const cards = document.querySelectorAll('.ourService__card');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  // Función para calcular el desplazamiento necesario según el ancho de pantalla
  function calculateScrollDistance() {
      if(window.innerWidth <= 600) { // Ejemplo para dispositivos móviles
          // Asumiendo que en móviles quieras desplazar menos distancia
          return cards[0].offsetWidth; // O cualquier otra lógica específica para móviles
      } else {
          // Para pantallas más grandes, incluye el margen y un espacio extra si es necesario
          const cardStyle = getComputedStyle(cards[0]);
          const cardMarginRight = parseFloat(cardStyle.marginRight);
          return cards[0].offsetWidth + cardMarginRight; // Ajusta esto según tu diseño
      }
  }

  btnLeft.addEventListener('click', () => {
      const scrollDistance = calculateScrollDistance();
      wrapper.scrollLeft -= scrollDistance;
  });

  btnRight.addEventListener('click', () => {
      const scrollDistance = calculateScrollDistance();
      wrapper.scrollLeft += scrollDistance;
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const wrapper = document.querySelector('.ourService__wrappa');
//   const cards = document.querySelectorAll('.ourService__card');
//   const btnLeft = document.querySelector('.scroll-btn.left');
//   const btnRight = document.querySelector('.scroll-btn.right');

//   function calculateScrollDistance() {
//     if (window.innerWidth <= 600) {
//       // Lógica específica para móviles
//       return cards[0].offsetWidth;
//     } else {
//       const cardStyle = getComputedStyle(cards[0]);
//       const cardMarginLeft = parseFloat(cardStyle.marginLeft);
//       const cardMarginRight = parseFloat(cardStyle.marginRight);
//       const gap = 1200; // Ajusta este valor según el espacio que deseas que se vea
//       return cards[0].offsetWidth + cardMarginLeft + cardMarginRight - gap;
//     }
//   }

//   btnLeft.addEventListener('click', () => {
//     const scrollDistance = calculateScrollDistance();
//     wrapper.scrollBy({
//       left: -scrollDistance,
//       behavior: 'smooth',
//     });
//   });

//   btnRight.addEventListener('click', () => {
//     const scrollDistance = calculateScrollDistance();
//     wrapper.scrollBy({
//       left: scrollDistance,
//       behavior: 'smooth',
//     });
//   });

//   // Añadir transiciones al contenedor
//   wrapper.style.transition = 'transform 0.5s ease-in-out';
// });



/*Menu hamburguesa */

const hamburguerMenu = document.querySelector('.header__hamburguer');
const mobileMenu = document.querySelector('.mobileMenu');
const iconMnuBar2 = document.querySelector('.header__hamburguerSons2');
const iconMnuBar1 = document.querySelector('.header__hamburguerSons1');
const iconMnuBar3 = document.querySelector('.header__hamburguerSons3');

// Función para alternar el menú hamburguesa y la animación a "X"
function toggleHamburguerMenu() {
    mobileMenu.classList.toggle('innactive');
    // Alternar las clases para la animación de las barras
    toggleBarsAnimation();
}

// Función para alternar las clases que controlan la animación de las barras
function toggleBarsAnimation() {
    iconMnuBar1.classList.toggle('son1');
    iconMnuBar2.classList.toggle('son2');
    iconMnuBar3.classList.toggle('son3');
    hamburguerMenu.classList.toggle('active'); // Asegúrate de que esta clase controle el cambio visual en CSS
}

// Evento de clic para el menú hamburguesa
hamburguerMenu.addEventListener('click', toggleHamburguerMenu);

// Función para cerrar el menú y revertir la animación de las barras cuando se selecciona una opción
function closeMenuOnOptionSelect() {
    if (!mobileMenu.classList.contains('innactive')) {
        mobileMenu.classList.add('innactive');
        // Revertir la animación de las barras si el menú se está cerrando
        if (hamburguerMenu.classList.contains('active')) {
            toggleBarsAnimation();
        }
    }
}

// Cerrar el menú hamburguesa automáticamente al seleccionar una opción y revertir las barras a su estado original
document.querySelectorAll('.mobilMenu__a').forEach(item => {
    item.addEventListener('click', closeMenuOnOptionSelect);
});
