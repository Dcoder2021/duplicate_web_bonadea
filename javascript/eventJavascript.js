var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    const testimonial = document.querySelector('.testimonial');
    const commentSlides = document.querySelectorAll('.comment-slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
      // Hide all slides
      commentSlides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Show the current slide
      commentSlides[index].classList.add('active');
      adjustBackgroundSize();
    }

    function adjustBackgroundSize() {
      const activeSlide = document.querySelector('.comment-slide.active');
      if (activeSlide) {
        const slideHeight = activeSlide.offsetHeight;
        
        // Calculate the new background size based on the height of the active slide
        // Adjust the zoom factor as needed (1.5 here is an example)
        let zoomFactor = 1.5;
        let newSize = 100 + (slideHeight / 10) * zoomFactor;
        testimonial.style.backgroundSize = `${newSize}%`;
      }
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % commentSlides.length;
      showSlide(currentSlideIndex);
    }

    // Initial display
    showSlide(currentSlideIndex);

    // Change slides every 3 seconds (adjust the interval as needed)
    setInterval(nextSlide, 3000);
  });

