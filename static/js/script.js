var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  cardsEffect: {
    slideShadows: true,
    rotate: true,
    perSlideRotate: 5,
    perSlideOffset: 8,
  },
  touchRatio: 1.5, // <<< Swipe di mobile jadi lebih responsif
  threshold: 10,    // <<< Jarak minimal gerakan lebih pendek
});
