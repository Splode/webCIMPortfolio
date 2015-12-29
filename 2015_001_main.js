// Primary jQuery Functions
$(document).ready(function() {
	
	// Mobile menu icon toggle
	$(".menu__icon").click(function(){
		$(".menu--mobile").slideToggle("slow", function() {
			$(".menu--mobile").toggleClass("menu--mobile--active");
		});
		console.log("works");
	});
	//Mobile menu link toggle
	$(".menu--mobile a").click(function(){
		$(".menu--mobile").slideToggle("slow", function() {
			$(".menu--mobile").toggleClass("menu--mobile--active");
		});
		console.log("works");
	});
	//smooth scroll
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 750);
		return false;
	});
});