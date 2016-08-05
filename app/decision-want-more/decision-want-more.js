$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processDecision() {

	console.log(username)
	var answer = $(this).attr('data-answer');
	startLoadingAnimation("Answered " + answer.toLowerCase() + "!");
	database.ref('decision-want-more/').update({
  		[username]: answer
 	});
 	finishedCurrentView(1000);
}