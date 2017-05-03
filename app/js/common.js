$(function() {

	

	$('#my-menu').mmenu({
		'offCanvas': {
			'position': 'right'
		},
		'extensions': ['theme-dark', 'fx-listitems-slide']
	});

	var $menu = $("#top-menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 180 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed-header");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed-header")) {
                $menu.removeClass("fixed-header").addClass("default");
            }
        });
	
	$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp(150).prev().removeClass("active");
	$(this).next().not(":visible").slideDown(150).prev().addClass("active");
	})

	var api = $('#my-menu').data( 'mmenu' );
	api.bind( 'open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	$(".carousel-slider").owlCarousel({
		
    items:1,
    singleItem: true,
    center: true,
    loop: true
	});
});
