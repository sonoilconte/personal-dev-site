"use strict";

var headerElement = document.getElementById('header');
var headerGeometry = headerElement.getBoundingClientRect();
var stickyNavOffset = headerGeometry.height + window.scrollY + headerGeometry.y;
var navElements = Array.from(document.getElementsByClassName('nav-btn'));
var sectionElements = Array.from(document.getElementsByTagName('section'));
var fadeElement = document.getElementById('fade-wrapper');

function selectWithLocation(el, locationHash) {
  return el.dataset.section === locationHash.substring(1);
}

function getActiveElements(locationHash) {
  if (locationHash && locationHash !== '') {
    var navElement = navElements.find(function (el) {
      return selectWithLocation(el, locationHash);
    });
    var sectionElement = sectionElements.find(function (el) {
      return selectWithLocation(el, locationHash);
    });
    return [navElement, sectionElement];
  }

  return [navElements[0], sectionElements[0]];
} // Page load could be index.html, or index.html#contact etc.


var activeElements = getActiveElements(window.location.hash);
activeElements[0].classList.add('current-btn');
activeElements[1].classList.add('display');
window.addEventListener('hashchange', function (e) {
  e.preventDefault();
  navElements.forEach(function (el) {
    el.classList.remove('current-btn');
  });
  var elements = getActiveElements(window.location.hash);
  elements[0].classList.add('current-btn');
  fadeElement.classList.add('hidden');
  var fadeDuration = getComputedStyle(fadeElement).transitionDuration;
  var durationMs = parseFloat(fadeDuration.match(/\d+.\d+/)) * 1000;
  window.setTimeout(function () {
    sectionElements.forEach(function (el) {
      el.classList.remove('display');
    });
    elements[1].classList.add('display');

    if (window.scrollY > stickyNavOffset) {
      window.scrollTo(0, stickyNavOffset);
    }

    fadeElement.classList.remove('hidden');
    fadeElement.classList.add('visible');
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