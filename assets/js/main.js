
// Preload

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const preloader = document.querySelector('#preloader');
    if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
    }
});

// Magnifc Pop-Up

var videopopup = jQuery('.video-popup');
  videopopup.magnificPopup({
      type: 'iframe'
  });

var imagepopup = jQuery('.gallery-wrapper');
  imagepopup.magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
  });

//sticky navbar
document.addEventListener("scroll", function(){
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//slideshow
//  Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  // direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  keyboard: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: true,
  },
});

var swiper2 = new Swiper(".filterSwiper", {
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
  },
  keyboard: true,
});

// function copyText() {
//   alert("Text Copied");

//   var itemCopy = document.getElementById('copyItem');

//   navigator.clipboard.writeText.itemCopy.c;
// }

//Nav Highlight
$(document).ready(function(){

  var sectionIds = $('a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 60 && scrollPosition >= containerOffset - 60){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
    
    
});