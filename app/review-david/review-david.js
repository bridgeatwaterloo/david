// startCurrentView();
// 
$('.btn-success').click(processDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processDecision() {
	var answer = parseInt($("input[name=rating]:checked").val());
	database.ref('review-david/').update({
  		[username]: answer
 	});
 	$(".card-header").html("Epoq thanks you for your data.");
 	$("#rating-form").remove();

 	database.ref('review-david').on('value', function(snapshot){
 		var userCount = 0;
 		var ratingSum = 0;
 		snapshot.forEach(function(data){
 			userCount += 1;
 			ratingSum += data.val();
 		});
 		var average = ratingSum / userCount;
 		$(".results").html(userCount + " votes recorded (" + average.toFixed(1) + " rating)");
 	}, function(err){});
}

