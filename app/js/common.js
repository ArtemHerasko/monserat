$(function() {
	$('#my-menu').mmenu({
		'offCanvas': {
			'position': 'right',
			'zposition' : "front"
		},
		'extensions': ['theme-dark', 'fx-listitems-slide','pagedim-black']
	});



	var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

	var $menu = $("#top-menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 80 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed-header");
            } else if($(this).scrollTop() <= 80 && $menu.hasClass("fixed-header")) {
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
    nav: true,
    navText:[,],
    singleItem: true,
    center: true,
    loop: true
	});

$(".testimonials-slider").owlCarousel({
    nav: true,
    navText:[,],
    loop: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        992:{
            items:3
        }
      }
	});
$(".client-slider").owlCarousel({
    
    loop: true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
         768:{
            items:4
        },
        992:{
            items:5
        }
      }
	});
$(".blog-slider").owlCarousel({
    loop: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        992:{
            items:3
        }
      }
	});
});
