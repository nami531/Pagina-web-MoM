// Función para que la página tarde 3s en cargar
window.onload = function () {
  setTimeout(() => {
    document.querySelector(".loaderDiv").style.display = "none";
  }, 1000);
};




document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox'); 

  // Inicializa el modo basado en localStorage o prefers-color-scheme
  const setMode = (mode) => {
      if (mode === 'light') {
          document.body.classList.add('light-mode');
          localStorage.setItem('light-mode', 'enabled');
          checkbox.checked = true;
      } else {
          document.body.classList.remove('light-mode');
          localStorage.setItem('light-mode', 'disabled');
          checkbox.checked = false;
      }
  };

  const currentMode = localStorage.getItem('light-mode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setMode(currentMode);

  // Agrega un evento de cambio al checkbox
  checkbox.addEventListener('change', () => {
      const mode = checkbox.checked ? 'light' : 'dark';
      setMode(mode);
  });

  // Escucha cambios en prefers-color-scheme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      // Solo actualiza si no hay modo en localStorage
      if (!localStorage.getItem('light-mode')) {
          setMode(newColorScheme);
      }
  });
});



// Función para el slide in del menú
const toggleButton = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const textHeader = document.getElementById("header-content");

// Función para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  textHeader.style.marginTop = "75px";
});

// Cerrar el menú al hacer clic en un enlace
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Cerrar el menú al hacer clic fuera del menú
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== toggleButton) {
    menu.classList.remove("active");
    textHeader.style.marginTop = "auto";
  }
});


// Función para la transición del textarea
const textarea = document.querySelector(".user-box textarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // Restablecer la altura
  this.style.height = Math.min(this.scrollHeight, 200) + "px"; // Ajustar a la altura del contenido, limitando a 200px
});

//Funciones para el slider
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // Asegúrate de que el índice esté dentro del rango
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Desplaza el contenedor de las slides
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Actualiza la barra de progreso
  const progressBar = document.querySelector(".progress");
  const progressPoint = document.querySelector(".progress-point");
  const tooltip = document.querySelector(".tooltip");
  const progressPercentage = (currentSlide / (totalSlides - 1)) * 100;

  // Actualiza el ancho de la barra de progreso
  progressBar.style.width = `${progressPercentage}%`;
  // Actualiza la posición del punto de progreso
  progressPoint.style.left = `${progressPercentage}%`;

  // Actualiza el contenido del tooltip, de manera que si el slide es el número 2, pondrá 66%
  tooltip.innerText =
    currentSlide === 1 ? "66%" : Math.round(progressPercentage) + "%";
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

showSlide(currentSlide);



