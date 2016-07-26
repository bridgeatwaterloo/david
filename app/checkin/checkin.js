// When the user clicks the button
$('.submit-checkin').click(processCheckin);

function processCheckin() {
  // Start by checking if geolocation is available
  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log('getting geolocation...');

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);

      // Get the user's lat and long out of the position object
      var userLat = position.coords.latitude;
      var userLon = position.coords.longitude;

      // The lat and long of St Andrew's Church.
      // N.B. Must change this to Southbank centre before performance!
      var targetLat = 51.5024578;
      var targetLon = -0.1067309;

      // calculate the distance by passing our variables to our helper function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) saved in helper-functions.js. The function returns a value in km that is the distance between two points. We assign this to a new variable, distance.
      var distance = getDistanceFromLatLonInKm(userLat, userLon, targetLat, targetLon);

      // Our logic. If the distance between our user and the target is less than 100m, show the login screen, else update the view with a helpful message
      if (distance < 1000) {
        window.location.href = '/app/set-username';//finishedCurrentView();
      } else {
        $('p.geolocation-message').html('Please try again when you get to the Southbank Centre');
      }
    });

  } else {
    /* geolocation IS NOT available */

  } // END of geolocation check
} // END of processCheckin



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
