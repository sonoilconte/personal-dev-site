// TODO: Current section should be highlighted

$(document).ready(function(){

//start with only work section showing

	$('#about').hide();
	$('#contact').hide();

//get the section tags from the DOM
	let work = $('#work').html();
	let about = $('#about').html();
	let contact = $('#contact').html();

	$('.nav-work').on('click', (e) => {
		e.preventDefault();
		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(work).fadeIn(500);
		});
	});

	$('.nav-about').on('click', (e) => {
		e.preventDefault();
		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(about).fadeIn(500);
		});
	});

	$('.nav-contact').on('click', (e) => {
		e.preventDefault();
		$('#wrapper').fadeOut(500, () => {
			$('#wrapper').html(contact).fadeIn(500);
		});
	});

	// Watch for scroll for fixed nav bar

	$(window).scroll(() => {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 302){
			$('nav').addClass('fixed-nav');
		}
		if ($(window).scrollTop() < 302){
			$('nav').removeClass('fixed-nav');
		}
	});

});
