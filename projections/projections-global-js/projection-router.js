// Initialization functions:

function initializeHeartbeat() {
	showIndicatorView('.david-to-life');
	startHeartbeat();
}

firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
	  switch(view) {
	       case "/app/checkin/" :
	       		//code block
	       		showView('.checkin');
	       		break;
		   case "/app/onboarding/" :
		   		//code block
		   		showView('.view-onboarding');
		   		break;
		   case "/app/decision-are-you-happy/" :
		   		showIndicatorView('.decision-are-you-happy');
		   		//code block
		   		break;
		   case "/app/david-to-life/" :
		   		initializeHeartbeat();
		   		//code block
		   		break;
		   case "/app/decision-where-david/" :
		   		showIndicatorView('.decision-where-david');
		   		//code block
		   		break;
		   case "/app/warning/" :
		   		showView('.warning');
		   		//code block
		   		break;
		   case "/app/decision-clothing/" :
		   		showIndicatorView('.decision-clothing');
		   		//code block
		   		break;
		   case "/app/decision-emotion/" :
		   		showIndicatorView('.decision-emotion');
		   		//code block
		   		break;
		   case "/app/decision-want-more/" :
		   		showIndicatorView('.decision-want-more');
		   		//code block
		   		break;
		   case "/app/decision-are-you-finished/" :
		   		showIndicatorView('.decision-are-you-finished');
		   		//code block
		   		break;
		   case "/app/review-david" :
		   		showIndicatorView('.review-david');
		   		//code block
		   		break;
			default:

	}
});

