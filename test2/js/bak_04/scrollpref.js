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
						if( index == 6  ){
							$('.page_block_6 .page_title_over_level_2').css({left: "325px", top: '0.35em'});
						} else if(index == 5){
							var fp_dinamic_h = $('.fp-tableCell').height();
							fp_dinamic_h = (fp_dinamic_h - 820)/2;
							$('.page_block_5 .page_inner_wrapper').css({top: fp_dinamic_h + 'px'});
						}
						//end if first
						 
					}//main afterload
				});
			}		
		};
fullPageEnable();

//rounds main page anim and menu

	
});