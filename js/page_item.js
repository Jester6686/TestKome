
	 var cat_dinamic_h = $(window).height();
	cat_dinamic_h = cat_dinamic_h - (cat_dinamic_h/100)*6 - 37;
			$('.main_menu_contacts').css({top: cat_dinamic_h + 'px'});
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
	/* -------------------------------- */
	
	