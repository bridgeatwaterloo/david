
//Listener for database for decision-are-you-hapy
firebase.database().ref('decision-are-you-happy').on('value', function(snapshot){
	var numberOfNo=0;
	var numberOfYes=0;
	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Yes"){
			numberOfYes++;
		}else{
			numberOfNo++;
		}
	});

	//console.log("yes:" +numberOfYes);
	if(numberOfYes>numberOfNo){
		$(".decision-are-you-happy-result").html("YES");
	}else{
		$(".decision-are-you-happy-result").html("NO");
	}
});


//Listener for the database for decision-clothing
firebase.database().ref('decision-clothing').on('value', function(snapshot){
	var list ={
		"Tie": 0,
		"Shoes" : 0,
		"Jacket" : 0,
		"Trousers" :0,
	}

	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Shoes"){
			list.Shoes++;
		}else if (data.val()==="Tie"){
			list.Tie++;
		}else if (data.val()==="Jacket"){
			list.Jacket++;
		}else if (data.val()=="Trousers"){
			list.Trousers++;
		}
	});

	//create an array to hold all of the choices and the number of users that chose each choice
	var keyValues = [];

	//transfer the options and user choices into the array from the list object
	for(var key in list){
		keyValues.push([key,list[key]])
	}
	//sort the array so that the highest value (option selected by most users) is in the last element
	keyValues.sort(function compare(kv1,kv2){
		return kv1[1]-kv2[1];
	});

	//send the key of the last element to the html, this is the name of the option that most users selected
	$(".decision-clothing-result").html(keyValues[3][0]);

});

//Listener for the decision-emotion page
firebase.database().ref('decision-emotion').on('value', function(snapshot){
	var list ={
		"Unhappy": 0,
		"Joyful" : 0,
		"Needy" : 0,
		"Frustrated" :0,
		"Apathetic" :0
	}

	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Unhappy"){
			list.Unhappy++;
		}else if (data.val()==="Joyful"){
			list.Joyful++;
		}else if (data.val()==="Needy"){
			list.Needy++;
		}else if (data.val()=="Frustrated"){
			list.Frustrated++;
		}else if (data.val()=="Apathetic"){
			list.Apathetic++;
		}
	});


	//create an array to hold all of the choices and the number of users that chose each choice
	var keyValues = [];

	//transfer the options and user choices into the array from the list object
	for(var key in list){
		keyValues.push([key,list[key]])
	}
	//sort the array so that the highest value (option selected by most users) is in the last element
	keyValues.sort(function compare(kv1,kv2){
		return kv1[1]-kv2[1];
	});

	//send the key of the last element to the html, this is the name of the option that most users selected
	$(".decision-emotion-result").html(keyValues[4][0]);

});

firebase.database().ref('decision-are-you-finished').on('value', function(snapshot){
	var numberOfNo=0;
	var numberOfYes=0;
	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Yes"){
			numberOfYes++;
		}else{
			numberOfNo++;
		}
	});

	//console.log("yes:" +numberOfYes);
	if(numberOfYes>numberOfNo){
		$(".decision-are-you-finished-result").html("YES");
	}else{
		$(".decision-are-you-finished-result").html("NO");
	}
});

firebase.database().ref('decision-where-david').on('value', function(snapshot){
	var values = [];
	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		values.push([data.key,data.val()])
	});
	var length = values.length;
	var random =  Math.floor((Math.random() * length-1) + 1);

	//console.log(values);
	//console.log(random);
	var name = values[random][0];
	var position = values[random][1]
	$(".decision-where-david-name").html(name);
	$(".decision-where-david-result").html(position);
});

firebase.database().ref('clicks').on('value', function(snapshot){
	var clicks = 0;
	var users = 0;
	snapshot.forEach(function(data){
		clicks = clicks +data.val();
		users += 1;
	});
	//console.log(clicks);
	const maxClicksPerUser = 80;
	var clicksPerUser = 0;
	if (users > 0) {
		clicksPerUser = clicks/users/maxClicksPerUser;
	}
	var level = 0;
	if (clicksPerUser < 0.25){
		speed=4000;
		level = 1;
	} else if (clicksPerUser < 0.5){
		speed=3000;
		level = 2;
	} else if (clicksPerUser < 0.75){
		speed=2500;
		level = 3;
	} else if (clicksPerUser < 1){
		speed=2000;
		level = 4;
	} else{
		speed=1500
		level = 5;
	}

	updateLevelCss(level);

	//console.log(level);


	database.ref('heartbeat/').update({
		level: level
	});
});

firebase.database().ref('decision-want-more').on('value', function(snapshot){
	var numberOfNo=0;
	var numberOfYes=0;
	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Yes"){
			numberOfYes++;
		}else{
			numberOfNo++;
		}
	});

	//console.log("yes:" +numberOfYes);
	if(numberOfYes<numberOfNo){
		$(".decision-want-more-result").html("NO");
	}else{
		$(".decision-want-more-result").html("YES");
	}
});

var previousLevel=0;

function updateLevelCss(level){
	if(level!=previousLevel){
		if(level==1){
			$('.heartbeat-content').addClass('heartbeat-level-1');
		}else if(level==2){
			$('.heartbeat-content').addClass('heartbeat-level-2');
		}else if(level==3){
			$('.heartbeat-content').addClass('heartbeat-level-3');
		}else if(level==4){
			$('.heartbeat-content').addClass('heartbeat-level-4');
		}else if(level==5){
			$('.heartbeat-content').addClass('heartbeat-level-5');
		}
		previousLevel=level;
	}

}

firebase.database().ref('clear').on('value', function(snapshot) {
  var toClear = snapshot.val().clear;
  if(toClear ==='true'){
  	clearInterval(interval);
    $('.view').hide();
  }
});
