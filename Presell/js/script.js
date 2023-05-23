// This is the JS file for the web site
// It contains the functionality of the web site
// It uses DOM manipulation and setTimeout function to toggle between two messages

// Get the first message span by its id
var message1 = document.getElementById("message-1");

// Get the second message span by its id
var message2 = document.getElementById("message-2");

// Set a delay of 3 seconds using setTimeout function
setTimeout(function() {
  // Remove the active class from the first message span
  message1.classList.remove("active");

  // Add the active class to the second message span
  message2.classList.add("active");
}, 3000); // 3000 milliseconds = 3 seconds
