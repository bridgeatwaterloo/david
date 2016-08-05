$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

startCurrentView();

function processDecision() {
	var username = getUsername();
	console.log(username)
	var answer = $(this).attr('data-answer');
	startLoadingAnimation("Answered " + answer.toLowerCase() + "!");
	database.ref('decision-are-you-finished/').update({
  		[username]: answer
 	});
 	finishedCurrentView(1000);
}