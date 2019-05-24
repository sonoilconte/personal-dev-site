"use strict";

$(document).ready(function () {
  // Start with only work section showing
  $('#nav-work').addClass('current-btn');
  $('#work').addClass('display');
  var elements = document.getElementsByClassName('nav-btn');
  Array.from(elements).forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault;
      $('li').removeClass('current-btn');
      $("#".concat(e.target.id)).addClass('current-btn');
      $('#wrapper').fadeOut(500, function () {
        $('section').removeClass('display');
        var sectionId = e.target.id.slice(4);
        $("#".concat(sectionId)).addClass('display');
        $('#wrapper').fadeIn(500);
      });
    });
  }); // Watch for scroll for fixed nav bar

  $(window).scroll(function () {
    if ($(window).scrollTop() > 320) {
      $('nav').addClass('fixed-nav');
      $('#wrapper').css('margin-top', '80px');
    } else {
      $('nav').removeClass('fixed-nav');
      $('#wrapper').css('margin-top', '0');
    }
  });
  console.log('sanity dist');
});
