
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
firebase.database().ref('clothing-decision').on('value', function(snapshot){
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

