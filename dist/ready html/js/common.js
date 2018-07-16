$(document).ready(function() {
	$('.header_menu_button .__btn').click(function() {
		$($(this)).toggleClass('open');
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
		$('body').css({'overflow': 'hidden'});
	});
	$('.header_menu_container_close').click(function() {
		$('.header_menu_container').removeClass('open');
		$('.header_menu_button .__btn').removeClass('open');
		$('body').removeAttr('style')
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
	if ($(window).width() < 993) {
		$('.wrapper.template.empty').ready(function() {
			$('.footer-container_logo img').attr('src','img/top-logo.png');
			$('.footer-container_logo img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
		});
	}
	if ($(window).width() < 993) {
		$('.footer-container_logo img').attr('src','img/top-logo.png');
		$('.footer-container_logo img').attr('srcset','img/top-logo@2x.png 2x, img/top-logo@3x.png 3x');
		$('.wrapper.about-us').ready(function() {
			$('.footer-container_logo img').attr('src','img/logo-white.png');
			$('.footer-container_logo img').attr('srcset','img/logo-white@2x.png 2x, img/logo-white@3x.png 3x');
		});
}
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
				.addClass("active");
		});
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
	if ($(window).scrollTop() > 1120) {
		$('.header_menu_button .__btn').addClass('__scroll')
	} else {
		$('.header_menu_button .__btn').removeClass('__scroll')
	}
});
// ANIMATIONS
$(document).ready(function() {
	$("body").waypoint(function() {
		$('header, .header_soc, .header_lang, .header_menu, .case-template, .case-template_start').addClass('__open');
	}, { offset: '100%'});
	$('.case-template_start_describe').waypoint(function() {
		$('.case-template_start_describe_text_about, .case-template_start_project_team, .case-template_describe_img').addClass('__open')
	}, {offset: '250%'});
	$('.case-template_describe_img').waypoint(function() {
		$('.case-template_describe_text').addClass('__open')
	}, {offset: '150%'});
	$('.case-template-empty-full').waypoint(function() {
		$('.case-template-empty-full_content_position-left-img, .case-template-empty-full_content_position-center, .case-template-empty-full_content_position-right-img').addClass('__open')
	}, {offset: '100%'});
	$('.home-page_slider').waypoint(function() {
		$('footer').addClass('__open')
	});
	// HOME PAGE
	$('body').waypoint(function() {
		$('.home-page_start_title, .home-page_start_content, .article-page_start_title .__title, .article-page_start_img, .article-page_start_info').addClass('__open')
	});
	$('.home-page_works').waypoint(function() {
		$('.home-page_works_title .__title, .home-page_works_position_full').addClass('__open');
	}, {offset: '50%'});
	$('.home-page_works_position_double').waypoint(function() {
		$('.home-page_works_position_double_big-height, .home-page_works_position_double_sm-height').addClass('__open')
	}, {offset: '50%'});
	$('.article-page_start_describe').waypoint(function() {
		$('.article-page_start_describe .__content').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_task').waypoint(function() {
		$('.article-page_task_title, .article-page_task_list').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_slider').waypoint(function() {
		$('.article-page_slider_container').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_ui').waypoint(function() {
		$('.article-page_ui_title, .article-page_ui_content .__title, .article-page_ui_list').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_ui_content_text .__content').each(function() {
    var $thisAr = $(this);
    $thisAr.waypoint(function() {
        $thisAr.addClass('__open');
    }, { offset: '160%' });
	});
	$('.article-page_functions').waypoint(function() {
		$('.article-page_functions_title, .article-page_functions_content_list').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_functions_content_more').waypoint(function() {
		$('.article-page_functions_content_more .__title, .article-page_functions_content_more .__describe').addClass('__open')
	}, {offset: '100%'});
	$('.article-page_functions_content_more_position').each(function() {
		var $thisArt = $(this);
		$thisArt.waypoint(function() {
			$thisArt.addClass('__open');
		}, {offset: '100%'});
	});
	$('body').waypoint(function() {
		$('.cases-page_title .__title, .cases-page_tabs_list, .cases-page_content_position-full').addClass('__open');
	}, {offset: '100%'});
	$('.cases-page_content_position-double').waypoint(function(){
		$('.cases-page_content_position_col_position.aqua, .cases-page_content_position_col_position.white, .cases-page_content_position_col_position.black, .cases-page_content_position_col_position.blue').addClass('__open')
	}, {offset: '100%'});
	$('body').waypoint(function() {
		$('.about-us-page-start_title .__title, .about-us-page-start_title .__content').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page-start_value').waypoint(function() {
		$('.about-us-page-start_value_logo, .about-us-page-start_value_content').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page_team').waypoint(function() {
		$('.about-us-page_team_title').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page_team_people-container-first-line').waypoint(function() {
		$('.about-us-page_team_people-container-first-line').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page_team_people-container-second-line').waypoint(function() {
		$('.about-us-page_team_people-container-second-line').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page_work_container').waypoint(function() {
		$('.about-us-page_work_title .__title, .about-us-page_work_title .__content').addClass('__open')
	}, {offset: '100%'});
	$('.about-us-page_work_table').waypoint(function() {
		$('.about-us-page_work_table table').addClass('__open')
	}, {offset: '100%'});
	$('body').waypoint(function(){
		$('.blog-page_starts_positions_container').addClass('__open')
	}, {offset: '100%'});
	$('.blog-page_articles-container').waypoint(function(){
		$('.blog-page_articles_sort').addClass('__open')
	}, {offset: '100%'});
	$('body').waypoint(function() {
		$('.contacts-page-start_title, .contacts-page-start_check').addClass('__open')
	}, {offset: '100%'});
	$('.contacts-page-start_info').waypoint(function() {
		$('.contacts-page-start_info_address, .contacts-page-start_info_messengers').addClass('__open')
	}, {offset: '100%'});
});