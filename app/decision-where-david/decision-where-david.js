var targetPosition;
var currentView = window.location.pathname;
setView(currentView);
$( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false , 
	drag: function(){
            // var offset = $(this).offset();
            // var xPos = offset.left;
            // var yPos = offset.top;
            //console.log('x: ' + xPos);
            //console.log('y: ' + yPos);
    },
    stop: function(){
        // Bottom-left coordinates
        var finalPosition = $(this).position();
        // Getting position for the center of the image
        var finalxPos = finalPosition.left + $(this).width() / 2;
        var finalyPos = finalPosition.top + $(this).height() / 2; 
        var parentWidth = $("#containment-wrapper").width();
        var parentHeight = $("#containment-wrapper").height();
        console.log('Final X: ' + finalxPos);
        console.log('Final Y: ' + finalyPos);
        console.log('Parent size: ' + parentWidth + " x " + parentHeight);

        targetPosition = processPosition(finalxPos, finalyPos, parentWidth, parentHeight);
    }
});

$('.submit').click(submit);

function processPosition(xPos, yPos, parentWidth, parentHeight) {
    const horizRegions = 3;
    const vertRegions = 3;
    const positionNames = ["back-left", "back", "back-right", "left", "center", "right", "front-left", "front", "front-right"];
    var column = Math.floor(xPos / (parentWidth / horizRegions));
    var row = Math.floor(yPos / (parentHeight / vertRegions));
    var positionIndex = row * horizRegions + column;
    var result = positionNames[positionIndex];
    return result;
}

function submit() {
    var username = getUsername();
    database.ref('decision-where-david').update({
        [username]: targetPosition
    });
    console.log("David's target position: " + targetPosition);
    finishedCurrentView();
}