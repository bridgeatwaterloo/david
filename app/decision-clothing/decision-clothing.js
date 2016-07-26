$('.btn-shoes').click(processClothingDecision)
$('.btn-jacket').click(processClothingDecision)
$('.btn-tie').click(processClothingDecision)
$('.btn-trousers').click(processClothingDecision)


function processClothingDecision() {
	var username = getUsername();
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



	database.ref('clothing-decision/'+ answer).set({
  	[username]: answer
 	});
}