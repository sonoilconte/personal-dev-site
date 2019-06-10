"use strict";

var headerElement = document.getElementById('header');
var headerGeometry = headerElement.getBoundingClientRect();
var stickyNavOffset = headerGeometry.height + window.scrollY + headerGeometry.y;
var navElements = Array.from(document.getElementsByClassName('nav-btn'));
var sectionElements = Array.from(document.getElementsByTagName('section'));
var fadeElement = document.getElementById('fade-wrapper');
var fadeTimeoutId;

function getActiveElement(locationHash, elementsArray) {
  if (locationHash) {
    return elementsArray.find(function (el) {
      return el.dataset.section === locationHash.substring(1);
    });
  }

  return elementsArray[0];
} // Page load could be index.html, or index.html#contact etc.


getActiveElement(window.location.hash, navElements).classList.add('current-btn');
getActiveElement(window.location.hash, sectionElements).classList.add('display');
window.addEventListener('hashchange', function () {
  if (fadeTimeoutId) {
    window.clearTimeout(fadeTimeoutId);
  }

  navElements.forEach(function (el) {
    el.classList.remove('current-btn');
  });
  getActiveElement(window.location.hash, navElements).classList.add('current-btn');
  fadeElement.parentNode.classList.add('hidden'); // Get transitionDuration from CSS and convert seconds string to milliseconds

  var fadeDuration = getComputedStyle(fadeElement).transitionDuration;
  var durationMs = parseFloat(fadeDuration.match(/\d+.?\d*(?!.*\d+.?\d*)/)) * 1000;
  fadeTimeoutId = window.setTimeout(function () {
    sectionElements.forEach(function (el) {
      el.classList.remove('display');
    });
    readyFormDisplay(); // see contact.js

    getActiveElement(window.location.hash, sectionElements).classList.add('display');

    if (window.scrollY > stickyNavOffset) {
      window.scrollTo(0, stickyNavOffset);
    }

    fadeElement.parentNode.classList.remove('hidden');
    fadeTimeoutId = undefined;
  }, durationMs);
}); // Watch for scroll for fixed nav bar

var navIsSticky = false;
window.addEventListener('scroll', function () {
  var navShouldBeSticky = window.scrollY > stickyNavOffset;

  if (navShouldBeSticky === navIsSticky) {
    return;
  }

  document.body.classList.toggle('sticky', navShouldBeSticky);
  navIsSticky = navShouldBeSticky;
});