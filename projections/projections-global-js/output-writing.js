

// showView('.view-decision-result');

//



// function to write message on side panels
function myMsg(message){
	// return txt;
	showView('.view-text');
	var canvases = document.querySelectorAll("canvas");

	for (var i=0; i<canvases.length; i++) {
		var ctx = canvases[i].getContext("2d");
	 	animateWords(ctx);
	}

	function animateWords(ctx) {
		var dashLen = 120, dashOffset = dashLen, speed = 5,
	    txt = message, x = 1, i = 0;
		ctx.font = "20px Dosis";
		ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
		ctx.strokeStyle = ctx.fillStyle = "#ffffff";
		const numberOfLines = (txt.match(/\n/g) || []).length;
		const lineHeight = 30;
		const lineSpacing = 10;
		var y = 90 - (numberOfLines / 2) * (lineHeight + lineSpacing);

		(function loop() {
		  ctx.clearRect(x, y - lineHeight, 60, 150);
		  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
		  dashOffset -= speed;                                         // reduce dash length
		  var letter = txt[i];
		  if (letter === "\n") {
		  	i += 1;
		  	letter = txt[i]
		  	y += lineHeight + lineSpacing;
		  	x = 0;
		  }
		  var nextLetter = txt[i];

		  ctx.strokeText(txt[i], x, y);                               // stroke letter

		  if (dashOffset > 0) {
			requestAnimationFrame(loop);             // animate
		  } else {
		    ctx.fillText(txt[i], x, y);                               // fill final letter
		    dashOffset = dashLen;                                      // prep next char
		    x += ctx.measureText(nextLetter).width + ctx.lineWidth;
		    ctx.setTransform(1, 0, 0, 1, 0, 3 * 0.1);        // random y-delta
		    //ctx.rotate(0.5 * 0.005);                         // random rotation
		    i += 1;
		    if (i < txt.length) {
		    	requestAnimationFrame(loop);
		    }
		  }
		})();
	}
}

//function to clear side panels
function clearMsg(){
	var canvases = document.querySelectorAll("canvas");

	for (var i=0; i<canvases.length; i++) {
		var ctx = canvases[i].getContext("2d");
	 	ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
	 }
}


