//rotate.js
//Handles the image rotation seen on the website's home page

//Put all of today's information into a JavaScript Date object
// var today = new Date();

//Build the appropriate prefix for filenames, depending on whether
//today is a weekday (indoor images) or the weekend (outdoor images)
var prefix = "images/";

var imageArray = new Array(3);

var imageCounter = 0;
function rotate() {
  var imageObject = document.getElementById("placeholder");
  imageObject.src = imageArray[imageCounter];
  ++imageCounter;
  if (imageCounter == 3) imageCounter = 0;
}

function startRotation() {
  prefix = "images/";
  switch (parseInt(document.getElementById("service").value)) {
    case 0:
      prefix += "gmail";
      break;
    case 1:
      prefix += "yahoo";
      break;
    case 2:
      prefix += "outlook";
      break;
  }
  imageArray = new Array(3);
  for (i = 0; i < imageArray.length; i++)
    imageArray[i] = prefix + (i + 1) + ".jpg";
  imageCounter = 0;
  document.getElementById("placeholder").src = imageArray[5];
  setInterval("rotate()", 2000);
}
