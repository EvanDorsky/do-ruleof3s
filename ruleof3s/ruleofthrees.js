(function() {
	$('body').prepend('<canvas style="margin:0;padding:0;position:absolute;z-index:99999" id="overlay"></canvas>');

	var canvas = document.getElementById('overlay');

	$(window).on('resize', function() {
		canvas.height = $(window).height();
		canvas.width = $(window).width();
		
		drawRect(ctx, 20, 20, 200, 200);	
	});

	var ctx = canvas.getContext('2d');

	drawRect(ctx, 20, 20, 200, 200);

	function drawRect(ctx, x, y, w, h) {
		ctx.strokeStyle = 'black';
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				ctx.rect(x+i*w/3, y+j*h/3, w/3, h/3);
			}
		}
		ctx.rect(x, y, w, h);
		ctx.stroke();
	}
})()