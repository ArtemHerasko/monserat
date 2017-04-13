$(function() {

	

	$('#my-menu').mmenu({
		'offCanvas': {
			'position': 'right'
		},
		'extensions': ['theme-dark', 'fx-listitems-slide']
	});

	var api = $('#my-menu').data( 'mmenu' );
	api.bind( 'open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	$(".carousel-slider").owlCarousel({
		loop: true,
		nav: true,
		navText: ['<span class="left-arrow"></span>','<span class="right-arrow"></span>'],
		dots: true,
		dotsEach:true,
		smartSpeed:700,
		 responsive:{
        0:{
            items:1
        }
    }

	});
});
