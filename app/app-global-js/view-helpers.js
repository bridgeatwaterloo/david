/*

  startCurrentView

  tells the app to stay on the holding page
  until a new view is selected on the dashboard

*/

function startCurrentView() {
var currentView = window.location.pathname;
setView(currentView);
}

/*

  finishedCurrentView

  redirects the app to the holding page

  should be used when a user has finished with a particular view

  see /app/checkin/checkin.js for an example of this in action
*/


//method that transfers view to the holding view
function finishedCurrentView(timeout) {
  if (!timeout) {
    timeout = 0;
  }
  setTimeout(function() {
    window.location.href = '/app/holding';
  }, timeout);
}

/*

  finishedOnboarding

  redirects the app to the holding-onboarding page

  should be used when a user has finished with onboarding

*/


//method that transfers view to the holding view
function finishedOnboarding() {
  window.location.href = '/app/holding-onboarding';
}


/*

  startLoadingAnimation

  displays a universal loadingAnimation

*/

function startLoadingAnimation(messageString) {
  var messageDiv = '';
  if (messageString) {
    messageDiv = '<div class="loading-message"><p class="text-xs-center">' + messageString + '</p></div>';
  }

  $('body').append('<div class="loading-animation-container">'
      + messageDiv +
      '<div class="loading-animation">\
        <div class="ball"/>\
        <div class="ball"/>\
        <div class="ball"/>\
        <div class="ball"/>\
        <div class="ball"/>\
        <div class="ball"/>\
        <div class="ball"/>\
      </div>\
    </div>');

}
 
/*

  stopLoadingAnimation

  removes the universal loadingAnimation

*/

function stopLoadingAnimation() {
  $('.loading-animation-container').remove();
  $('.loading-animation').remove();
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