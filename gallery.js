// gallery.js

const images = [
  '../images/presentation/bulletsim/desc_pic.png',
  '../images/presentation/bulletsim/preview1.png',
  '../images/presentation/bulletsim/preview2.png',
  '../images/presentation/bulletsim/preview3.png',
  '../images/presentation/bulletsim/preview4.png'
]; // пути к изображениям

let currentIndex = 0;
let intervalId = null;

let imgA = document.createElement('img');
let imgB = document.createElement('img');

imgA.className = 'gallery-img';
imgB.className = 'gallery-img';

imgA.src = images[currentIndex];
imgA.style.opacity = 1;
imgB.style.opacity = 0;

let showingA = true;

const leftControl = document.createElement('div');
leftControl.className = 'gallery-control gallery-left';

const rightControl = document.createElement('div');
rightControl.className = 'gallery-control gallery-right';

function showNextImage(index) {
  const nextSrc = images[index];

  if (showingA) {
    imgB.src = nextSrc;
    imgB.style.zIndex = 2;
    imgA.style.zIndex = 1;
    imgB.style.opacity = 1;
    imgA.style.opacity = 0;
  } else {
    imgA.src = nextSrc;
    imgA.style.zIndex = 2;
    imgB.style.zIndex = 1;
    imgA.style.opacity = 1;
    imgB.style.opacity = 0;
  }

  showingA = !showingA;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showNextImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showNextImage(currentIndex);
}

function startAutoSlide() {
  intervalId = setInterval(nextImage, 5000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.main-game-img');
  container.style.position = 'relative';
  container.appendChild(imgA);
  container.appendChild(imgB);
  container.appendChild(leftControl);
  container.appendChild(rightControl);

  leftControl.addEventListener('click', () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
  });

  rightControl.addEventListener('click', () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
  });

  startAutoSlide();
});