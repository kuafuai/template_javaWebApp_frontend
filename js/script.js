/* The purpose of this file is to handle the front-end logic for the book analysis application. */

$(document).ready(function() {
  // Event listener for the "Get Book Data" button
  $("#getDataButton").click(function() {
    // Send a request to the backend API to get book data
    $.ajax({
      url: "/api/bookData",
      method: "GET",
      success: function(response) {
        // Clear the existing book data
        $("#bookData").empty();

        // Iterate through the book data and add it to the table
        for (var i = 0; i < response.length; i++) {
          var book = response[i];
          var row = "<tr>" +
                      "<td>" + book.title + "</td>" +
                      "<td>" + book.author + "</td>" +
                      "<td>" + book.publisher + "</td>" +
                      "<td>" + book.callNumber + "</td>" +
                      "<td>" + book.isbn + "</td>" +
                      "<td>" + book.views + "</td>" +
                    "</tr>";
          $("#bookData").append(row);
        }
      },
      error: function() {
        alert("Failed to get book data.");
      }
    });
  });
});
