$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

function processDecision() {
	var username = getUsername();
	console.log(username)
	var answer = $(this).attr('data-answer');
	if (answer === "Yes") {
		alert("Answered yes!")
	} else {
		alert("Answered no!")
		showView('.view-set-username')
	}
	database.ref('more-decision/'+ answer).set({
  	[username]: answer
 	});
}