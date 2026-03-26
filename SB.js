
  let index = 0;
  const track = document.getElementById('track');
  const slides = document.querySelectorAll('.carousel img');
  const totalSlides = slides.length;
  const carousel = document.getElementById('carousel');

function updateSlide() {
  const slideWidth = document.querySelector(".carousel").clientWidth;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${-index * slideWidth}px)`;
  });
}

  function moveSlide(direction) {
    index += direction;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    updateSlide();
  }

  function autoSlide() {
    index++;
    if (index >= totalSlides) index = 0;
    updateSlide();
  }

  let interval = setInterval(autoSlide, 4000);

  if (index > 5) {
    clearInterval(interval);
  }

