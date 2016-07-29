$('.btn-unhappy').click(processEmotionDecision)
$('.btn-joyful').click(processEmotionDecision)
$('.btn-needy').click(processEmotionDecision)
$('.btn-frustrated').click(processEmotionDecision)
$('.btn-appathetic').click(processEmotionDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processEmotionDecision() {

	var answer = $(this).attr('data-answer');
	if (answer === "Unhappy") {
		alert("Answered unhappy!")
	} else if (answer === "Joyful") {
		alert("Answered joyful!")
	} else if (answer === "Needy") {
		alert("Answered needy!")
	} else if (answer === "Frustrated") {
		alert("Answered frustrated!")
	} else {
		alert("Answered Appathetic")
	}
	database.ref('emotion-decision/').update({
  	[username]: answer
 	});
 	finishedCurrentView();
}