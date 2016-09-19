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
    apiKey: "AIzaSyDYubCeB7K0hEieX1P8ciFjmwXP1dzYKNI",
    authDomain: "davids-app-6e4cd.firebaseapp.com",
    databaseURL: "https://davids-app-6e4cd.firebaseio.com",
    storageBucket: "davids-app-6e4cd.appspot.com",
    messagingSenderId: "637187185418"
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



