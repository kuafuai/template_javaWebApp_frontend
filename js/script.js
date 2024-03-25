$(document).ready(function() {
    // Search button click event handler
    $("#searchButton").click(function() {
        var bookName = $("#bookNameInput").val();
        var bookType = $("#bookTypeInput").val();
        
        // Send request to back-end API
        $.ajax({
            url: "back-end-api-url",
            method: "GET",
            data: {
                name: bookName,
                type: bookType
            },
            success: function(response) {
                // Display book data in the main content display area
                displayBookData(response);
            },
            error: function() {
                // Handle error
                alert("Error occurred while retrieving book data.");
            }
        });
    });
});

function displayBookData(bookData) {
    // Clear previous book data
    $("#bookDataDisplay").empty();
    
    // Iterate through book data and create HTML elements to display the data
    for (var i = 0; i < bookData.length; i++) {
        var book = bookData[i];
        
        var bookElement = $("<div>").addClass("ui segment");
        var nameElement = $("<h3>").text("Name: " + book.name);
        var typeElement = $("<p>").text("Type: " + book.type);
        var authorElement = $("<p>").text("Author: " + book.author);
        var subjectElement = $("<p>").text("Subject: " + book.subject);
        var keywordsElement = $("<p>").text("Keywords: " + book.keywords.join(", "));
        
        bookElement.append(nameElement, typeElement, authorElement, subjectElement, keywordsElement);
        $("#bookDataDisplay").append(bookElement);
    }
}
