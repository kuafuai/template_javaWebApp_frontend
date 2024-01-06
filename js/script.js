// js/script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    $.ajax({
        url: 'backend/api/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            updatePageContent(response);
        },
        error: function(error) {
            displayErrorMessage(error);
        }
    });
}

// Function to update page content with response data
function updatePageContent(data) {
    // Update page content based on data
    // Example: Assuming there is a div with id "content", you can update its content with the response data
    $('#content').html(data);
}

// Function to display error message
function displayErrorMessage(error) {
    // Display error message to user
    // Example: Assuming there is a div with id "error-message", you can display the error message in it
    $('#error-message').text(error.responseText);
}

// Function to retrieve uploaded data
function getUploadedData() {
    $.ajax({
        url: 'backend/api/data',
        type: 'GET',
        success: function(response) {
            updatePageContent(response);
        },
        error: function(error) {
            displayErrorMessage(error);
        }
    });
}

// Event listener for form submission
$('form').on('submit', handleSubmit);

// Retrieve uploaded data on page load
$(document).ready(function() {
    getUploadedData();
});
