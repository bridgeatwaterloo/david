var username = getUsername(); // gets the universal username for this user
var noOfTaps = 0; // declares the variable noOfTaps and sets it to zero

startCurrentView();

$('.btn-heartbeat').click(processBeat); // listens for how many times the user clicks the heart and calls the process beat function

function processBeat() {
	noOfTaps += 1; // adds one to the log of taps
	database.ref('clicks/').update({
    [username]: noOfTaps,
  	}); // updates the databases click record with the users name and current number of taps

  	if(noOfTaps === 10){
  	database.ref('david-to-life/').update({
    [username]:"Yes"
  	}); // if the number of taps gets to 10 then their name is added to the gotToTenTaps record so that their name can be projected
      finishedCurrentView();
  } //close the if

  //Animate button on click
  $(this).addClass("pulse");
  $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function () {
      $(this).removeClass('pulse');
  });
  
} // close the function

