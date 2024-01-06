// js/script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    $.ajax({
        url: '/backend/api/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            updateDeviceProgramTable(response);
        },
        error: function(error) {
            alert('Failed to upload data.');
        }
    });
}

// Function to update device program table with response data
function updateDeviceProgramTable(devicePrograms) {
    // Clear the table body
    $('#deviceProgramTable tbody').empty();

    // Iterate through the devicePrograms array and add rows to the table
    for (var i = 0; i < devicePrograms.length; i++) {
        var deviceProgram = devicePrograms[i];
        var row = '<tr>' +
            '<td>' + deviceProgram.name + '</td>' +
            '<td>' +
            '<button class="editButton" data-id="' + deviceProgram.id + '">Edit</button>' +
            '<button class="deleteButton" data-id="' + deviceProgram.id + '">Delete</button>' +
            '</td>' +
            '</tr>';
        $('#deviceProgramTable tbody').append(row);
    }
}

// Function to display error message
function displayErrorMessage(error) {
    // Display error message to user
    // Example: Assuming there is a div with id "error-message", you can display the error message in it
    $('#error-message').text(error.responseText);
}

// Function to retrieve uploaded data
function loadDevicePrograms() {
    $.ajax({
        url: '/backend/api/data',
        type: 'GET',
        success: function(response) {
            updateDeviceProgramTable(response);
        },
        error: function(error) {
            alert('Failed to retrieve data.');
        }
    });
}

// Event listener for form submission
$('form').on('submit', handleSubmit);

// Retrieve uploaded data on page load
$(document).ready(function() {
    loadDevicePrograms();
});