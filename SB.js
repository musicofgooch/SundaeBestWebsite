    (function () {
      const track = document.getElementById("track");
      const carousel = document.getElementById("carousel");
      const slides = track ? track.querySelectorAll("img") : [];
      let index = 0;
      let intervalId;

      function updateSlide() {
        if (!track || slides.length === 0) {
          return;
        }
        const slideWidth = carousel.clientWidth;
        track.style.transform = "translateX(-" + index * slideWidth + "px)";
      }

      function nextSlide() {
        if (slides.length === 0) {
          return;
        }
        index = (index + 1) % slides.length;
        updateSlide();
      }

      function startAutoSlide() {
        stopAutoSlide();
        intervalId = window.setInterval(nextSlide, 4200);
      }

      function stopAutoSlide() {
        if (intervalId) {
          window.clearInterval(intervalId);
        }
      }

      window.addEventListener("resize", updateSlide);
      if (carousel) {
        carousel.addEventListener("mouseenter", stopAutoSlide);
        carousel.addEventListener("mouseleave", startAutoSlide);
      }

      updateSlide();
      startAutoSlide();
      const year = document.getElementById("year");
      if (year) {
        year.textContent = String(new Date().getFullYear());
      }
    })();