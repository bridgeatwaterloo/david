

// showView('.view-decision-result');

// 




function myMsg(message){
	// return txt;

	var canvases = document.querySelectorAll("canvas");

	for (var i=0; i<canvases.length; i++) {
		var ctx = canvases[i].getContext("2d");
	 	animateWords(ctx);
	 }

	function animateWords(ctx) {
		var dashLen = 120, dashOffset = dashLen, speed = 5,
	    txt = message, x = 1, i = 0;
		ctx.font = "40px Helvetica, cursive, TSCu_Comic, sans-serif"; 
		ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
		ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

		(function loop() {
		  ctx.clearRect(x, 0, 60, 150);
		  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
		  dashOffset -= speed;                                         // reduce dash length
		  ctx.strokeText(txt[i], x, 90);                               // stroke letter

		  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
		  else {
		    ctx.fillText(txt[i], x, 90);                               // fill final letter
		    dashOffset = dashLen;                                      // prep next char
		    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
		    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
		    ctx.rotate(Math.random() * 0.005);                         // random rotation
		    if (i < txt.length) requestAnimationFrame(loop);
		  }
		})();
	}
}


 