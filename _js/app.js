$(document).ready(function(){
	animateJumbotron();
});

function animateJumbotron(){
	var $imageDivs = $('.images');
	var $active = $imageDivs.find('.active');
	var $hidden = $imageDivs.find('.hidden');
	$active.fadeOut(1000);
	$hidden.fadeIn(1000);
	$active.removeClass('active').addClass('hidden');
	$hidden.removeClass('hidden').addClass('active');	
	setTimeout(animateJumbotron, 2000);
}