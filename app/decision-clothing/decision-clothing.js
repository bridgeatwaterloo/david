$('.btn-shoes').click(processClothingDecision)
$('.btn-jacket').click(processClothingDecision)
$('.btn-tie').click(processClothingDecision)
$('.btn-trousers').click(processClothingDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processClothingDecision() {

	var answer = $(this).attr('data-answer');
	startLoadingAnimation("Answered " + answer.toLowerCase() + "!");
	database.ref('decision-clothing/').update({
  		[username]: answer
 	});
 	finishedCurrentView(1000);
}