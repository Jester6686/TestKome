  $(function(){
        if($(window).width() > 1024){
        ;
    } else if($(window).width() > 750){
		pageFiveSlider = $('#block_5_slider').lightSlider({ 
			gallery: false,
			item: 3,
			pager: false,
			controls: false,
            adaptiveHeight: true,
			slideMove: 3,
			loop: false,
			enableDrag: true,
			enableTouch: true,
			slideMargin: 24
		});
        
    }else{
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
	}
    $('.block_5_slider_prev').click(function(){
        pageFiveSlider.goToPrevSlide(); 
    });
    $('.block_5_slider_next').click(function(){
        pageFiveSlider.goToNextSlide(); 
    });
    
});