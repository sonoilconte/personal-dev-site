const headerElement = document.getElementById('header');
const headerGeometry = headerElement.getBoundingClientRect();
const stickyNavOffset = headerGeometry.height + window.scrollY + headerGeometry.y;
const navElements = Array.from(document.getElementsByClassName('nav-btn'));
const sectionElements = Array.from(document.getElementsByTagName('section'));
// Start with 1st button highlighted and only 1st section showing
navElements[0].classList.add('current-btn');
sectionElements[0].classList.add('display');
const fadeElement = document.getElementById('fade-wrapper');

window.addEventListener('hashchange', (e) => {
  e.preventDefault();
  console.log('hash change to', location.hash);
  navElements.forEach((el) => { el.classList.remove('current-btn') });
  navElements.find(el => el.parentElement.getAttribute('href') === location.hash)
    .classList.add('current-btn');
  fadeElement.classList.add('hidden');
  const fadeDuration = getComputedStyle(fadeElement).transitionDuration;
  const durationMs = parseFloat(fadeDuration.match(/\d+.\d+/))*1000;
  window.setTimeout(() => {
    sectionElements.forEach((el) => { el.classList.remove('display') });
    sectionElements.find(el => el.id === location.hash.substring(1))
    .classList.add('display');
    if (window.scrollY > stickyNavOffset) {
      window.scrollTo(0, stickyNavOffset);
    }
    fadeElement.classList.remove('hidden');
    fadeElement.classList.add('visible');
  }, durationMs);
});

// Watch for scroll for fixed nav bar

let navIsSticky = false;

window.addEventListener('scroll', () => {
  const navShouldBeSticky = window.scrollY > stickyNavOffset;
  if (navShouldBeSticky == navIsSticky) {
    return;
  }
  document.body.classList.toggle('sticky', navShouldBeSticky);
  navIsSticky = navShouldBeSticky;
});
