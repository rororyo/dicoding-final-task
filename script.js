let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
      if (i === currentSlide) {
        slide.classList.add(index > currentSlide ? 'next' : 'prev');
      } else {
        slide.classList.remove('next', 'prev');
      }
    }
  });
  currentSlide = index;
}

function prevSlide() {
  let index = currentSlide - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

function nextSlide() {
  let index = currentSlide + 1;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

showSlide(currentSlide);
