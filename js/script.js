$(document).ready(function() {
  // Add a comment to explain the purpose of the code
  // This code adds a click event to a button on the homepage and navigates to the 'Taste Beijing Duck' page when the button is clicked.
  $("a").click(function() {
    try {
      // Use the 'window.location.replace' method instead of 'window.location.href' for better error handling
      window.location.replace("taste.html");
    } catch (error) {
      // Handle any errors that occur during navigation
      console.error("Error navigating to 'taste.html':", error);
    }
  });
});
