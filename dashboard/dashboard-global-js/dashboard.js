


$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel1 option:selected").text();
	console.log(view);

	if(view==='/app/decision-want-more/'){
		database.ref('view/').update({
		currentView: '/app/decision-want-more/?iter=1'
		});


	}
	database.ref('view/').update({
		currentView: view
	});

	alert("set view to " + view);


}

$('.holding').click(processHolding);

function processHolding(){
		database.ref('holding/').update({
		Holding: 'true'
		});

		setTimeout(function(){
			    database.ref('holding/').update({
    				Holding: 'false'
    			});
		}, 3000);
}

$('.clear').click(processClear);

function processClear(){
		database.ref('clear/').update({
		clear: 'true'
		});

		setTimeout(function(){
			    database.ref('clear/').update({
    				clear: 'false'
    			});
		}, 3000);
}
