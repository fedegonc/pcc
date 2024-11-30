console.log('JavaScript cargado correctamente');
// Agrega aquí cualquier funcionalidad JS, como sliders o interacciones.
// Selección de elementos
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

// Variables iniciales
let currentIndex = 0; // Índice del primer grupo visible
let cardsToShow = 3; // Cantidad de tarjetas visibles (ajustable dinámicamente)

// Ajusta el número de tarjetas visibles dependiendo del tamaño de la pantalla
function updateCardsToShow() {
  if (window.innerWidth <= 768) {
    cardsToShow = 1; // Móviles
  } else if (window.innerWidth <= 1024) {
    cardsToShow = 2; // Tablets
  } else {
    cardsToShow = 3; // Desktop
  }
  updateSliderPosition();
}

// Actualiza la posición del slider según el índice actual
function updateSliderPosition() {
  const cardWidth = slider.querySelector('.card').clientWidth;
  const gap = 20; // Espaciado entre tarjetas (ajústalo según tu diseño)
  const offset = (cardWidth + gap) * currentIndex;
  slider.style.transform = `translateX(-${offset}px)`;
}

// Evento de clic en el botón "Siguiente"
nextBtn.addEventListener('click', () => {
  const totalCards = slider.children.length; // Total de tarjetas
  if (currentIndex + cardsToShow < totalCards) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Evento de clic en el botón "Anterior"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Detecta cambios de tamaño en la ventana
window.addEventListener('resize', updateCardsToShow);

// Inicializa el slider
updateCardsToShow();
