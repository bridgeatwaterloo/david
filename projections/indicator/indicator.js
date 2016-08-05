var coin = new Audio('Coin.mp3');
var resultsound = new Audio('result.mp3');

function showIndicatorView(view) {
  $('.view').hide();
  $('.view-indicator').show();
  coin.play();
  
  resultsound.play();

  setTimeout(function() {
  	$(view).show();
  	$('.view-indicator').hide();
  }, 2500);
 }