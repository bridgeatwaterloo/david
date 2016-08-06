$('.btn-unhappy').click(processEmotionDecision)
$('.btn-joyful').click(processEmotionDecision)
$('.btn-needy').click(processEmotionDecision)
$('.btn-frustrated').click(processEmotionDecision)
$('.btn-apathetic').click(processEmotionDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processEmotionDecision() {

	var answer = $(this).attr('data-answer');
	startLoadingAnimation("Answered " + answer.toLowerCase() + "!");
	database.ref('decision-emotion/').update({
  		[username]: answer
 	});
 	finishedCurrentView(1000);
}