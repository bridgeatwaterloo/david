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
  
    if(previousView !== nextview){
      startLoadingAnimation()
      setTimeout(function() {
        window.location.href = nextview;
      }, 1000)
    }else{
      $('.extra-message').html(" The next view isn't ready yet, ")
    }
  

}