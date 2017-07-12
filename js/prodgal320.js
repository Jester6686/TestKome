
	$(function(){
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
	$('.block_6_gallery_big_img, .block_6_top_img_item, .gallery_right > ul > li').click(function(){
		$('#section6').show(1);
		if ($(window).width() < 350) {
			$('.block_6_popup_gallery').css({
					left: (($(window).width() - 300) / 2) + 'px'
				});
			

			$('.block_6_popup_gallery, .popup_gallery_overlay').css('display', 'block');
			var old_pageSixActiveLi = 0;
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
				item: 1,
                thumbItem: 0,
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
    }); 
		