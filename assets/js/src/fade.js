const headerElement = document.getElementById('header');
const headerGeometry = headerElement.getBoundingClientRect();
const stickyNavOffset = headerGeometry.height + window.scrollY + headerGeometry.y;
const navElements = Array.from(document.getElementsByClassName('nav-btn'));
const sectionElements = Array.from(document.getElementsByTagName('section'));
const fadeElement = document.getElementById('fade-wrapper');

function getActiveElements(locationHash) {
  if (locationHash && locationHash !== '') {
    const navElement = navElements.find(el => el.parentElement.getAttribute('href') == locationHash);
    const sectionElement = sectionElements.find(el => el.id == locationHash.substring(1));
    return [navElement, sectionElement];
  } else {
    return [navElements[0], sectionElements[0]];
  }
}
// Page load could be index.html, or index.html#contact etc.
const activeElements = getActiveElements(location.hash);
activeElements[0].classList.add('current-btn');
activeElements[1].classList.add('display');

window.addEventListener('hashchange', (e) => {
  e.preventDefault();
  navElements.forEach((el) => { el.classList.remove('current-btn') });
  const activeElements = getActiveElements(location.hash);
  activeElements[0].classList.add('current-btn');
  fadeElement.classList.add('hidden');
  const fadeDuration = getComputedStyle(fadeElement).transitionDuration;
  const durationMs = parseFloat(fadeDuration.match(/\d+.\d+/))*1000;
  window.setTimeout(() => {
    sectionElements.forEach((el) => { el.classList.remove('display') });
    activeElements[1].classList.add('display');
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
