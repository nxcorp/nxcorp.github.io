// This is
// JavaScript file for
// website // It contains
// logic of website

// Get elements by their IDs


const button = document.getElementById("button"); // Get anchor element that acts as button with link

const topImage = document.getElementById("top-image"); // Get image element that displays first image above button

const bottomImage = document.getElementById("bottom-image"); // Get image element that displays last image below button

var message = document.getElementById("message");

// This is a function that hides the message element after 3 seconds
function hideMessage() {
  // This is a method that executes a function after a specified delay in milliseconds
  setTimeout(function() {
    // This is a property that sets the display style of the element to none, meaning it will not be rendered on the page
    message.style.display = "none";
  }, 3000);
}

// Define function for resizing images

function resizeImages() {
// Get viewport width and height

const vw = window.innerWidth;

const vh = window.innerHeight;

// Calculate aspect ratio of viewport

const aspectRatio = vw / vh;

// If aspect ratio is less// than one (portrait mode), resize images to fit height

if (aspectRatio < 1) {
   // Set image height to 40% of viewport height
   
   topImage.style.height = "40vh";
   
   bottomImage.style.height = "5vh";
   
   // Set image width to auto
   
   topImage.style.width = "auto";
   
   bottomImage.style.width = "auto";
   
   }
   
   // If aspect ratio is greater than or equal to one (landscape mode), resize images to fit width
   
   else {
   
   // Set image width to 80% of viewport width
   
   topImage.style.width = "15vw";
   
   bottomImage.style.width = "5vw";
   
   // Set image height to auto
   
   topImage.style.height = "auto";
   
   bottomImage.style.height = "auto";
   
   }
   
   }
   
   // Call resizeImages function when window is loaded
   
   window.addEventListener("load", resizeImages);
   
   // Call resizeImages function when window is resized
   
   window.addEventListener("resize", resizeImages);
   
   // This is an event listener that runs the hideMessage function when the page loads
   window.addEventListener("load", hideMessage);