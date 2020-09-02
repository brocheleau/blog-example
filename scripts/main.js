$(function() {
	$(".toggle-collapse").click(function() {
		$(".nav").toggleClass("collapse");
	});


	//owl carousel for blog
	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
		dots:false,
		nav:true,
		navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
		responsive:{
		    0: {
		        items: 1
		    },
		    320: {
		        items: 1
		    },
		    560: {
		        items: 2
		    },
		    960: {
		        items: 3
		    }
		}
	});

	//click the arrow in the footer section to scroll up to top of page
	$(".move-up").click(function() {
		$("html, body").animate({
			scrollTop:0
		}, 750);
	});
	
});
