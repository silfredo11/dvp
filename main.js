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

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.ourService__wrappa');
  const cards = document.querySelectorAll('.ourService__card');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  if(cards.length > 0) {
    // Asume que todas las tarjetas tienen el mismo ancho y el contenedor un width fijo o máximo.
    const cardStyle = getComputedStyle(cards[0]);
    const cardMarginRight = parseFloat(cardStyle.marginRight);
    // Añade un extra al ancho de la tarjeta para asegurar que se muestre completamente la siguiente.
    const extraSpace = 40; // Ajusta este valor según sea necesario para cubrir el gap completo y un poco más.
    const cardWidth = cards[0].offsetWidth + cardMarginRight + extraSpace; // Añade el margen y el espacio extra al ancho de la tarjeta

    btnLeft.addEventListener('click', () => {
      wrapper.scrollLeft -= cardWidth; // Usa el ancho calculado de la tarjeta más el espacio extra
    });

    btnRight.addEventListener('click', () => {
      wrapper.scrollLeft += cardWidth; // Usa el ancho calculado de la tarjeta más el espacio extra
    });
  }
});



