
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


	var keyValues = [];

	for(var key in list){
		keyValues.push([key,list[key]])
	}

	keyValues.sort(function compare(kv1,kv2){
		return kv1[1]-kv2[1];
	});

	//console.log(keyValues[3]);
	$(".decision-clothing-result").html(keyValues[3][0]);

});

//Listener for the decision-emotion page
firebase.database().ref('decision-emotion').on('value', function(snapshot){
	var list ={
		"Unhappy": 0,
		"Joyfull" : 0, 
		"Needy" : 0,
		"Frustrated" :0,
		"Appathetic" :0
	}

	snapshot.forEach(function(data){
		//console.log(data.key + ": " +data.val() );
		if(data.val()==="Unhappy"){
			list.Unhappy++;
		}else if (data.val()==="Joyfull"){
			list.Joyfull++;
		}else if (data.val()==="Needy"){
			list.Needy++;
		}else if (data.val()=="Frustrated"){
			list.Frustrated++;
		}else if (data.val()=="Appathetic"){
			list.Appathetic++;
		}
	});


	var keyValues = [];

	for(var key in list){
		keyValues.push([key,list[key]])
	}

	keyValues.sort(function compare(kv1,kv2){
		return kv1[1]-kv2[1];
	});

	//console.log(keyValues[3]);
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

	snapshot.forEach(function(data){
		clicks = clicks +data.val();
	});
	console.log(clicks);

	if(clicks<50){
		speed=4000;

	}else if (clicks<100){
		speed=3000;
	}else if (clicks<150){
		speed=2500;
	}else if (clicks<200){
		speed=2000;
	}else{
		speed=1500
	}


});