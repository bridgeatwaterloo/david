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
		   case "/app/decision-reason-for-david-to-move/" :
		   		showView('.decision-reason-for-david-to-move');
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
		   case "/app/slider-horizontal/" :
		   		showView('.slider-horizontal');
		   		//code block
		   		break;
		   case "/app/slider-vertical/" :
		   		showView('.slider-vertical');
		   		//code block
		   		break;
		   case "/app/calculating-results/" :
		   		showView('.calculating-results');
		   		//code block
		   		break;
		   case "/app/done/" :
		   		showView('.done');
		   		//code block
		   		break;
		   case "/app/percentage-of-vote/" :
		   		showView('.percentage-of-vote');
		   		//code block
		   		break;
		   case "/app/pay-attention/" :
		   		showView('.pay-attention');
		   		//code block
		   		break;
		   case "/app/decision-want-more/" :
		   		showView('.decision-want-more');
		   		//code block
		   		break;
		   case "/app/time-left-with-david/" :
		   		showView('.time-left-with-david');
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
		   case "/app/review-how-was-david/" :
		   		showView('.review-how-was-david');
		   		//code block
		   		break;
		   case "/app/review-would-you-see-david-again/" :
		   		showView('.review-would-you-see-david-again');
		   		//code block
		   		break;
		   case "/app/review-thank-you/" :
		   		showView('.review-thank-you');
		   		//code block
		   		break;
			default:

	}
});

firebase.database().ref('decisions').on('value', function(snapshot){

	// console.log(snapshot.);
	// console.log(snapshot.val());
	// var data = snapshot.exportVal()
	// console.log(data);
	var numberOfNo=0;
	var numberOfYes=0;
	snapshot.forEach(function(data){
		console.log(data.key + ": " +data.val() );
		if(data.val()==="Yes"){
			numberOfYes++;
		}else{
			numberOfNo++;
		}
	});

	console.log("yes:" +numberOfYes);
	if(numberOfYes>numberOfNo){
		$(".decision-are-you-happy-result").html("YES");
	}else{
		$(".decision-are-you-happy-result").html("NO");
	}
});

