$('.load-next-view').on('click', checkNextView);

function checkNextView() {
	// get previous view from local storage
  var previousView = getView();
  //get next view from firebase
  var nextview = getFireBaseView();

  // if the next view is not the same as the previous view then go to the next view
  if(previousView!==nextview){
  	window.location.href = nextview;
  }
}