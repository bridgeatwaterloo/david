$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

startCurrentView();

function processDecision() {
	var username = getUsername();
	console.log(username)
	var answer = $(this).attr('data-answer');
	if (answer === "Yes") {
		alert("Answered yes!")
	} else {
		alert("Answered no!")
	}
	database.ref('decision-are-you-finished/').update({
  	[username]: answer
 	});
 	finishedCurrentView();
}