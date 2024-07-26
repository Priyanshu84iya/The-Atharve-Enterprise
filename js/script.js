(function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // Scroll Top 
  // ------------------------------------------------------------------------------ //
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);


  // Tab Section
  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  });

  $(document).ready(function(){

      $('.project-grid').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]

    }); 

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    }); 
        

  }); // End of a document


   AOS.init({
    duration: 1200,
    once: true,
  })


  // Responsive Navigation with Button
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu-list");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("responsive");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("responsive");
  }



})(jQuery);



