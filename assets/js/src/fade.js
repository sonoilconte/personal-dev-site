$(document).ready(function() {

	const mobileOffset = 270;
	// Start with only work section showing
	$('#nav-work').removeClass('default-btn').addClass('current-btn');
	$('#work').addClass('display');

	const elements = document.getElementsByClassName('nav-btn');

	Array.from(elements).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault();
			$('li').removeClass('current-btn');
			$(`#${e.target.id}`).addClass('current-btn');
			$('#fade-wrapper').fadeOut(500, () => {
				$('section').removeClass('display');
				const sectionId = e.target.id.slice(4);
				$(`#${sectionId}`).addClass('display');
				if ($(window).scrollTop() > mobileOffset) {
					console.log('reset window');
					window.scrollTo(0, mobileOffset);
				}
				$('#fade-wrapper').fadeIn(500, () => {
					console.log("faded in");
				});
			});
		});
	});

	// Watch for scroll for fixed nav bar
	$(window).scroll(() => {
		if ($(window).scrollTop() > mobileOffset) {
			$('nav').addClass('fixed-nav');
			$('#wrapper').css('margin-top', '80px');
		} else {
			$('nav').removeClass('fixed-nav');
			$('#wrapper').css('margin-top', '0');
		}
	});

});
