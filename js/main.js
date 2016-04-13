var mainJs = (function () {
 		
 		// Avoid `console` errors in browsers that lack a console.
		(function() {
		    var method;
		    var noop = function () {};
		    var methods = [
		        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		        'timeStamp', 'trace', 'warn'
		    ];
		    var length = methods.length;
		    var console = (window.console = window.console || {});
		
		    while (length--) {
		        method = methods[length];
		
		        // Only stub undefined methods.
		        if (!console[method]) {
		            console[method] = noop;
		        }
		    }
		}());
		
		var jumpNav = function(){
			$('.primary-nav a').on('click', function(e){
				
				var id = $(this).attr('href');
				
				$('html, body').stop().animate({
					scrollTop : $(id).offset().top - 100
				}, 200, function(){
					closeNav();
				});
				
				e.preventDefault();
			});
		}
		
		var openNav = function(){
			$('.primary-nav').addClass('isActive');
 			$('.mobile-nav-toggle').find('.fa-list').removeClass('fa-list').addClass('fa-close');
		}
		
		var closeNav = function(){
			$('.primary-nav').removeClass('isActive');
	 		$('.mobile-nav-toggle').find('.fa-close').removeClass('fa-close').addClass('fa-list');
		}
 		
 		var mobileNavToggle = function(){
	 		$('.mobile-nav-toggle').on('click', function(e){
		 		
		 		var isActive = $('.primary-nav').hasClass('isActive');
		 		
		 		if(!isActive){
		 			openNav();
		 		}else{
			 		closeNav();
		 		}
		 		
		 		e.preventDefault();
	 		});
 		}
 		
 		var slick = function() {
			$('.js-projects').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				nextArrow: $('.js-projects-next'),
				prevArrow: $('.js-projects-previous'),
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 640,
					settings: {
						slidesToShow: 1
					}
				}]
			});
			
			$('.js-news').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				nextArrow: $('.js-news-next'),
				prevArrow: $('.js-news-previous'),
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 640,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		}
 		
        function init() {
            //Init Here
            mobileNavToggle();
            jumpNav();
            slick();
        }
 
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            init 	:	init
        };
})();