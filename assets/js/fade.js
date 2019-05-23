$(document).ready(function() {

	// Start with only work section showing
	$('#nav-work').addClass('current-btn');
	$('#work').addClass('display');

	const elements = document.getElementsByClassName('nav-btn');

	Array.from(elements).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault;
			$('li').removeClass('current-btn');
			$(`#${e.target.id}`).addClass('current-btn');
			$('#wrapper').fadeOut(500, () => {
				$('section').removeClass('display');
				const sectionId = e.target.id.slice(4);
				$(`#${sectionId}`).addClass('display');
				$('#wrapper').fadeIn(500);
			});
		});
	});

	// Watch for scroll for fixed nav bar
	$(window).scroll(() => {
		if ($(window).scrollTop() > 320){
			$('nav').addClass('fixed-nav');
			$('#wrapper').css('margin-top', '80px');
		} else {
			$('nav').removeClass('fixed-nav');
			$('#wrapper').css('margin-top', '0');
		}
	});

});
