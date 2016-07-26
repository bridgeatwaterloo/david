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
	}
	database.ref('Finished-decisions/'+ answer).set({
  	[username]: answer
 	});
}