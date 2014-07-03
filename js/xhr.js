$(function() {

	slickSlide('.slide', 500);
	slickSlide('.slide-text', 300);
	
}); // $(function)

function slickSlide(elem, speed) {
	$(elem).slick({
		infinite			: true,
		speed 				: speed,
		arrows				: false,
		fade					: true,
		swipe					: true,
		autoplay 			: true,
		autoplaySpeed : 6000
	});
}