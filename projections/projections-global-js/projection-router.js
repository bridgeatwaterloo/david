// Initialization functions:
var interval;
function initializeHeartbeat() {
	showIndicatorView('.david-to-life');
	startHeartbeat();
	interval = setInterval(beatPump, 30);
}

firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
	//clear the side panels of any text
	clearMsg();
	/*this variables sets the time until the result will be shown on the side panels in miliseconds, after this time the current result
	is taken (from the html element that holds the result for that view) and is displayed on the side panels using the myMsg function
	this is only done for the decision views,*/
	var timeToChoose = 20000;

	  switch(view) {
		   case "/app/onboarding/" :
		   		//code block
		   		showView('.onboarding');
		   		break;
		   case "/app/decision-are-you-happy/" :
		   		showIndicatorView('.decision-are-you-happy');

		   		// function that displays text on side panels after set period of time as described above switch statement
		   		setTimeout(function() {
					var word = $('.decision-are-you-happy-result').html();
			 		myMsg(word);
  				}, timeToChoose);
		   		//code block
		   		break;
		   case "/app/david-to-life/" :
		   		initializeHeartbeat();
		   		//code block
		   		break;
		   case "/app/decision-where-david/" :
		   		showIndicatorView('.decision-where-david');
		   		// function that displays text on side panels after set period of time as described above switch statement
		   		setTimeout(function() {
					var word = $('.decision-where-david-result').html();
					var name = $('.decision-where-david-name').html();
			 		myMsg(name + "\nchose\n" + word);
  				}, timeToChoose);
		   		//code block
		   		break;
		   case "/app/warning/" :
		   		showView('.warning');
		   		//code block
		   		break;
		   case "/app/decision-clothing/" :
		   		showIndicatorView('.decision-clothing');
		   		// function that displays text on side panels after set period of time as described above switch statement
		   		setTimeout(function() {
					var word = $('.decision-clothing-result').html();
			 		myMsg(word);
  				}, timeToChoose);
		   		//code block
		   		break;
		   case "/app/decision-emotion/" :
		   		showIndicatorView('.decision-emotion');
		   		// function that displays text on side panels after set period of time as described above switch statement
		   		setTimeout(function() {
					var word = $('.decision-emotion-result').html();
			 		myMsg(word);
  				}, timeToChoose);
		   		//code block
		   		break;
		   case "/app/decision-want-more/" :
		   		showIndicatorView('.decision-want-more');
		   		// function that displays text on side panels after set period of time as described above switch statement

			   		setTimeout(function() {
						var word = $('.decision-want-more-result').html();
				 		myMsg(word);
	  				}, 7000);

		   		//code block
		   		break;
		   case "/app/decision-are-you-finished/" :
		   		showIndicatorView('.decision-are-you-finished');
		   		// function that displays text on side panels after set period of time as described above switch statement
		   		setTimeout(function() {
					var word = $('.decision-are-you-finished-result').html();
			 		myMsg(word);
  				}, timeToChoose);
		   		//code block
		   		break;
		   case "/app/review-david" :
		   		//no longer want the indicator to show
		   		showView('.review-david');
		   		//code block
		   		break;
			default:

	}
});

