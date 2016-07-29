// Initialization functions:

function initializeHeartbeat() {
	showView('.david-to-life');
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
		   		showView('.onboarding');
		   		break;
		   case "/app/decision-are-you-happy/" :
		   		showView('.decision-are-you-happy');
		   		//code block
		   		break;
		   case "/app/david-to-life/" :
		   		initializeHeartbeat();
		   		//code block
		   		break;
		   case "/app/decision-where-david/" :
		   		showView('.decision-where-david');
		   		//code block
		   		break;
		   case "/app/warning/" :
		   		showView('.warning');
		   		//code block
		   		break;
		   case "/app/decision-clothing/" :
		   		showView('.decision-clothing');
		   		//code block
		   		break;
		   case "/app/decision-emotion/" :
		   		showView('.decision-emotion');
		   		//code block
		   		break;
		   case "/app/decision-want-more/" :
		   		showView('.decision-want-more');
		   		//code block
		   		break;
		   case "/app/decision-are-you-finished/" :
		   		showView('.decision-are-you-finished');
		   		//code block
		   		break;
		   case "/app/review-david" :
		   		showView('.review-david');
		   		//code block
		   		break;
			default:

	}
});

