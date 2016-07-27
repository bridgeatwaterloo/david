


$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel1 option:selected").text();
	console.log(view);

	database.ref('view/').update({
		currentView: view
	});

	alert("set view to " + view);

}

