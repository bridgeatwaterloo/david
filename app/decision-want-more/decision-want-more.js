$('.btn-success').click(processDecision)
$('.btn-danger').click(processDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processDecision() {

	console.log(username)
	var answer = $(this).attr('data-answer');
	startLoadingAnimation("Answered " + answer.toLowerCase() + "! \n Look at David and wait for the phone signal");
	database.ref('decision-want-more/').update({
  		[username]: answer
 	});
 	$('.david-container').hide();
}

firebase.database().ref('view').on('value', function(snapshot) {
	stopLoadingAnimation();
	$('.david-container').show();
});