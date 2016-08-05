$('.load-next-view').on('click', checkNextView);

var nextview = getFireBaseView();
var previousView = getView();

function checkNextView() {
  //get next view from firebase
  startLoadingAnimation();
  nextview = getFireBaseView();
  // get previous view from local storage
  previousView = getView();


  // if the next view is not the same as the previous view then go to the next view
  
    if(previousView !== nextview){
      setTimeout(function() {
        window.location.href = nextview;
      }, 1000)
    }else{
      stopLoadingAnimation();
      $('.extra-message').html(" The performance isn't ready yet, ")
    }
  

}