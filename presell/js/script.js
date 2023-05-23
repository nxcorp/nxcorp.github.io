// This is the JavaScript file that defines the behavior and logic of the web site

// This is a variable that stores a reference to the element with id="message"
var message = document.getElementById("message");

// This is a function that hides the message element after 3 seconds
function hideMessage() {
  // This is a method that executes a function after a specified delay in milliseconds
  setTimeout(function() {
    // This is a property that sets the display style of the element to none, meaning it will not be rendered on the page
    message.style.display = "none";
  }, 3000);
}

// This is an event listener that runs the hideMessage function when the page loads
window.addEventListener("load", hideMessage);
