
// Array de direcciones de imagen
const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/8.jpg"
];

var currentIndex = 0;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
var timer;

// Función para cambiar la imagen
const changeImage = (index) => {
  imageElement.src = images[index];
  resetTimer();
}

// Función para ir a la imagen anterior
const  previousImage = () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  changeImage(currentIndex);
}

// Función para ir a la imagen siguiente
const nextImage = () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  changeImage(currentIndex);
}

// reset timer
const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(nextImage, 2000);
}

prevButton.addEventListener("click", function() {
  previousImage();
});

nextButton.addEventListener("click", function() {
  nextImage();
});

resetTimer();
