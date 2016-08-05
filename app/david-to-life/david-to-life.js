var username = getUsername(); // gets the universal username for this user
var noOfTaps = 0; // declares the variable noOfTaps and sets it to zero

startCurrentView();

$('.btn-heartbeat').click(processBeat); // listens for how many times the user clicks the heart and calls the process beat function

//listening for the value of the current view field in firebase to change
firebase.database().ref('heartbeat/level').on('value', function(snapshot) {
  var heartbeatLevel = snapshot.val();

  if(heartbeatLevel === 5){
    startLoadingAnimation();
    finishedCurrentView(1000);
  } //close the if
});

function processBeat() {
	noOfTaps += 1; // adds one to the log of taps
	database.ref('clicks/').update({
    [username]: noOfTaps,
  }); // updates the databases click record with the users name and current number of taps

  //Animate button on click
  $(this).addClass("pulse");
  $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function () {
      $(this).removeClass('pulse');
  });

} // close the function

