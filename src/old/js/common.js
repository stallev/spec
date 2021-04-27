$(document).ready(function() {

	$(".button-wr").magnificPopup({
		type: 'inline',
    removalDelay: 500, 
    callbacks: {
    	beforeOpen: function () {
    		this.st.mainClass = this.st.el.attr('data-effect');
    	}
    },
    midClick: true 
  });
	
  $(".home-slider").owlCarousel({
        animateOut: 'fadeOut',
        items : 1,  
        margin: 0,                    
        nav: true,   
        loop: true,   
        singleItem : true,        
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    }); 


	$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });

	$(".toggle_mnu").click(function() {
		$(".main-mnu").toggleClass("active");
	});

	Cozy = {    
		init: function () {
			var $tis = this;                            
			$tis.events();
		},

		events: function () {
			var $tis = this; 
			$tis.stickyNav();
		},

		stickyNav: function () {

			var $navSection = $('#nav-section');

			$navSection.waypoint('sticky');

			$('body').waypoint(function (dir) {
				if (dir === "down") {
					$navSection.addClass('shrink');
				} else {
					$navSection.removeClass('shrink');
				}
			}, { offset: -20 });
		},           

	};

	Cozy.init();	

	$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".header-carousel").find(".home-slider h2").height("auto").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
   }); 

	$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".perfomance-carusel").find(".perf-text p").height("auto").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
   }); 

	
   
	$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".catalog-wrap").find(".service-item-head h3").height("auto").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
   });

	$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".catalog-wrap").find(".perf-text p").height("auto").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
   });

	$(window).on("load resize", function () {
    var maxHeight = 0;
    $(".service-item").find(".service-item-head h3").height("auto").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    }).height(maxHeight);
   });

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

   $(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});	

});

$(window).load(function() {


}); 

(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$(document).on('scroll',function(e){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				$('nav').addClass('navbar-scroll');
				$('#logo').attr('src', 'img/logo/logo-blue.png');
			}
			else {
				$('nav').removeClass('navbar-scroll');
				$('#logo').attr('src', 'img/logo/logo.png');
			}
		});
		
    });

}(jQuery));	



$(document).ready( function() {

	if($('.slick-carousel').length > 0) {
		$('.recent-works.slick-carousel .portfolio-container').slick({
			dots: true,
			slidesToShow: 3,
			cssEase: 'ease-in',
			prevArrow: '<button type="button" data-role="none" class="btn slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="btn slick-next">Next</button>',
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('#carousel-hero .carousel-inner').slick({
			speed: 800,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2500,
			prevArrow: '<button type="button" data-role="none" class="carousel-control left slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="carousel-control right slick-next">Next</button>',
		});
	}

});


jQuery(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
});