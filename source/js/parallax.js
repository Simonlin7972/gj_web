$(document).ready(function() {

	redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });


});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(800-(scrolled*.95))+'px');
	$('#parallax-bg2').css('top',(600-(scrolled*.8))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.95))+'px');
	$('#feature-00').css('top',(0-(scrolled*.15))+'px');
	$('#feature-01').css('top',(400-(scrolled*.25))+'px');
	$('#feature-02').css('top',(600-(scrolled*.2))+'px');
	$('#feature-03').css('top',(550-(scrolled*.2))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  0;
	var section3Top =  0;
	var section4Top =  0;

}
