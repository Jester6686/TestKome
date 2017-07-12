$(function(){
	var backgroundFigures = undefined;
	if ($(window).width() > 992) {
		backgroundFigures = {
			blockId: 'image_move_container',
			blockSize: 400,
			blockOpacity: 1,
			elementIndex: 12,
			elementColor: '#000',
			lineWidth: 1,
			circleRadius: 2,
			elementAnimate: 1400,
			intervalMove: 1400
		};
	};
	if(backgroundFigures != undefined) {
		function getRandomInt(){
			return Math.floor(Math.random() * (((backgroundFigures.blockSize) ? backgroundFigures.blockSize : 200) - 0 + 1)) + 0;
		}
		$('body').prepend('<div id="' + backgroundFigures.blockId + '"></div>');
		var backgroundFiguresOpacity;
		if (backgroundFigures.blockOpacity && backgroundFigures.blockOpacity < 10) {
			backgroundFiguresOpacity = '0.' + backgroundFigures.blockOpacity;
		} else if (backgroundFigures.blockOpacity >= 10) {
			backgroundFiguresOpacity = 1;
		} else {
			backgroundFiguresOpacity = 1;
		};
		$('#' + backgroundFigures.blockId).css({
			position: 'fixed',
			zIndex: 1,
			width: backgroundFigures.blockSize ? backgroundFigures.blockSize : 200 + 'px',
			height: backgroundFigures.blockSize ? backgroundFigures.blockSize : 200 + 'px',
			opacity: backgroundFiguresOpacity
		});
		var backgroundSvg = Raphael(backgroundFigures.blockId);
		for (var i = 0; i < backgroundFigures.elementIndex; i++) {
			window['line' + i] = backgroundSvg.path( ['M', 0, 0, 'L', 0, 0 ] );
			window['circle' + i] = backgroundSvg.circle(0, 0, backgroundFigures.circleRadius);
		};
		for (var i = 0; i < backgroundFigures.elementIndex; i++) {
			window['line' + i].attr({stroke: backgroundFigures.elementColor, 'stroke-width': backgroundFigures.lineWidth});
			window['circle' + i].attr({fill: backgroundFigures.elementColor});
		};
		var coordObjX = Array();
	    var coordObjY = Array();
	    setInterval(function(){
		    for (var i = 0; i < backgroundFigures.elementIndex; i++) {
		    	coordObjX[i] = getRandomInt();
		    	coordObjY[i] = getRandomInt();
		    };
	    	for (var i = 0; i < backgroundFigures.elementIndex; i++) {
	    		var firstCoordX = coordObjX[i];
	    		var secondCoordX = coordObjX[(i + 1)];
	    		var firstCoordY = coordObjY[i];
	    		var secondCoordY = coordObjY[(i + 1)];
	    		if (i < (backgroundFigures.elementIndex - 1)) {
					window['line' + i].animate({path:'M' + firstCoordX + ' ' + firstCoordY + 'L' + secondCoordX + ' ' + secondCoordY}, backgroundFigures.elementAnimate);
	    		} else {
	    			window['line' + i].animate({path:'M' + firstCoordX + ' ' + firstCoordY + 'L' + coordObjX[0] + ' ' + coordObjY[0]}, backgroundFigures.elementAnimate);
	    		};
	    		window['circle' + i].animate({cx: firstCoordX, cy: firstCoordY}, backgroundFigures.elementAnimate);
			};
	    }, backgroundFigures.intervalMove);
		$(window).mousemove(function(event) {
			$('#' + backgroundFigures.blockId).css({
				top : (event.pageY - (backgroundFigures.blockSize ? (backgroundFigures.blockSize / 2) : 100) - $(window).scrollTop()) + 'px',
				left : (event.pageX - (backgroundFigures.blockSize ? (backgroundFigures.blockSize / 2) : 100)) + 'px'
			});
		});
	};
});