 firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
	//clear the side panels of any text
	clearMsg();
	/*this variables sets the time until the result will be shown on the side panels in miliseconds, after this time the current result
	is taken (from the html element that holds the result for that view) and is displayed on the side panels using the myMsg function
	this is only done for the decision views,*/
	var timeToChoose = 20000;

	if (view.indexOf("/app/onboarding/") > -1) {
		showView('.onboarding');
	}

	if (view.indexOf("/app/decision-are-you-happy/") > -1) {
 		showIndicatorView('.decision-are-you-happy');

 		// function that displays text on side panels after set period of time as described above switch statement
 		setTimeout(function() {
		var word = $('.decision-are-you-happy-result').html();
 		myMsg(word);
		}, timeToChoose);
	}

	if (view.indexOf("/app/david-to-life/") > -1) {
		showIndicatorView('.david-to-life');
		startHeartbeat();
	}

	if (view.indexOf("/app/decision-where-david/") > -1) {
 		showIndicatorView('.decision-where-david');
 		// function that displays text on side panels after set period of time as described above switch statement
 		setTimeout(function() {
			var word = $('.decision-where-david-result').html();
	 		myMsg(word);
		}, timeToChoose);
 		//code block
	}
	if (view.indexOf("/app/warning/") > -1) {
		showView('.warning');
	}


	if (view.indexOf("/app/decision-clothing/") > -1) {
 		showIndicatorView('.decision-clothing');
 		// function that displays text on side panels after set period of time as described above switch statement
 		setTimeout(function() {
		var word = $('.decision-clothing-result').html();
 		myMsg(word);
		}, timeToChoose);
	}

	if (view.indexOf("/app/decision-emotion/") > -1) {
 		showIndicatorView('.decision-emotion');
 		// function that displays text on side panels after set period of time as described above switch statement
 		setTimeout(function() {
		var word = $('.decision-emotion-result').html();
 		myMsg(word);
		}, timeToChoose);
	}
	if (view.indexOf("/app/decision-want-more/") > -1) {
 		showIndicatorView('.decision-want-more');
 		// function that displays text on side panels after set period of time as described above switch statement
	 		setTimeout(function() {
			var word = $('.decision-want-more-result').html();
	 		myMsg(word);
		}, 9000);
	}

	if (view.indexOf("/app/decision-are-you-finished/") > -1) {
 		showIndicatorView('.decision-are-you-finished');
 		// function that displays text on side panels after set period of time as described above switch statement
 		setTimeout(function() {
		var word = $('.decision-are-you-finished-result').html();
 		myMsg(word);
		}, timeToChoose);
 	}

 	if (view.indexOf("/app/review-david") > -1) {
		showIndicatorView('.review-david');
	}

});

