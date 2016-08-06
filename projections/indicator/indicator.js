var coin = new Audio('Coin.mp3');
 var meow = new Audio("purrline.mp3")
var resultsound = new Audio('result.mp3');

function showIndicatorView(view) {
  $('.view').hide();

  $('.view-indicator').show();
  coin.play();
  if(view!='.decision-want-more' && view!='.david-to-life' && view!='.decision-are-you-happy'){
    resultsound.play();
  }

  if (view=='.decision-are-you-happy') {
    meow.play();
  }

  setTimeout(function() {
  	$(view).show();
  	$('.view-indicator').hide();
  }, 2500);
 }

