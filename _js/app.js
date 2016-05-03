$(document).ready(function(){
	var SLIDER_INTERVAL = 8000;
	intervalId = startInterval(SLIDER_INTERVAL);
	addEventHandlers(intervalId, SLIDER_INTERVAL);
});

function addEventHandlers(intervalId, SLIDER_INTERVAL){
	$('#arrow-next').click(function(e) {
		e.preventDefault();
		slideToNext();
	});


	$('#arrow-prev').click(function(e) {
		e.preventDefault();
		slideToPrev();
	});
	
	$("#jumbotron").mouseenter(function(){
		if( intervalId != undefined){
			clearInterval(intervalId);
		}
 	}).mouseleave(function(){
		if( intervalId != undefined){
			intervalId = startInterval(SLIDER_INTERVAL);
		} 
 	});
 	
 	$('.dot').click(function() {
 		slideToIndex( $(this).index() );
 	});
}

function fadeOutIn( $currSlide, $nextSlide, $currDot, $nextDot ) {
	$currSlide.fadeOut(600).removeClass('active-slide');
	$nextSlide.fadeIn(600).addClass('active-slide');

	$currDot.removeClass('active-dot');
	$nextDot.addClass('active-dot');
}

function slideToNext(){
	var currentSlide = $('.active-slide'),
		nextSlide = currentSlide.next(),
		currentDot = $('.active-dot'),
		nextDot = currentDot.next();

	if(nextSlide.length === 0) {
		nextSlide = $('.slide').first();
		nextDot = $('.dot').first();
	}
	fadeOutIn(currentSlide, nextSlide, currentDot, nextDot);
}

function slideToPrev(){
	var currentSlide = $('.active-slide'),
		prevSlide = currentSlide.prev(),
		currentDot = $('.active-dot'),
		prevDot = currentDot.prev();

	if(prevSlide.length === 0) {
		prevSlide = $('.slide').last();
		prevDot = $('.dot').last();
	}
	
	fadeOutIn(currentSlide, prevSlide, currentDot, prevDot);
}

function slideToIndex(index){
	var currentSlide = $('.active-slide'),
		currentDot = $('.active-dot'),
		nextSlide = $('.slide:eq( ' + index + ' )'),
		nextDot = $('.dot:eq( ' + index + ' )' );

	if ( !currentSlide.is(nextSlide) ){
		fadeOutIn(currentSlide, nextSlide, currentDot, nextDot);
	}
}

function startInterval(lengthOfTime){
	return intervalId = setInterval( function(){
			slideToNext();
		}, lengthOfTime);
}