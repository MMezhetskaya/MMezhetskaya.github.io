$(document).ready(function () {

	$('.sponsorslider').slick({
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 7,
		responsive: [{
				breakpoint: 1340,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});
});