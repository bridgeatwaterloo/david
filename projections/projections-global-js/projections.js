

showView('.heartbeat');

var speed = 4000;

setTimeout(function(){
	speed = 8000;
	setTimeout(function(){
		speed = 2000;
	}, 5000);
}, 5000);


function animateRight() {
$(".heartbeat-right-overlay").animate({
    width: "0%"
  }, speed, function() {
    // Animation complete.
    $(".heartbeat-right-overlay").css({
    	width: "90%"
    });
    animateRight();
  });
}

animateRight()

function animateLeft() {
$(".heartbeat-left-overlay").animate({
    width: "90%"
  }, speed, function() {
    // Animation complete.
    $(".heartbeat-left-overlay").css({
    	width: "0%"
    });
    animateLeft();
  });
}

animateLeft()
  
