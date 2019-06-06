const headerElement = document.getElementById('header');
const headerGeometry = headerElement.getBoundingClientRect();
const stickyNavOffset = headerGeometry.height + window.scrollY + headerGeometry.y;
const navElements = Array.from(document.getElementsByClassName('nav-btn'));
const sectionElements = Array.from(document.getElementsByTagName('section'));
const fadeElement = document.getElementById('fade-wrapper');
let fadeTimeoutId;

function getActiveElement(locationHash, elementsArray) {
  if (locationHash) {
    return elementsArray.find(el => el.dataset.section === locationHash.substring(1));
  }
  return elementsArray[0];
}

// Page load could be index.html, or index.html#contact etc.
getActiveElement(window.location.hash, navElements).classList.add('current-btn');
getActiveElement(window.location.hash, sectionElements).classList.add('display');

window.addEventListener('hashchange', () => {
  if (fadeTimeoutId) {
    window.clearTimeout(fadeTimeoutId);
  }
  navElements.forEach((el) => {
    el.classList.remove('current-btn');
  });
  getActiveElement(window.location.hash, navElements).classList.add('current-btn');
  fadeElement.parentNode.classList.add('hidden');
  // Get transitionDuration from CSS and convert seconds string to milliseconds
  const fadeDuration = getComputedStyle(fadeElement).transitionDuration;
  const durationMs = parseFloat(fadeDuration.match(/\d+.?\d*(?!.*\d+.?\d*)/)) * 1000;
  fadeTimeoutId = window.setTimeout(() => {
    sectionElements.forEach((el) => {
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
});

// Watch for scroll for fixed nav bar
let navIsSticky = false;

window.addEventListener('scroll', () => {
  const navShouldBeSticky = window.scrollY > stickyNavOffset;
  if (navShouldBeSticky === navIsSticky) {
    return;
  }
  document.body.classList.toggle('sticky', navShouldBeSticky);
  navIsSticky = navShouldBeSticky;
});
