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
	$('.wrapper.home').ready(function() {
		$('.header_main_logo img').attr('src','img/logo-white.png');
		$('.header_main_logo img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	});
	$('.wrapper.about-us').ready(function() {
		$('.header_main_logo.about-us img').attr('src','img/logo-white.png');
		$('.header_main_logo.about-us img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	});
	$('.wrapper.template').ready(function() {
		$('.header_main_logo.template img').attr('src','img/logo-white.png');
		$('.header_main_logo.template img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	});
	$('.article-page_add-comment_title .__add-comment').click(function() {
		$('.article-page_add-comment_form').toggleClass('open')
	});
	$('.header_menu_container_img a img').attr('src','img/logo-white.png');
	$('.header_menu_container_img a img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
	$('.wrapper.articles-page, .wrapper.page-dev').ready(function() {
		$('.header_main_logo a img').attr('src','img/top-logo.png');
		$('.header_main_logo a img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
	});
	if ($(window).width() < 993) {
		$('.wrapper.template.empty').ready(function() {
			$('.footer-container_logo img').attr('src','img/top-logo.png');
			$('.footer-container_logo img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
		});
	};
	if ($(window).width() < 993) {
		$('.footer-container_logo img').attr('src','img/top-logo.png');
		$('.footer-container_logo img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
		$('.wrapper.about-us').ready(function() {
			$('.footer-container_logo img').attr('src','img/logo-white.png');
			$('.footer-container_logo img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
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
	$('.page-development_content_pos_list li .__btn').click(function() {
		$('.page-development_content').addClass('open')
	});
	$('.page-development_content_pos_positions_position .__btn-close').click(function() {
		$($(this)).parent().removeClass('active');
		$('ul.page-development_content_pos_list li.active').removeClass('active');
		$('.page-development_content').removeClass('open');
		$()
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

});
})(jQuery);
(function($) {
	$(function() {
		$("ul.page-development_content_pos_list").on("click", "li:not(.active)", function() {
			$(this)
				.addClass("active")
				.siblings()
				.removeClass("active")
				.closest("div.page-development_content_pos")
				.find("div.page-development_content_pos_positions_position")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active")
				$('html, body').animate({
					scrollTop: $('.page-development_content').offset().top
				}, 1000);
		});
		if ($(window).width() <= 768) {
			$('.page-development_content_pos_list li .__btn').click(function() {
				$('.header_menu').css('z-index', '-1');
				$('body').css('overflow', 'hidden');
			});
			$('.page-development_content_pos_positions_position .__btn-close').click(function() {
				$('body, .header_menu').removeAttr('style');
			});
		};
	});
})(jQuery);
$(window).scroll(function () {
	if ($('.wrapper').hasClass('template')) {
		if ($(this).scrollTop() > 1220) {
			 $('.header_soc_list li a, .header_lang_list li a').css({'color': '#4f525e'})
		} else {
			$('.header_soc_list li a, .header_lang_list li a').removeAttr('style')
		}
	};
	if ($(window).scrollTop() > 500 ) {
		$('.header_menu_button, .header_soc_list, .header_lang_list').addClass('animated').removeAttr('style')
	};
	$('.about-us-page_team_people').waypoint(function() {
		$('.about-us-page_team_people-container-first-line, .about-us-page_team_people-container-second-line').addClass('__open')
	});
});