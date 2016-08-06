function showDiv(divName) {
  $('.all').hide();
  $(divName).show();
}

// When the user clicks the button
$('.btn-username').click(processForm, function(){
	showDiv(".prep");
	$('.btn-all').hide();
	setTimeout(function() {$('.btn-prep').show();},3000);
	
});

// When the user clicks the button
$('.btn-prep').click(function(){
	showDiv(".instruction");
	setTimeout(function() {$('.btn-instruction').show();},3000);
})

// Get the form, listen to its submit event

$('.form-set-username').on('submit', processForm);

$('.btn-instruction').click(finishedOnboarding);

// function to run when the form is submitted
function processForm() {
	showDiv(".prep");
	$('.btn-all').hide();
	setTimeout(function() {$('.btn-prep').show();},3000);
 // get the entered user name from the input
	var username = $('input').val();
	if (username == null || username == ""){
 		username = "anonymous";
 	}
 	localStorage.setItem('username', username);
		database.ref('users/'+ username).set({
    	username: username
    });
 	return false;
};

showDiv(".username");
startCurrentView();

