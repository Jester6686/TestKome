$(function(){
	if ($('body').is('.main_page')) {
	new WOW().init();
	};
  $(window).resize(function() {
	var  new_height = $(window).height();
	new_height = new_height - (new_height/100)*6 - 37;
	$('.main_menu_contacts').css({top: new_height + 'px'});
  });
	var normalBrowser = true;
	if ($('.page_block_1_svg').css('display') == 'none') {
		normalBrowser = false;
	}

	if ($(window).width() > 1920) {
		var mainMenuLeft = ($(window).width() - 1920) / 2;
		$('.main_menu_wrapper').css('left', mainMenuLeft);
	};

	var closeMenuOnScroll = undefined;

	$('.open_menu_btn').click(function(){
		$('.main_menu_inner').toggleClass('main_menu_open').toggleClass('main_menu_closed');
		if ($(window).width() > 768) {
			$('.logo').toggleClass('logo_shift');
		};
		if (closeMenuOnScroll == undefined) {
			closeMenuOnScroll = $(window).scrollTop();
		} else {
			closeMenuOnScroll = undefined;
		};
		if ($(window).width() < 769) {
			$('body').toggleClass('body_menu_open');
		};
	});
	$(document).click(function (e) {
	    if ($('.main_menu_inner').has(e.target).length === 0 && $(window).width() > 768) {
	        $('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
	        $('.logo').removeClass('logo_shift');
	        closeMenuOnScroll = undefined;
	    };
	});
	$(document).on('click', '.right_menu_wrapper .lang_selector span', function(){
		if ($('.lang_selector ul').css('display') == 'none') {
			$('.right_menu_wrapper .lang_selector ul').slideDown(300);
		} else {
			$('.right_menu_wrapper .lang_selector ul').slideUp(300);
		};
	});
/*	$(document).on('load', 'this', function(){	
	 		 var cat_dinamic_h = $(window).height();
		 	cat_dinamic_h = cat_dinamic_h - (cat_dinamic_h/100)*6 - 37;
			$('.main_menu_contacts').css({top: cat_dinamic_h + 'px'});
			alert('------------------------');
		});
  	}); */
	$(document).on('click', '.lang_selector ul li a', function(event){
		if ($(window).width() < 769) {
			$('.right_menu_wrapper .lang_selector ul').slideUp(300);
			$('.right_menu_wrapper .lang_selector ul li').removeClass('active');
			$(event.target).parent('li').addClass('active');
			$('.right_menu_wrapper .lang_selector span').text($(event.target).text());
			return false;
		} else {
			$('.right_menu_wrapper .lang_selector ul li').removeClass('active');
			$(event.target).parent('li').addClass('active');
			return false;
		};
	});

	var svgBlockWidth = $(window).height() * 2.03;
	if (normalBrowser) {
		if (svgBlockWidth < $(window).width()) {
			$('.page_block_1_svg #layer_1').css({
				margin: '0 auto',
				display: 'block'
			});
		} else {
			var svgBlockLeft = (svgBlockWidth - $(window).width()) / 2;
			$('.page_block_1_svg #layer_1').css('margin-left', '-' + svgBlockLeft + 'px');
		};
	}

	var sloganFirstSize, sloganFirstHeight, sloganFirstLetter, sloganSecondSize, sloganSecondHeight;
	if ($(window).width() > 768 && $('body').hasClass('main_page')) {
		sloganFirstSize = 0.95 * ($(window).height() / 9.45);
		sloganFirstLetter = (sloganFirstSize * 50) / 1000;
		sloganFirstHeight = (sloganFirstSize / 100) * 70;
		sloganSecondSize = 0.48 * ($(window).height() / 9.45);
		sloganSecondHeight = 70 * (sloganSecondSize / 100);
		$('.slogan_text_1').css({
			fontSize: sloganFirstSize + 'px',
			letterSpacing: '-' + sloganFirstLetter + 'px',
			height: sloganFirstHeight + 'px',
			lineHeight: sloganFirstHeight + 'px'
		});
		$('.slogan_text_2').css({
			fontSize: sloganSecondSize + 'px',
			height: sloganSecondHeight + 'px',
			lineHeight: sloganSecondHeight + 'px'
		});
		setTimeout(function() {
			$('.slogan_content').css({
				width : $('.slogan_text_1').width() + 'px'
			});
			var sloganLinesWidth = ($('.slogan_text_1').width() / 100) * 66.81;
			$('.slogan_top_lines, .slogan_bottom_lines').css({
				width : sloganLinesWidth + 'px'
			});
		}, 500);

		if(!normalBrowser) {
			var prelodBlocksCounter = 1;
			var prelodBlocks = setInterval(function() {
				$('.load_blocks > div').removeClass().addClass('preload_' + prelodBlocksCounter);
				prelodBlocksCounter++;
				if (prelodBlocksCounter > 4) {
					prelodBlocksCounter = 1;
				};
			}, 300);
			$('.slogan_text_2').css({
				top: (sloganFirstHeight * 1.14) + 'px'
			});
			setTimeout(function() {
				clearInterval(prelodBlocks);
				$('.load_blocks').css('display', 'none');
				$('.main_wrapper').removeClass('no_cursor');
				$('.page_block_1_inner').css('opacity', '1');
				setTimeout(function() {
					$('.page_block_1_svg').css({
						opacity: '0',
						transition: 'all 1s linear'
					});
					setTimeout(function() {
						$('.slogan_top_lines').animate({
							top : '-20px',
							opacity: '1'
						}, 300, function(){
							$('.slogan_top_lines').animate({
								top : '-30px'
							}, 120);
						});
						$('.slogan_bottom_lines').animate({
							top : ((sloganFirstHeight * 1.14) - 10) + 'px',
							opacity: '1'
						}, 300, function(){
							$('.slogan_bottom_lines').animate({
								top : (sloganFirstHeight * 1.14) + 'px',
							}, 120);
						}); 
						setTimeout(function(){
							$('.logo').addClass('logo_shift');
							if ($(window).width() > 768) {
								$('.main_menu_left_shift').removeClass('main_menu_left_shift');
							} else {
								$('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
								$('.logo').toggleClass('logo_shift');
								$('.main_menu_left_shift').removeClass('main_menu_left_shift');
							};
							closeMenuOnScroll = $(window).scrollTop()
						}, 500);
						setTimeout(function(){
							$('.go_to_block_2').animate({
								bottom : '25px'
							}, 100);
						}, 1000);
					}, 750);
					setTimeout(function(){
						$('.slogan_all_text').animate({
							left : '0px'
						}, 150);
						setTimeout(function(){
							$('.slogan_text_2').animate({
								right: '2%',
								opacity: '1'
							}, 280);
							setTimeout(function(){
								$('.slogan_text_2').animate({
									right: '0%'
								}, 120);
							}, 280);
						}, 240)
					}, 650);
				}, 1000);
			}, 3000);
		} else {
			$('.slogan_text_2').css({
				top: (sloganFirstHeight * 1.14) + 'px'
			});
			setTimeout(function() {
				$('.main_wrapper').removeClass('no_cursor');
				$('.page_block_1_inner').css('opacity', '1');
				setTimeout(function() {
					$('.page_block_1_svg').css({
						opacity: '0',
						transition: 'all 1s linear'
					});
					setTimeout(function() {
						$('.slogan_top_lines').animate({
							top : '-20px',
							opacity: '1'
						}, 300, function(){
							$('.slogan_top_lines').animate({
								top : '-30px'
							}, 120);
						});
						$('.slogan_bottom_lines').animate({
							top : ((sloganFirstHeight * 1.14) - 10) + 'px',
							opacity: '1'
						}, 300, function(){
							$('.slogan_bottom_lines').animate({
								top : (sloganFirstHeight * 1.14) + 'px',
							}, 120);
						});
						setTimeout(function(){
							$('.logo').addClass('logo_shift');
							if ($(window).width() > 768) {
								$('.main_menu_left_shift').removeClass('main_menu_left_shift');
							} else {
								$('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
								$('.logo').toggleClass('logo_shift');
								$('.main_menu_left_shift').removeClass('main_menu_left_shift');
							};
							closeMenuOnScroll = $(window).scrollTop()
						}, 500);
						setTimeout(function(){
							$('.go_to_block_2').animate({
								bottom : '25px'
							}, 100);
						}, 1000);
					}, 750);
					setTimeout(function(){
						$('.slogan_all_text').animate({
							left : '0px'
						}, 150);
						setTimeout(function(){
							$('.slogan_text_2').animate({
								right: '2%',
								opacity: '1'
							}, 280);
							setTimeout(function(){
								$('.slogan_text_2').animate({
									right: '0%'
								}, 120);
							}, 280);
						}, 240)
					}, 650);
				}, 1000);
			}, 3000);
		};	
	} else if ($(window).width() < 769 && $('body').hasClass('main_page')) {
		$('.main_wrapper').removeClass('no_cursor');
		$('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
		setTimeout(function(){
			$('.main_menu_inner').removeClass('main_menu_left_shift');
		}, 500);
	} else if ($('body').not('.main_page')) {
		$('.main_wrapper').removeClass('no_cursor');
		$('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
		setTimeout(function(){
			$('.main_menu_inner').removeClass('main_menu_left_shift');
		}, 500);
	};
	
	$(window).scroll(function(){
		if (closeMenuOnScroll != undefined && $(window).width() > 768) {
			var closeMenuOnScrollValue = $(window).height() / 3;
			if ((closeMenuOnScroll - $(window).scrollTop()) > closeMenuOnScrollValue || ($(window).scrollTop() - closeMenuOnScroll) > closeMenuOnScrollValue) {
				$('.main_menu_inner').removeClass('main_menu_open').addClass('main_menu_closed');
		        $('.logo').removeClass('logo_shift');
		        closeMenuOnScroll = undefined;
			};
		};
	});
	
	$('.go_to_block_2 span').click(function(){
		var firstBlockHeight = $('.page_block_1').height();
		$('html, body').animate({
			scrollTop: firstBlockHeight
		}, 400);
	});
	/* new ver 
	function pageTitleSpan(spanmassive){
		for (spanCounter = 0; spanCounter < spanmassive.length; spanCounter++)
				spanmassive.eq(spanCounter).addClass('active_show');
	}; */
	/* old ver */
	function pageTitleSpan(spanmassive){
		var spanCounter = 0;
		var spanAddCounter = setInterval(function(){
			if (spanCounter < (spanmassive.length)) {
				spanmassive.eq(spanCounter).addClass('active_show');
				spanCounter++;
			} else {
				clearInterval(spanAddCounter);
			};
		}, 100);
	}; 
	$('.page_title').on('inview', function(event, isInView) {
		 var inscreen = $(event.target).find('.page_title_over').offset().top;
          inscreen -= $(document).scrollTop() ;
		if (isInView ) {
		
			pageTitleSpan($(event.target).find('.page_title_over > div > span'));
			setTimeout(function(){$(event.target).find('.page_title_under').animate({opacity: '1' }, 400); }, 400);
		/*	$(event.target).find('.page_title_over > div > span:nth-child(5n+1) > span:first-child').addClass('animated'); 
			setTimeout(function(){
				$(event.target).find('.page_title_over > div > span:nth-child(5n+1) > span:last-child').addClass('animated');
				$(event.target).find('.page_title_under').animate({
					opacity: '1'
				}, 400);
				setTimeout(function(){
					$(event.target).find('.page_title_over > div > span:nth-child(2n+1) > span:last-child').addClass('animated');
					$(event.target).find('.page_title_over > div > span:nth-child(4n+1) > span:last-child').addClass('animated');
					setTimeout(function(){
						$(event.target).find('.page_title_over > div > span:nth-child(2n) > span:last-child').addClass('animated');
						$(event.target).find('.page_title_over > div > span:nth-child(3n+1) > span:first-child').addClass('animated');
						setTimeout(function(){
							$(event.target).find('.page_title_over > div > span:nth-child(2n) > span:first-child').addClass('animated');
							$(event.target).find('.page_title_over > div > span:nth-child(4n+1) > span:first-child').addClass('animated');
							setTimeout(function(){
								$(event.target).find('.page_title_over > div > span:nth-child(2n+1) > span:first-child').addClass('animated');
								$(event.target).find('.page_title_over > div > span:nth-child(3n+1) > span:last-child').addClass('animated');
							}, 320);
						}, 320);
					}, 320); 
				}, 320); 
			}, 320); */
			/* --------------------------------------------- vertical lines show ---------------------------------------------------------------------------*/
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(1) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 1000);	}, 0);
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(8n) > span:first-child').animate({
					top: '0%',	opacity: '1'}, 600); 	}, 0);
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(11n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 600); 	}, 0);
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(4) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 500); 	}, 0);
			    /* ------------------------------ start at 200 -------------------------------------------- */
			
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(9n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 500);	}, 200);	
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(3) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 500); 	}, 200);	
			setTimeout(function(){ 	$(event.target).find('.page_title_over > div > span:nth-child(7n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 500); 	}, 200);	
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(6) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 300); 	}, 200);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(10n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 500); 	}, 200);
			 /* ------------------------------------------- start at 400 ----------------------------------------*/
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(1) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 430); 	}, 400);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(11n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 800); 	}, 400);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(7n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 400); 	}, 400);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(5) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 430);  }, 400);	 
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(5) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 430); 	}, 400);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(12n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 500); 	}, 400);
			 /* ------------------------------------------- start at 600 ----------------------------------------*/
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(9n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 600); }, 600);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(9n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 600);	
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(2) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 600); }, 600);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(4) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 600);	
		   /* ------------------------------------------- start at 700 ----------------------------------------*/
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(10n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 700);
		   /* ------------------------------------------- start at 700 ----------------------------------------*/
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(10n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 700);	
			 /* ------------------------------------------- start at 800 ----------------------------------------*/
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(9n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 500); }, 800);				
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(8n) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 800);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(7n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 800);	
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(6n) > span:first-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 800);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(5) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 600); }, 800);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(3) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 400); }, 800);
			setTimeout(function(){$(event.target).find('.page_title_over > div > span:nth-child(2) > span:last-child').animate({
					top: '0%',	opacity: '1' }, 300); }, 800);					
		/* --------------------------------------------- vertical lines animation end ------------------------------------------------------------------*/
			setTimeout(function(){
				$(event.target).find('.page_title_over_line_1').animate({
					left: '-1%',
					opacity: '1'
				}, 500);
			}, 800);
			setTimeout(function(){
				$(event.target).find('.page_title_over_line_2').animate({
					left: '1%',
					opacity: '1'
				}, 600);
			}, 1000);
		} else {
			setTimeout(function(){
			 	$(event.target).find('.active_show').removeClass('active_show');
				$(event.target).find('.page_title_under').css({
					opacity: '0'
				});
				$(event.target).find('span.animated').removeClass('animated');
				$(event.target).find('.page_title_over_line_1').css({
					left: '-100%',
					opacity: '0'
				});
				$(event.target).find('.page_title_over_line_2').css({
					left: '100%',
					opacity: '0'
				});
				$(event.target).find('.page_title_span_animate').css({ /* for all lines first */
					opacity: '0'
				});
			}, 320);
			$(event.target).find('.page_title_span_animate').css({ /* for all lines first */
					 top: '100%'
			});
			/* same ones move top  */
			$(event.target).find('.page_title_over > div > span:nth-child(1) > span:first-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(3) > span:first-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(5n) > span:first-child').css({ top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(7n) > span:first-child').css({ top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(8n) > span:first-child').css({ top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(4) > span:last-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(2) > span:last-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(6n) > span:last-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(11n) > span:last-child').css({	top: '-100%' });
			$(event.target).find('.page_title_over > div > span:nth-child(11n) > span:first-child').css({	top: '0%' }); 
			/*----------------------------------------------------------------- end moving top --------------------------------------- */

		};
    });

	$('section.page_block_2').one('inview', function(event){
		setTimeout(function(){
			$(event.target).find('.page_2_selects ul').addClass('active');
			setTimeout(function(){
				$(event.target).find('.page_2_selects').addClass('page_2_selects_active');
				$(event.target).find('.page_2_img_block').addClass('page_2_img_block_active');
			}, 1000);
		}, 1000);
	});
	$('.page_2_selects li').click(function(){
		if($(this).not('.active')) {
			$('.page_2_texts > div, .page_2_selects li, .page_2_img_block > div').removeClass('active');
			$('.page_2_texts > div').eq($(this).index()).addClass('active');
			$('.page_2_img_block > div').eq($(this).index()).addClass('active');
			$(this).addClass('active');
		}
	});
	if ($(window).width() > 992) {
		var pageThreeSlider = $('#page_3_slider').lightSlider({ 
				gallery: false,
				item: 3,
				slideMargin: 0,
				pager: false,
				controls: false,
				slideMove: 1,
				loop: false,
				enableDrag: true,
				enableTouch: true
			});
	} else if ($(window).width() > 768 && $(window).width() < 993) {
		var pageThreeSlider = $('#page_3_slider').lightSlider({ 
				gallery: false,
				item: 2,
				slideMargin: 0,
				pager: false,
				controls: false,
				slideMove: 1,
				loop: false,
				enableDrag: true,
				enableTouch: true
			});
	} else if ($(window).width() < 769) {
		var pageThreeSlider = $('#page_3_slider').lightSlider({ 
				gallery: false,
				item: 1,
				slideMargin: 0,
				pager: false,
				controls: false,
				slideMove: 1,
				loop: false,
				enableDrag: true,
				enableTouch: true
			});
	};
	$('.page_3_slider_prev').click(function(){
        pageThreeSlider.goToPrevSlide(); 
    });
    $('.page_3_slider_next').click(function(){
        pageThreeSlider.goToNextSlide(); 
    });
    $('#page_3_slider li').hover(
		function() {
			$(this).closest('ul').find('li .page_3_slider_li_container').removeClass('page_3_slider_hover');
			$(this).find('.page_3_slider_li_container').addClass('page_3_slider_hover');
		}, function() {
			$(this).find('.page_3_slider_li_container').removeClass('page_3_slider_hover');
		}
	);

	$('.page_block_4').one('inview', function(event){
		if ($(window).width() > 768) {
			setTimeout(function(){
				$('.page_4_gallery_wrapper').addClass('page_4_gallery_wrapper_active');
				setTimeout(function(){
					$('.page_4_gallery_container .page_4_gallery_item').eq(1).addClass('active_1');
					$('.page_4_gallery_container .page_4_gallery_item').eq(2).addClass('active_1');
					setTimeout(function(){
						$('.page_4_gallery_container .page_4_gallery_item').eq(2).addClass('active_2');
						setTimeout(function(){
							$('.page_4_top_text').addClass('page_4_top_text_active');
							$('.page_4_texts').addClass('page_4_texts_active');
						}, 1000);
					}, 500);
				}, 1000);
			}, 500);	
		};
	});
	$('.page_4_gallery_container .page_4_gallery_item').hover(
		function() {
			$(this).siblings('.page_4_gallery_item').removeClass('page_4_gallery_item_hover');
			$(this).addClass('page_4_gallery_item_hover');
		}, function() {
			$(this).removeClass('page_4_gallery_item_hover');
		}
	);

	var pageFiveSlider;
	if ($(window).width() > 768) {
		pageFiveSlider = $('#block_5_slider').lightSlider({ 
			gallery: false,
			item: 3,
			pager: false,
			controls: false,
			slideMove: 3,
			loop: false,
			enableDrag: true,
			enableTouch: true,
			slideMargin: 24
		});
	} else {
		pageFiveSlider = $('#block_5_slider').lightSlider({ 
			gallery: false,
			item: 1,
			pager: false,
			controls: false,
			slideMove: 1,
			loop: false,
			enableDrag: true,
			enableTouch: true,
			slideMargin: 10
		});
	};
	$('.block_5_slider_prev').click(function(){
        pageFiveSlider.goToPrevSlide(); 
    });
    $('.block_5_slider_next').click(function(){
        pageFiveSlider.goToNextSlide(); 
    });
    $('#block_5_slider .block_5_slider_item').hover(
		function() {
			if ($(window).width() > 992) {
				$(this).closest('li').siblings().find('.block_5_slider_item').removeClass('block_5_slider_item_hover');
				$(this).addClass('block_5_slider_item_hover');
			};
		}, function() {
			if ($(window).width() > 992) {
				$(this).removeClass('block_5_slider_item_hover');
			}
		}
	);

	$('.page_block_5').one('inview', function(event){
		$('.page_block_5_white').animate({
			opacity : '0'
		}, 500, function(){
			$('.page_block_5_white').css('display', 'none');
		});
		setTimeout(function(){
	 		$('.block_5_slider_wrapper').addClass('block_5_slider_lines');
		 		setTimeout(function(){
			 		$('.block_5_slider_wrapper').addClass('block_5_slider_content');
				}, 500);
		}, 1000);
	});

	$('.page_block_6 .page_title_over_level_2').css({
		left : $('.page_block_6 .page_title .page_title_over > div:first-child').outerWidth() + 'px'
	});
	var sliderSixCounter = $('.block_6_slider_container .block_6_slider_item').length;
	$('.block_6_slider_container').css({
		width : (sliderSixCounter * 100) + '%'
	});
	$('.block_6_slider_container .block_6_slider_item').css({
		width : (100 / sliderSixCounter) + '%'
	});
	function blockSixSizes() {
		
		$('.block_6_slider_prev, .block_6_slider_next').css({

			/*top : (($('.block_6_slider').height() - 219) / 2) + 'px'*/
			top : (($('.block_6_bottom_gallery .block_6_gallery_title').position().top) + 'px' )
		});
	};
	blockSixSizes();
	$(window).resize(function(){
		blockSixSizes();
	});
	var sliderSixCurrentLeft = 0;
	$('.block_6_slider_next').click(function(){
		if (sliderSixCurrentLeft > (0 - sliderSixCounter + 1)) {
			sliderSixCurrentLeft--;
			$('.block_6_slider_container').css('left', (sliderSixCurrentLeft * 100) + '%');
		};
	});
	/*-------------------to next slide-------------------*/
	$('.gallery_right > ul > li').click(function(){
		var gall_item_select = $('.gallery_right > ul > li').index($(this));
	

	});
		/*-------------------to prev slide-------------------
	$('.block_6_top_imgs > div:last-child').click(function(){
		if (sliderSixCurrentLeft > (0 - sliderSixCounter + 1)) {
			sliderSixCurrentLeft--;
			$('.block_6_slider_container').css('left', (sliderSixCurrentLeft * 100) + '%');
		};
	});
	/*----------------------------------------*/
	$('.block_6_slider_prev').click(function(){
		if (sliderSixCurrentLeft < 0) {
			sliderSixCurrentLeft++;
			$('.block_6_slider_container').css('left', (sliderSixCurrentLeft * 100) + '%');
		};
	});
	if ($(window).width() > 992) {
		$('.block_6_slider_item .block_6_gallery_container ul').lightSlider({ 
			gallery: false,
			item: 4,
			vertical:true,
			slideMargin: 21,
			pager: false,
			controls: true,
			slideMove: 1,
			loop: false,
			enableDrag: false,
			enableTouch: true,
			verticalHeight: 480
		});	
	} else if ($(window).width() > 768 && $(window).width() < 993) {
		$('.block_6_slider_item .block_6_gallery_container ul').lightSlider({ 
			gallery: false,
			item: 3,
			vertical:false,
			pager: false,
			controls: true,
			slideMove: 1,
			loop: false,
			enableDrag: true,
			enableTouch: true
		});
	} else if ($(window).width() < 769) {
		$('.block_6_slider_item .block_6_gallery_container ul').lightSlider({ 
			gallery: false,
			item: 3,
			vertical:false,
			pager: false,
			controls: true,
			slideMove: 1,
			loop: false,
			enableDrag: true,
			enableTouch: true
		});
	};
	$('.block_6_gallery_big_img').each(function(){
		$(this).css({
			backgroundImage : 'url("' + $(this).next('.block_6_gallery_container').find('ul li').eq(0).find('img').attr('src') + '")'
		});
	});
	var pageSixActiveLi = 0; 
	$('.block_6_slider_item .block_6_gallery_container ul li').click(function(){
		$(this).closest('.block_6_gallery_container').prev('.block_6_gallery_big_img').css({
			backgroundImage : 'url("' + $(this).find('img').attr('src') + '")'
		});
		pageSixActiveLi = $(this).index();
	});

	$('.block_6_slider_item').each(function(){
		$(this).find('.block_6_top_imgs .block_6_top_img_item').eq(0).css({
			backgroundImage : 'url("' + $(this).closest('.block_6_slider_item').find('.block_6_gallery_container ul li').eq(1).find('img').attr('src') + '")'
		});
		$(this).find('.block_6_top_imgs .block_6_top_img_item').eq(1).css({
			backgroundImage : 'url("' + $(this).closest('.block_6_slider_item').find('.block_6_gallery_container ul li').eq(2).find('img').attr('src') + '")'
		});
	});

	$('.block_6_slider').one('inview', function(event){
		if ($(window).width() > 1366) {
			$(event.target).find('.block_6_slider_prev').animate({
				left : '-60px'
			}, 700);
			$(event.target).find('.block_6_slider_next').animate({
				right : '-60px'
			}, 700);	
		} else {
			$(event.target).find('.block_6_slider_prev').animate({
				left : '-32px'
			}, 700);
			$(event.target).find('.block_6_slider_next').animate({
				right : '-32px'
			}, 700);
		};
	});
	var popupGalleryAll, popupGalleryClicked;
	$('.block_6_gallery_big_img, .block_6_top_img_item, .gallery_right > ul > li').click(function(){
		if ($(window).width() > 768) {
			if ($(window).width() > 1366) {
				$('.block_6_popup_gallery').css({
					left : (($(window).width() * .2) / 2) + 'px'
				});
			} else {
				$('.block_6_popup_gallery').css({
					left : (($(window).width() - 700) / 2) + 'px'
				});
			};

			$('.block_6_popup_gallery, .popup_gallery_overlay').css('display', 'block');
			var old_pageSixActiveLi = pageSixActiveLi;
			if($(this).hasClass("block_6_top_img_item")){
					var blockSixGalleryPopup = $('.block_6_gallery_big_img').closest('.block_6_gallery_wrapper').find('#block_6_gallery_ul').html();
					pageSixActiveLi = $('.block_6_top_img_item').index($(this));
					pageSixActiveLi +=1;
			}else if($(this).parents().hasClass("gallery_right")){
					var blockSixGalleryPopup = $('.block_6_gallery_big_img').closest('.block_6_gallery_wrapper').find('#block_6_gallery_ul').html();
					pageSixActiveLi = $('.gallery_right > ul > li').index($(this));
					pageSixActiveLi +=1;
		   }else{
				var blockSixGalleryPopup = $(this).closest('.block_6_gallery_wrapper').find('#block_6_gallery_ul').html();
				//pageSixActiveLi = 1;
			}
			$('#block_6_popup_slider').html(blockSixGalleryPopup);
			$('#block_6_popup_slider li').css({
				height : 'auto',
				marginBottom: ''
			});
			var pageSixPopupSlider = $('#block_6_popup_slider').lightSlider({ 
				gallery: false,
				item: 4,
				pager: false,
				controls: false,
				slideMove: 1,
				loop: false,
				enableDrag: true,
				enableTouch: true,
				slideMargin: 0
			});
			$('.block_6_popup_gallery_prev').click(function(){
		        pageSixPopupSlider.goToPrevSlide(); 
		    });
		    $('.block_6_popup_gallery_next').click(function(){
		        pageSixPopupSlider.goToNextSlide(); 
		    });
			$('#block_6_popup_slider li').eq(pageSixActiveLi).addClass('popup_li_clicked');
			$('.block_6_popup_slider_big_img').css({
				backgroundImage : 'url("' + $('#block_6_popup_slider li').eq(pageSixActiveLi).find('img').attr('src') + '")'
			});
			popupGalleryAll = $('#block_6_popup_slider li').length;
			popupGalleryClicked = pageSixActiveLi + 1;
			$('.block_6_popup_slider_big_img_counter').html(popupGalleryClicked + '&nbsp;|&nbsp;' + popupGalleryAll);
			pageSixActiveLi =  old_pageSixActiveLi;
		} else {
			return false;
		};
		
	});
	$(document).on('click', '#block_6_popup_slider li', function(){
    	$('.block_6_popup_slider_big_img').css({
			backgroundImage : 'url("' + $(this).find('img').attr('src') + '")'
		});
		$('#block_6_popup_slider li').removeClass('popup_li_clicked');
		$(this).addClass('popup_li_clicked');
		$('.block_6_popup_slider_big_img_counter').html(($(this).index() + 1) + '&nbsp;|&nbsp;' + popupGalleryAll);
    });
    $(document).on('click', '.block_6_popup_gallery_prev', function(){
    	if ($('#block_6_popup_slider li.popup_li_clicked').prev().is('li')) {
    		$('#block_6_popup_slider li.popup_li_clicked').removeClass('popup_li_clicked').prev('li').addClass('popup_li_clicked');
			$('.block_6_popup_slider_big_img').css({
				backgroundImage : 'url("' + $('#block_6_popup_slider li.popup_li_clicked').find('img').attr('src') + '")'
			});
			$('.block_6_popup_slider_big_img_counter').html(($('#block_6_popup_slider li.popup_li_clicked').index() + 1) + '&nbsp;|&nbsp;' + popupGalleryAll);
    	};
    });
    $(document).on('click', '.block_6_popup_gallery_next', function(){
    	if ($('#block_6_popup_slider li.popup_li_clicked').next().is('li')) {
    		$('#block_6_popup_slider li.popup_li_clicked').removeClass('popup_li_clicked').next('li').addClass('popup_li_clicked');
			$('.block_6_popup_slider_big_img').css({
				backgroundImage : 'url("' + $('#block_6_popup_slider li.popup_li_clicked').find('img').attr('src') + '")'
			});
			$('.block_6_popup_slider_big_img_counter').html(($('#block_6_popup_slider li.popup_li_clicked').index() + 1) + '&nbsp;|&nbsp;' + popupGalleryAll);
    	};
    });
	$('.popup_gallery_overlay').click(function(){
		$(this).css('display', 'none');
		$('.block_6_popup_gallery').css('display', 'none');
		pageSixPopupSlider = null;
	});
	$('.block_6_popup_gallery_close').click(function(){
		$('.popup_gallery_overlay, .block_6_popup_gallery').css('display', 'none');
		pageSixPopupSlider = null;
	});
	var articlesSlider = $('#articles_slider').lightSlider({ 
		gallery: false,
		item: 1,
		pager: false,
		controls: false,
		slideMove: 1,
		loop: false,
		enableDrag: true,
		enableTouch: true,
		slideMargin: 0
	});
	$('.articles_slider_prev').click(function(){
        articlesSlider.goToPrevSlide(); 
    });
    $('.articles_slider_next').click(function(){
        articlesSlider.goToNextSlide(); 
    });
    $(window).scroll(function(){
    	if ($(window).scrollTop() > $(window).height()) {
    		$('.to_top').removeClass('to_top_hide');
    	} else {
    		$('.to_top').addClass('to_top_hide');
    	};
    });
    $(document).on('click', '.to_top', function(){
    	$('html, body').animate({
    		scrollTop: '0px'
    	}, 500);
    });
	var allNewsSlider = $('#allnews_slider').lightSlider({ 
		gallery: false,
		item: 1,
		pager: false,
		controls: false,
		slideMove: 1,
		loop: false,
		enableDrag: true,
		enableTouch: true,
		slideMargin: 0
	});
	$('.allnews_slider_prev').click(function(){
        allNewsSlider.goToPrevSlide(); 
    });
    $('.allnews_slider_next').click(function(){
        allNewsSlider.goToNextSlide(); 
    });
    var popupTopMargin = ($(window).height() - 400) / 2;
    $(document).on('click', '.to_order, .main_menu_contacts', function(){
    	$('.popup_overlay').css('display', 'block');
    	$('.to_order_wrapper').animate({
    		top: (popupTopMargin + 20) + 'px'
    	}, 350, function(){
    		$('.to_order_wrapper').animate({
    			top: popupTopMargin + 'px'
    		}, 80);
    	});
    });
    $(document).on('click', '.popup_overlay', function(){
		$('.to_order_wrapper').animate({
    		top: (popupTopMargin + 20) + 'px'
    	}, 80, function(){
    		$('.to_order_wrapper').animate({
    			top: '-400px'
    		}, 350, function(){
    			$('.popup_overlay').css('display', 'none');
    		});
    	});
    });
    $(document).on('click', '.to_order_close_btn', function(){
		$('.to_order_wrapper').animate({
    		top: (popupTopMargin + 20) + 'px'
    	}, 80, function(){
    		$('.to_order_wrapper').animate({
    			top: '-800px'
    		}, 350, function(){
    			$('.popup_overlay').css('display', 'none');

    		});
    	});
    });
	$(document).keyup(function(e){
    	if(e.keyCode === 27)
        $("#pannel").slideToggle();
		$('.popup_gallery_overlay, .block_6_popup_gallery').css('display', 'none');
		pageSixPopupSlider = null;

	});
    if ($(window).width() > 768) {
    	$('.section_footer').css({
	    	backgroundPosition : 'left ' + ($('.section_footer').height() * 0.43) + 'px'
	    });
    } else {
    	$('.section_footer').css({
	    	backgroundPosition : 'left ' + ($('.footer_slogan_wrapper').height() + 130) + 'px'
	    });
    };
});