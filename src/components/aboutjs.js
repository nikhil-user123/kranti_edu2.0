'use strict';

// $(document).ready(function () {
//     $(window).bind('scroll', function (e) {
//         parallaxScroll();
//     });
// });

// function parallaxScroll() {
//     const scrolled = $(window).scrollTop();
//     $('#team-image').css('top', (0 - (scrolled * .20)) + 'px');
//     $('.img-1').css('top', (0 - (scrolled * .35)) + 'px');
//     $('.img-2').css('top', (0 - (scrolled * .05)) + 'px');
// }


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      parallaxScroll();
    });
  });
  
  function parallaxScroll() {
    const scrolled = window.pageYOffset;
    document.getElementById('team-image').style.top = (0 - (scrolled * 0.20)) + 'px';
    document.querySelector('.img-1').style.top = (0 - (scrolled * 0.35)) + 'px';
    document.querySelector('.img-2').style.top = (0 - (scrolled * 0.05)) + 'px';
  }
  