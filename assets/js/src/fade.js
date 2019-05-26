const mobileOffset = 270;
// Start with nav-work button highlighted and only work section showing
document.getElementById('nav-work').classList.add('current-btn');
document.getElementById('work').classList.add('display');

const navElements = document.getElementsByClassName('nav-btn');

Array.from(navElements).forEach((navElement) => {
  navElement.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(document.getElementsByTagName('li'))
      .forEach(el => el.classList.remove('current-btn'));
    document.getElementById(e.target.id).classList.add('current-btn');
    $('#fade-wrapper').fadeOut(500, () => {
      Array.from(document.getElementsByTagName('section'))
        .forEach(el => el.classList.remove('display'));
      document.getElementById(e.target.id.slice(4)).classList.add('display');
      if (window.scrollY > mobileOffset) {
        window.scrollTo(0, mobileOffset);
      }
      $('#fade-wrapper').fadeIn(500);
    });
  });
});

// Watch for scroll for fixed nav bar
window.addEventListener('scroll', () => {
  if (window.scrollY > mobileOffset) {
    document.getElementsByTagName('nav')[0].classList.add('fixed-nav');
    document.getElementById('wrapper').classList.add('wrapper-nav-offset');
  } else {
    document.getElementsByTagName('nav')[0].classList.remove('fixed-nav');
    document.getElementById('wrapper').classList.remove('wrapper-nav-offset');
  }
});
