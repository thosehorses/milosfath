var images = [
  "https://cdn.discordapp.com/attachments/825271826124898314/1032773692599586877/unknown.png",
  "https://cdn.discordapp.com/attachments/825271826124898314/1032773571426132029/unknown.png",
  "https://cdn.discordapp.com/attachments/825271826124898314/1032773640455995492/unknown.png",
  "https://cdn.discordapp.com/attachments/825271826124898314/1032773452668612699/unknown.png"
];


// Let's create graphemescope object inside the container
var container = $("#container");
var scope = new Graphemescope( container[0] );


var index = 0;
function changePicture() {
    scope.setImage(images[index]);  
    index = (index + 1) % images.length;
};

setInterval(changePicture, 5000);
changePicture();

$(window).mousemove(function(event) {
  var factorx = event.pageX / $(window).width();
  var factory = event.pageY / $(window).height()
  
  // This will move kaleidoscope
  scope.angleTarget = factorx;
  scope.zoomTarget  = 1.0 + 0.5 * factory;
});


var resizeHandler = function() {
  container.height( $(window).height() );
  container.width( $(window).width() );
};

$(window).resize(resizeHandler);
$(window).resize();

container.click(changePicture);
