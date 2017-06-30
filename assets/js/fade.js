$(document).ready(function(){

	console.log("fade js working");

//start with only work section showing 

	$('#about').hide();
	$('#contact').hide();

//get the section tags from the DOM
	var work = $('#work').html();
	var about = $('#about').html();
	var contact = $('#contact').html();

console.log(work, about, contact);

	$('#nav-work').on('click', function(){
		$('#wrapper').fadeOut(1000, function(){
			$('#wrapper').html(work).fadeIn(1000);
		});
	});

	$('#nav-about').on('click', function(){
		$('#wrapper').fadeOut(1000, function(){
			$('#wrapper').html(about).fadeIn(1000);
		});
	});

	$('#nav-contact').on('click', function(){
		$('#wrapper').fadeOut(1000, function(){
			$('#wrapper').html(contact).fadeIn(1000);
		});
	});

});






