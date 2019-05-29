"use strict";

var mobileOffset = 270; // Start with nav-work button highlighted and only work section showing

document.getElementById('nav-work').classList.add('current-btn');
document.getElementById('work').classList.add('display');
var navElements = document.getElementsByClassName('nav-btn');
Array.from(navElements).forEach(function (navElement) {
  navElement.addEventListener('click', function (e) {
    e.preventDefault();
    Array.from(document.getElementsByTagName('li')).forEach(function (el) {
      return el.classList.remove('current-btn');
    });
    document.getElementById(e.target.id).classList.add('current-btn');
    $('#fade-wrapper').fadeOut(500, function () {
      Array.from(document.getElementsByTagName('section')).forEach(function (el) {
        return el.classList.remove('display');
      });
      document.getElementById(e.target.id.slice(4)).classList.add('display');

      if (window.scrollY > mobileOffset) {
        window.scrollTo(0, mobileOffset);
      }

      $('#fade-wrapper').fadeIn(500);
    });
  });
}); // Watch for scroll for fixed nav bar

window.addEventListener('scroll', function () {
  if (window.scrollY > mobileOffset) {
    document.getElementsByTagName('nav')[0].classList.add('fixed-nav');
    document.getElementsByClassName('wrapper')[0].classList.add('wrapper-nav-offset');
  } else {
    document.getElementsByTagName('nav')[0].classList.remove('fixed-nav');
    document.getElementsByClassName('wrapper')[0].classList.remove('wrapper-nav-offset');
  }
});