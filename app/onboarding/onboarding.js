// Get the form, listen to its submit event
$('.form-set-username').on('submit', processForm);

startCurrentView();

// function to run when the form is submitted
function processForm() {

  // get the entered user name from the input
  var username = $('input').val();
  localStorage.setItem('username', username);
    database.ref('users/'+ username).set({
  	username: username
 	});
  
  finishedCurrentView();
  
  return false;
}