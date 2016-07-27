
firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
	  switch(view) {
	        case"/app/checkin/" :
	        		alert("checkin");
	        		//code block
	        		break;
		    case"/app/onboarding/" :
		    		//code block
		    		alert("username");
		    		break;
		    case"/app/decision-are-you-happy/" :
		    		//code block
		    		break;
		    case"/app/davidToLife/" :
		    		//code block
		    		break;
		    case"/app/decision-where-david/" :
		    		//code block
		    		break;
		    case"/app/decision-reason-for-david-to-move/" :
		    		//code block
		    		break;
		    case"/app/warning/" :
		    		//code block
		    		break;
		    case"/app/decision-clothing/" :
		    		//code block
		    		break;
		    case"/app/decision-emotion/" :
		    		//code block
		    		break;
		    case"/app/slider-horizontal/" :
		    		//code block
		    		break;
		    case"/app/slider-vertical/" :
		    		//code block
		    		break;
		    case"/app/calculating-results/" :
		    		//code block
		    		break;
		    case"/app/done/" :
		    		//code block
		    		break;
		    case"/app/percentage-of-vote/" :
		    		//code block
		    		break;
		    case"/app/pay-attention/" :
		    		//code block
		    		break;
		    case"/app/decision-want-more/" :
		    		//code block
		    		break;
		    case"/app/time-left-with-david/" :
		    		//code block
		    		break;
		    case"/app/decision-are-you-finished/" :
		    		//code block
		    		break;
		    case"/app/review-david" :
		    		//code block
		    		break;
		    case"/app/review-how-was-david/" :
		    		//code block
		    		break;
		    case"/app/review-would-you-see-david-again/" :
		    		//code block
		    		break;
		    case"/app/review-thank-you/" :
		    		//code block
		    		break;
		    default:
	 		
	}
});


showView('.view-decision-result');

function where-david(){

	firebase.database().ref('view').on('value', function(snapshot) {


	}


}