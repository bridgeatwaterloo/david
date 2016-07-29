var speed = 4000;

function startHeartbeat() {

  
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
  
}