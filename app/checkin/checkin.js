// When the user clicks the button
$('.submit-checkin').click(processCheckin);

startCurrentView();

function processCheckin() {
  // Start by checking if geolocation is available
  if ("geolocation" in navigator) {
    /* geolocation is available */
    startLoadingAnimation();
    console.log('getting geolocation...');

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);

      // Get the user's lat and long out of the position object
      var userLat = position.coords.latitude;
      var userLon = position.coords.longitude;

      // The lat and long of Southbank centre
      var targetLat = 51.505533; 
      var targetLon = -0.117014;

      // calculate the distance by passing our variables to our helper function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) saved in helper-functions.js. The function returns a value in km that is the distance between two points. We assign this to a new variable, distance.
      var distance = getDistanceFromLatLonInKm(userLat, userLon, targetLat, targetLon);

      // Our logic. If the distance between our user and the target is less than 100m, show the login screen, else update the view with a helpful message

      if (distance < 1) {
        
          setTimeout(function() {
            window.location.href = '/app/onboarding/';
          }, 1000);
      } else {
        stopLoadingAnimation()
        $('p.geolocation-message').html('Please try again when you get to the Southbank Centre');
      }
    }, function(error) {
          // error in here
          stopLoadingAnimation();
          noGeo();
      });

  } else {
    /* geolocation IS NOT available */
    noGeo();
  } // END of geolocation check
} // END of processCheckin

function noGeo(){

    $('p.geolocation-message').html('Enable your geolocation services in settings, and then try again. Ask one of the helpers if you need assistance.');
}

// http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
