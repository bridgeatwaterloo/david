$('.load-next-view').on('click', checkNextView);

var nextview = getFireBaseView();
var previousView = getView();

function checkNextView() {

  //get next view from firebase
  nextview = getFireBaseView();
  // get previous view from local storage
  previousView = getView();






  console.log(nextview, previousView);

  // if the next view is not the same as the previous view then go to the next view
  setTimeout(function() {
    if(previousView !== nextview){
      window.location.href = nextview;
    }
  }, 1000)

}