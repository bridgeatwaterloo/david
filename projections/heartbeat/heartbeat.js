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

var db1 = new Audio('david-beat-one.mp3');
var db1a = new Audio('david-beat-one.mp3');

var beat = 0;
function beatPump() {
  // setTimeout(function(){
  //   db1.play();
  // },2000)
          var widthpx = $('.heartbeat-left-overlay').width();
          //console.log(widthpx);
          var totalwidth = screen.width;
          widthpx=widthpx/totalwidth;
          widthpx=widthpx*100;
          // /console.log(widthpx);
           if (widthpx>10 && widthpx<30){
            if(beat!=1){
              console.log("test1");
              var db2 = new Audio('david-beat-two.mp3');
              db2.play()
              beat=1;
            }

          }else if (widthpx>50 && widthpx<80){
           
            if(beat!=2){
              //db2.play();
              //db2.play();
              console.log("test2");
              var db2 = new Audio('david-beat-two.mp3');
              db2.play()
              beat=2;
            }
          }

          

          // setTimeout(function(){
          //     console.log($('.heartbeat-left-overlay').css('width'));
          // },1000);
          
}
