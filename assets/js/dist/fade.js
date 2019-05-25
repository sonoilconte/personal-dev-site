"use strict";

$(document).ready(function () {
  var mobileOffset = 270; // Start with only work section showing

  $('#nav-work').removeClass('default-btn').addClass('current-btn');
  $('#work').addClass('display');
  var elements = document.getElementsByClassName('nav-btn');
  Array.from(elements).forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      $('li').removeClass('current-btn');
      $("#".concat(e.target.id)).addClass('current-btn');
      $('#fade-wrapper').fadeOut(500, function () {
        $('section').removeClass('display');
        var sectionId = e.target.id.slice(4);
        $("#".concat(sectionId)).addClass('display');

        if ($(window).scrollTop() > mobileOffset) {
          console.log('reset window');
          window.scrollTo(0, mobileOffset);
        }

        $('#fade-wrapper').fadeIn(500, function () {
          console.log("faded in");
        });
      });
    });
  }); // Watch for scroll for fixed nav bar

  $(window).scroll(function () {
    if ($(window).scrollTop() > mobileOffset) {
      $('nav').addClass('fixed-nav');
      $('#wrapper').css('margin-top', '80px');
    } else {
      $('nav').removeClass('fixed-nav');
      $('#wrapper').css('margin-top', '0');
    }
  });
});