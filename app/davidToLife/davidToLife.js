var database = firebase.database();

$('.btn-heartbeat').click(processBeat);

function processBeat() {
	username.noOfTaps += 1;
	console.log(username.noOfTaps);

}

function gotToTenTaps(){

	username.push({
		key: username,
		value: username.noOfTaps; 
	})

}