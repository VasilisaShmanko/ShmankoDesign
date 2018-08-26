	$(document).ready(function() {

	    /* mobile check */
	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	        // $('html, body').css('min-width', '1320px').addClass('mobile');
	        // $('html').css('width', window.innerWidth + 'px');
	    }


	    $('.js-hamburger').on('click', function(e) {
	        e.preventDefault();
	        $(this).toggleClass('is-active');
	        $('.menu').toggleClass('menu_active');
	    });





	    /*SCROLL TO*/
	    $('a[href^="#"]').on('click', function(event) {
	        var target = $($(this).attr('href'));
	        if (target.length) {
	            event.preventDefault();
	            $('html, body').animate({
	                scrollTop: target.offset().top
	            }, 1500);
	        }
	    });




	    $('.up-button').on('click', function(e) {
	        e.preventDefault();
	        $('html, body').animate({
	            scrollTop: 0
	        }, 700);

	    });

	    if ($('.up-button').length) {
	        window.onscroll = function() {
	            var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
	            if (topToDocument > 800) {
	                $('.up-button').addClass('up-button_show');
	            } else {
	                $('.up-button').removeClass('up-button_show');
	            }
	        }
	    }


	    /* SLICK_SLIDER */
	    if ($('.slick').length) {
	        $('.slick').slick({
	            slidesToShow: 2,
	            slidesToScroll: 1,
	            dots: true,
	            centerMode: false,
	            prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
	            nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>',
	            centerPadding: '30px',
	            touchMove: false,
	            draggable: false,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 2,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    };

	});