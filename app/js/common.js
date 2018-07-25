imagesLoaded( document.querySelectorAll('img'), () => {
	document.body.classList.remove('loading');
});

Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));
	new hoverEffect({
		parent: el,
		intensity: el.dataset.intensity || undefined,
		speedIn: el.dataset.speedin || undefined,
		speedOut: el.dataset.speedout || undefined,
		easing: el.dataset.easing || undefined,
		hover: el.dataset.hover || undefined,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: el.dataset.displacement
	});
});
$(document).ready(function() {
	$(".home-page_start_scroll-btn").on("click","a", function (event) {
		event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1500);
	});
	$('body, html').scroll(function(){ return false; }); // allow no scrolling
	$('.header_menu_button .__btn').click(function() {
		// $($(this)).toggleClass('open');
		$('.header_menu_button .__btn:before, .header_menu_button .__btn:after').click(function() {
			$('.header_menu_button .__btn').removeClass('open')
		});
	 });
	element = $('.header_main_links .__line'),
	element2 = $('.header_main_list')
	element2.hover(function() {
		element.toggleClass('test');
	});
	$('#js_home_slider').owlCarousel({
		items: 5,
		margin: 80,
		autoplay: true,
		dots: false,
		autoplayTimeout: 1000,
		loop: true,
		responsive: {
			1200: {
				items: 5
			},
			992: {
				items: 4
			},
			768: {
				items: 3
			},
			320: {
				items: 2
			}
		}
	});
	$('#js_slider_article-page').owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		navText: ['<i class="icon-keyboard_arrow_left"></i>', '<i class="icon-keyboard_arrow_right"></i>'],
		loop: true,
		responsive: {
			0: {
				nav: false
			},
			992: {
				nav: true
			}
		}
	});
	$('.contacts-page_feedback-from_container input.__input, .contacts-page_feedback-from_container textarea.__textarea, .article-page_add-comment_form .__input, .article-page_add-comment_form .__textarea ').change(function() {
		let el = $(this).parent();
		if ($(this).val()) {
			el.addClass('success');
			el.removeClass('error');
		} else {
			el.addClass('error');
			el.removeClass('success');
		}
	});
	$('.contacts-page_feedback-from_container form input[type=email]').on('blur', function () {
		let email = $(this).val();
	
		if (email.length > 0
		&& (email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i) || []).length !== 1) {
			$('.contacts-page_feedback-from_container form input[type=email] + label .__incorrect').css({'opacity': '1'});
			$($(this)).parent().addClass('false');
		}
		else {
			$('.contacts-page_feedback-from_container form input[type=email] + label .__incorrect').css({'opacity': '0'});
			$($(this)).parent().removeClass('false');
		}
	});
		$('.contacts-page_feedback-from_container form input[type=tel]').on('blur', function () {
		let tel = $(this).val();
	
		if (tel.length > 0
		&& (tel.match(/^\+\d[\d\(\)\ -]{4,14}\d$/) || []).length !== 1) {
			$('.contacts-page_feedback-from_container form input[type=tel] + label .__incorrect').css({'opacity': '1'});
			$($(this)).parent().addClass('false');
		}
		else {
			$('.contacts-page_feedback-from_container form input[type=tel] + label .__incorrect').css({'opacity': '0'});
			$($(this)).parent().removeClass('false');
		}
	});
		$('.contacts-page_feedback-from_container form').submit(function() {
			$('.contacts-page_thnx').toggleClass('open');
			$('html, body').animate({
				scrollTop: $(".contacts-page_thnx").offset().top
		}, 1000);
			$('.contacts-page_feedback-from').removeClass('open');
			$('body').removeAttr( 'style' );
			return false;
		});
	$('.header_menu_button .__btn').click(function() {
		$('.header_menu_container').toggleClass('open');
		setTimeout(function() {
			$('body').css({'overflow': 'hidden'});
		}, 800)
		setTimeout(function() {
			$('.header_menu_container_bgi').toggleClass('close')
		}, 1000);
	});
	$('.header_menu_container_close').click(function() {
		setTimeout(function() {
			$('.header_menu_container').removeClass('open');
		}, 700);
		$('.header_menu_button .__btn').removeClass('open');
		$('.header_menu_container_bgi').removeClass('close').addClass('close-up');
		setTimeout(function() {
			$('body').removeAttr('style');
		}, 800);
		setTimeout(function() {
			$('.header_menu_container_bgi').removeClass('close-up')
		}, 2000);
	});
	if ($('.wrapper').hasClass('home')) {
		$('.header_main_logo img').attr('src','img/logo-white.png');
		$('.header_main_logo img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
		$('.footer-container_logo img').attr({
			src: 'img/logo-white.png',
			srcset:'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
	};
	if ($('.wrapper').hasClass('boxforward')) {
		$('.header_main_logo img').attr('src','img/logo-white.png');
		$('.header_main_logo img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	};
	// $('.wrapper.template').ready(function() {
		$('.wrapper.empty .header_main_logo a img').attr({
			src:'img/logo-white.png',
			srcset: 'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
		// $('.wrapper.template.empty .header_main_logo a img').attr('srcset',);
	// });
	$('.article-page_add-comment_title .__add-comment').click(function() {
		$('.article-page_add-comment_form').toggleClass('open')
	});
	if ($('.wrapper').hasClass('about-us')) {
		$('.header_menu_container_img a img').attr('src','img/logo-white.png');
		$('.header_menu_container_img a img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	};
	if ($('.wrapper').hasClass('empty')) {
		$('.wrapper.empty .header_main_logo a img').attr({
			src:'img/logo-white.png',
			srcset: 'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
	};
	if ($('.wrapper').hasClass('aqua')) {
		$('.header_menu_button').addClass('aqua')
	};
	if ($(window).width() < 993) {
		if ($('.wrapper').hasClass('empty')) {
			$('.footer-container_logo img').attr('src','img/top-logo.png');
			$('.footer-container_logo img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
		};
	};
	if ($('.wrapper').hasClass('about-us') || $('.wrapper').hasClass('main')) {
		$('.footer-container_logo img').attr({
			src: 'img/logo-white.png',
			srcset:'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
		$('.header_menu_container_img a img').attr({
			src: 'img/logo-white.png',
			srcset:'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
		$('.header_main_logo a img').attr({
			src: 'img/logo-white.png',
			srcset:'img/logo-white@2x.png 2x, img/logo-white@3x.png 3x'
		});
	};
});
$(function() {
	var $el, leftPos, newWidth;
	var $magicLine = $(".header_main_links .__line");
	
	$magicLine
			.css("left", $(".header_main_list a").position().left)
			.data("origLeft", $magicLine.position().left)
			
	$(".header_main_list li").find("a").hover(function() {
			$el = $(this);
			leftPos = $el.position().left;
			
			$magicLine.stop().animate({
					left: leftPos,
			});
	}, function() {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
			});    
	});
	var tabLink = $('.blog-page_articles_sort_list li a');
	tabLink.click(function() {
		$('html, body').animate({
			scrollTop: $($(this)).offset().top
		}, 800);
	});
	$('.cases-page_tabs_list li a').click(function() {
		$('html, body').animate({
			scrollTop: $($(this)).offset().top
		}, 800);
	});
	$('.page-development_content_pos_list li').addClass('close')
	$('.page-development_content_pos_list li.close .__btn').click(function() {
		$('.page-development_content_pos_list li.close').removeClass('open')
		$(this).parent().toggleClass('open').removeClass('close')
	});
	$('.page-development_content_pos_list li.open .__btn').click(function() {
		$(this).removeClass('open').addClass('close')
	});
	$('.contacts-page-start_check_input-container .__input-radio').click(function() {
		$('.contacts-page_feedback-from').addClass('open');
		$('body').css({'overflow': 'hidden'})
	});
	$('.contacts-page_feedback-from_container .__btn-close').click(function() {
		$('.contacts-page_feedback-from').removeClass('open');
		$('body').removeAttr( 'style' );
	});
});

(function($) {
$(function() {

	$('.blog-page_articles_sort_list').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.blog-page_articles-container').find('.blog-page_articles_positions').removeClass('active').eq($(this).index()).addClass('active')
	});
	$('.cases-page_tabs_list').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.cases-page_container').find('.cases-page_content').removeClass('active').eq($(this).index()).addClass('active')
	});
});
})(jQuery);
(function($) {
	$(function() {
		
	});
})(jQuery);
$(window).scroll(function () {
	if ($('.wrapper').hasClass('template')) {
		if ($(this).scrollTop() > 1220) {
			 $('.header_soc_list li a, .header_lang_list li a').addClass('__black')
		} else {
				$('.header_soc_list li a, .header_lang_list li a').removeClass('__black')
		}
	};
	if ($('.wrapper').hasClass('boxforward')) {
		if ($(this).scrollTop() > 1220) {
			$('.header_menu_button').addClass('__black')
		} else {
			$('.header_menu_button').removeClass('__black')
		}
	};
	if ($(window).scrollTop() > 500 ) {
		$('.header_menu_button, .header_soc_list, .header_lang_list').addClass('animated').removeAttr('style')
	};
	$('.about-us-page_team_people').waypoint(function() {
		$('.about-us-page_team_people_position_content').addClass('__open')
	}, 1500);
});
