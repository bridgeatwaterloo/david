$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processDecision() {

	console.log(username)
	var answer = $(this).attr('data-answer');
	if (answer === "Yes") {
		alert("Answered yes!")
	} else {
		alert("Answered no!")
	}
	database.ref('decision-want-more/').update({
  	[username]: answer
 	});
 	finishedCurrentView();
}