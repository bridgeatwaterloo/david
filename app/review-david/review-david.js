startCurrentView();

$('.star-1').click(reviewDavid)
$('.star-2').click(reviewDavid)
$('.star-3').click(reviewDavid)
$('.star-4').click(reviewDavid)
$('.star-5').click(reviewDavid)

var username = getUsername();
$('.username').html(username);

function reviewDavid() {
	var noOfStars = 0;
    if (document.getElementById("star-1-2").checked === true) {
        alert("You have given David 1 Star");
        noOfStars = 1;
    }
    else if (document.getElementById("star-2-2").checked === true) {
        alert("You have given David 2 Stars");
        noOfStars = 2;
    }
    else if (document.getElementById("star-3-2").checked === true) {
        alert("You have given David 3 Stars");
        noOfStars = 3;
    }
    else if (document.getElementById("star-4-2").checked === true) {
        alert("You have given David 4 Stars!");
        noOfStars = 4;
    }
    else {
        alert("WOW! 5 Stars!");
        noOfStars = 5;
        }
    }
	database.ref('review-david/').update({
  	[username]: noOfStars
 	});
 	finishedCurrentView();
}