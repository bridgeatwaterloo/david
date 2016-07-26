var finalyPos;
var finalxPos;
$( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false , 

	drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            //console.log('x: ' + xPos);
            //console.log('y: ' + yPos);
    },
       stop: function(){
            var finalOffset = $(this).offset();
            finalxPos = finalOffset.left;
            finalyPos = finalOffset.top;

            console.log('Final X: ' + finalxPos);
            console.log('Final Y: ' + finalyPos);
        }
    });

$('.submit').click(processPosition);

function processPosition(){
	var height = window.screen.availHeight; 
	var width = window.screen.availWidth;

	var centrewidth = finalxPos+55;
	var centreheight = finalyPos+55;
	console.log("width"+width);
	console.log("height"+height);

}