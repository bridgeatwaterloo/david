$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

var currentView = window.location.pathname;
setView(currentView);

function processDecision() {
	var username = getUsername();
	console.log(username)
	var answer = $(this).attr('data-answer');
	if (answer === "Yes") {
		alert("Answered yes!")
	} else {
		alert("Answered no!")
	}
	database.ref('would-you-see-david-again-decisions/').set({
  	[username]: answer
 	});
 	finishedCurrentView();
}