/* swiper */
$(function(){
  var swiper = new Swiper(".swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
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
});

/* slick */
$(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});

/* nav */
$(function(){
  const nav = document.querySelector('nav');
  const closeBtn = document.querySelector('.close');
  const menuBtn = document.querySelector('.menu');
  const subMenu = document.querySelectorAll('.sub');
  const navbg = document.querySelector('.navbg');
  const blackbg = document.querySelector('.blackbg');

  menuBtn.addEventListener('click', ()=>{
    
  })
})