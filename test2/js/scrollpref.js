$(document).ready(function () {
	
//This Use Full_Page_Scroll Master Plugin
	//Create page scroll use the all main animation and some call-block animation and arrw 
		function fullPageEnable(argument) {
			if ($(window).width() >= 1025) {
				$('.main_wrapper').fullpage({
					scrollBar: true,
					anchors:['goToMainPage','goToSecondPage','goToThirdPage','4rdPage','5rdPage','6rdPage', '7rdPage', '8rdPage', '9rdPage', '10rdPage' ],
					afterLoad: function(link, index){
						console.log(link + ' ' + index);
						var fp_dinamic_h = $('.fp-tableCell').height();
						fp_dinamic_h = fp_dinamic_h - (fp_dinamic_h/100)*6 - 37;
						$('.main_menu_contacts').css({top: fp_dinamic_h + 'px'});
						if( index == 6  ){
							var title_width = $('.page_block_6 .page_title_under').width();
							var title_height = $('.page_block_6 .page_title_over').height();
							var title_pos = $('.page_block_6 .page_title_under').position();
							$('.page_block_6 .page_title_over_level_2').css({left: (title_pos.left  + title_width*2 + 2) +"px", top:  (title_pos.top - title_height *.2 +2 ) + 'px'});
						} else if(index == 9){
							var parent_dinamic_h = $('.allnews_slider_img_text').height();
							parent_dinamic_h = (parent_dinamic_h - 46*2);
							$('.allnews_slider_date').css({top: parent_dinamic_h + 'px'});
						} else if(index == 2){
							$('.page_2_selects .wow .fadeIn').css({visibility: 'visible'});
						}
					}//main afterload
				});
			}		
		};
fullPageEnable();

//rounds main page anim and menu

	
});