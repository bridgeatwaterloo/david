$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

function processDecision() {
	var username = localStorage.getItem('Username');
	console.log(username)
	var answer = $(this).attr('data-answer');
	console.log(answer);
	if (answer === "Yes") {
		alert("Answered yes!")
	} else {
		alert("Answered no!")
	}
	database.ref('decisions/'+ answer).set({
  	[username]: answer
 	});
}