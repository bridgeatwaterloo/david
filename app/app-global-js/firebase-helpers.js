// File for firebase related variables and functions//


//----------VARIABLES------//
//function call to set up databse
setupFirebase();
//variable with path to database
var database = firebase.database();
// variable that will be updated with the current view in firebase field

//----FUNCTIONS---------------//
function setupFirebase(){
  var config = {
    apiKey: "AIzaSyBl1i8P3m__Yp7Y-Hq-6XbOOaC232muFSw",
    authDomain: "david-app-test.firebaseapp.com",
    databaseURL: "https://david-app-test.firebaseio.com",
    storageBucket: "david-app-test.appspot.com",
  };
  firebase.initializeApp(config);
}

//listening for the value of the current view field in firebase to change
firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
  localStorage.setItem('nextView', view);
});

//function to fetch the current view that is in the database
function getFireBaseView(){
	return localStorage.getItem('nextView');
}



