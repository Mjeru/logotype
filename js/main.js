$(function() {

	$('select').styler();
	$(`.slider`).slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	  });
	$(`.news__slider`).slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	  });
});
