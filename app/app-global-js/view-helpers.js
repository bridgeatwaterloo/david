/*

  showView

  accepts the class name of a view you wish to show
  hides all views, and then shows the view you passed it

  Example use:

  showView('.view-checkin');
*/


/*

  finishedCurrentView

  redirects the app to the holding page

  should be used when a user has finished with a particular view

  see /app/checkin/checkin.js for an example of this in action
*/


//method that transfers view to the holding view
function finishedCurrentView() {
  window.location.href = '/app/holding';
}


/*

  startLoadingAnimation

  displays a universal loadingAnimation

*/

function startLoadingAnimation() {

}

/*

  stopLoadingAnimation

  removes the universal loadingAnimation

*/

function stopLoadingAnimation() {

}

//function to set the currentview in local storage
function setView(path) {
  localStorage.setItem('currentView', path);
}
//function to get the currentview from local storage
function getView() {
  return localStorage.getItem('currentView');
}

// This is a function that will allow us to store each decision with the username of each user
//for this we will need to use this line: var username = getUsername(); in each decision function.
function getUsername() {
	var username = localStorage.getItem('username');
	return username;
}
