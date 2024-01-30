$(document).ready(function() {
    // Perform any initialization tasks here

    // Call the backend API to retrieve data and display it on the webpage
    fetchData();
});

function fetchData() {
    // Make an AJAX request to the backend API to retrieve data
    $.ajax({
        url: '/api/data', // Replace with the actual API endpoint
        method: 'GET',
        success: function(response) {
            // Process the response data and display it on the webpage
            displayData(response);
        },
        error: function(error) {
            // Handle any errors that occur during the AJAX request
            displayError('Error retrieving data. Please try again later.');
            console.log('Error:', error);
        }
    });
}

function displayData(data) {
    // Display the retrieved data on the webpage
    // Replace the following code with the actual logic to display the data
    var html = '<p>' + data + '</p>';
    $('#data-container').html(html);
}

function displayError(message) {
    // Display an error message on the webpage
    var html = '<p class="error">' + message + '</p>';
    $('#data-container').html(html);
}
