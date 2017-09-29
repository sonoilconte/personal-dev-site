// TODO: Current section should be highlighted

$(document).ready(function(){

//start with only work section showing

	$('#about').hide();
	$('#contact').hide();

//get the section tags from the DOM
	let work = $('#work').html();
	let about = $('#about').html();
	let contact = $('#contact').html();

	$('#nav-work').on('click', (e) => {
		e.preventDefault();
		$('#nav-work').addClass('current-btn');
		$('#nav-about').removeClass('current-btn');
		$('#nav-contact').removeClass('current-btn');

		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(work).fadeIn(500);
		});
	});

	$('#nav-about').on('click', (e) => {
		e.preventDefault();
		$('#nav-about').addClass('current-btn');
		$('#nav-work').removeClass('current-btn');
		$('#nav-contact').removeClass('current-btn');

		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(about).fadeIn(500);
		});
	});

	$('#nav-contact').on('click', (e) => {
		e.preventDefault();
		$('#nav-contact').addClass('current-btn');
		$('#nav-work').removeClass('current-btn');
		$('#nav-about').removeClass('current-btn');

		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(contact).fadeIn(500);
		});
	});

	// Watch for scroll for fixed nav bar

	$(window).scroll(() => {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 300){
			$('nav').addClass('fixed-nav');
			$('#wrapper').css('margin-top', '80px');
		}
		if ($(window).scrollTop() < 300){
			$('nav').removeClass('fixed-nav');
			$('#wrapper').css('margin-top', '0');
		}
	});

});
