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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function toggleMenu() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('show');
}

