(function () {
  // Select the element by ID
  var myElement = document.getElementById("simple-bar");

  // Check if the element exists
  if (myElement) {
    // Initialize SimpleBar
    new SimpleBar(myElement, { autoHide: true });
    console.log("SimpleBar initialized successfully.");
  } else {
    console.error("Element with ID 'simple-bar' not found.");
  }
})();
