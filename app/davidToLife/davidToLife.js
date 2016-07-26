var database = firebase.database();
var username = getUsername();
var noOfTaps =0;
$('.btn-heartbeat').click(processBeat);

function processBeat() {
	noOfTaps += 1;
	console.log(noOfTaps);
	database.ref('clicks/').update({
    [username]: noOfTaps,
  	});
}

function gotToTenTaps(){

}