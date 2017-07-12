$(function(){
   
	$('.arrow_down_lang').click(function(e){
         e.stopPropagation();
		 if($('.arrow_up_lang').length){
              $('.arrow_up_lang').removeClass('arrow_up_lang');
              $(".lang_selector").removeClass('show_lang_selector');
              
         }else{
             $(".lang_selector").addClass('show_lang_selector');
             $('.arrow_down_lang').addClass('arrow_up_lang');
         }
	});
     $('.right_menu_wrapper  .lang_selector  ul li').click(function(){
         $('.lang_selector > span:first-child').html($(this).find('a').html());
         $('.arrow_up_lang').removeClass('arrow_up_lang');
         $(".lang_selector").removeClass('show_lang_selector');
    });
     $('.articles_slider_controls_wrapper.visible_if_less_350 > a, .return_to_main_button').click(function(){
         
         if($('.return_to_main_button.active').length){
             $('.page_2_img_block.active').removeClass('active');
             $('.page_2_texts.active').removeClass('active');
             $('.articles_slider_controls_wrapper.visible_if_less_350.active').removeClass('active'); 
             $('.return_to_main_button').removeClass('active');
             $( ".page_block_2 .page_outer_wrapper, .page_block_2 .page_inner_wrapper " ).animate({   height: "700px" }, 500, function() { });
             $('.articles_slider_controls_wrapper.visible_if_less_350').focus();
             $('html, body').animate({
    scrollTop: $('.articles_slider_controls_wrapper.visible_if_less_350').offset().top - 400  }, 500);
  
  if ($focusElement) $($focusElement).focus();
         }else{
             $('.page_2_img_block').addClass('active');
             $('.page_2_texts').addClass('active');
             $('.articles_slider_controls_wrapper.visible_if_less_350').addClass('active'); 
             $('.return_to_main_button').addClass('active');
             if ($(window).width() > 544){
             $( ".page_block_2 .page_outer_wrapper, .page_block_2 .page_inner_wrapper " ).animate({   height: "1300px" }, 500, function() { });
             } else{
                 $( ".page_block_2 .page_outer_wrapper, .page_block_2 .page_inner_wrapper " ).animate({   height: "1780px" }, 500, function() { });
             }
         }
    });
     $('.switch_part_on_page4 > ul > li').click(function(){
            $('.switch_part_on_page4 > ul > li').removeClass('active');
            $(this).addClass('active');
            var item_order =  $('.switch_part_on_page4 > ul > li').index(this) + 1;
            $('.page_4_gallery_container > div.page_4_gallery_item').removeClass('active');
            setTimeout(function(){ 
                 $('.page_4_gallery_container > div.page_4_gallery_item:nth-child(' + item_order + ')').addClass('active');}, 670);
     });
     if ($(window).width() < 700) {
            $('#block_5_slider .block_5_slider_item .block_5_slider_text span').append('<div></div>');
            $('#block_5_slider .block_5_slider_item .block_5_slider_text span').prepend('<div></div>');

    }

   
});