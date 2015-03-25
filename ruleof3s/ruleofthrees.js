(function() {
	$('body').prepend('<canvas style="margin:0;padding:0;position:absolute;z-index:99999" id="overlay"></canvas>');

	window.canvas = document.getElementById('overlay');

	function handleUp() {
		window.mouseDown = false;
		window.x = null;
		window.y = null;
	}

	function resizeCanvas() {
		canvas.height = $(window).height();
		canvas.width = $(window).width();
	}

	handleUp();
	resizeCanvas();

	window.ctx = canvas.getContext('2d');

	$(window).on('resize', resizeCanvas);

	$(window).on('mousemove', function(e) {
		if (!window.mouseDown)
			return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawRect(ctx, window.x, window.y, event.pageX-window.x, event.pageY-window.y);
	});

	$(window).on('mousedown', function(e) {
		window.mouseDown = true;
		window.x = event.pageX;
		window.y = event.pageY;
	});

	$(window).on('mouseup', handleUp);

	function drawRect(ctx, x, y, w, h) {
		ctx.strokeStyle = 'black';
		ctx.beginPath()
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				ctx.rect(x+i*w/3, y+j*h/3, w/3, h/3);
			}
		}
		ctx.rect(x, y, w, h);
		ctx.stroke();
	}
})()