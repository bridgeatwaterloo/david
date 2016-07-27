function showDiv(divName) {
  $('.all').hide();
  $(divName).show();
}

// When the user clicks the button
$('.btn-username').click(function(){
	showDiv(".prep");

});

// When the user clicks the button
$('.btn-prep').click(function(){
	showDiv(".instruction");

})

// When the user clicks the button
//$('.btn-instruction').click(showDiv);

showDiv(".username")