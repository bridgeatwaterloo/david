
// Get the form, listen to its submit event
$('.form-set-username').on('submit', processForm);
var currentView = window.location.pathname;
setView(currentView);

// function to run when the form is submitted
function processForm() {

  // get the entered user name from the input
  var enteredUsername = $('input').val();
  localStorage.setItem('username', enteredUsername);
    database.ref('users/'+ enteredUsername).set({
  	username: enteredUsername
 	});
  
  finishedCurrentView();

  $('.username').html(enteredUsername);

  return false;
}