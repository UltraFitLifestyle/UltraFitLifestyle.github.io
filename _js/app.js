$(document).ready(function(){
	intervalId = startInterval();
	addEventHandlers(intervalId);
});

function addEventHandlers(intervalId){
	$('.arrow-next').click(function(e) {
		e.preventDefault();
		slideToNext();
	});


	$('.arrow-prev').click(function(e) {
		e.preventDefault();
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}
		
		fadeOutIn(currentSlide, prevSlide, currentDot, prevDot);
	});
	
	$("#jumbotron").mouseenter(function(){
		if( intervalId != undefined){
			clearInterval(intervalId);
		}
 	}).mouseleave(function(){
		if( intervalId != undefined){
			intervalId = startInterval();
		} 
 	});
}

function fadeOutIn( $currSlide, $nextSlide, $currDot, $nextDot ) {
	$currSlide.fadeOut(600).removeClass('active-slide');
	$nextSlide.fadeIn(600).addClass('active-slide');

	$currDot.removeClass('active-dot');
	$nextDot.addClass('active-dot');
}

function slideToNext(){
	var currentSlide = $('.active-slide');
	var nextSlide = currentSlide.next();

	var currentDot = $('.active-dot');
	var nextDot = currentDot.next();

	if(nextSlide.length === 0) {
		nextSlide = $('.slide').first();
		nextDot = $('.dot').first();
	}
	fadeOutIn(currentSlide, nextSlide, currentDot, nextDot);
}

function startInterval(){
	return intervalId = setInterval( function(){
			slideToNext();
		}, 1000 );
}