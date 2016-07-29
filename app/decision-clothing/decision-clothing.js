$('.btn-shoes').click(processClothingDecision)
$('.btn-jacket').click(processClothingDecision)
$('.btn-tie').click(processClothingDecision)
$('.btn-trousers').click(processClothingDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processClothingDecision() {

	var answer = $(this).attr('data-answer');
	if (answer === "Shoes") {
		alert("Answered shoes!")
	} else if (answer === "Jacket") {
		alert("Answered jacket!")
	} else if (answer === "Tie") {
		alert("Answered tie!")
	} else {
		alert("Answered Trousers")
	}
	database.ref('decision-clothing/').update({
  	[username]: answer
 	});
 	finishedCurrentView();
}