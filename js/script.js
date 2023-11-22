$(document).ready(function() {
    // Event listener for submit button click
    $("#submitButton").click(function() {
        var trackingNumber = $("#trackingNumberInput").val();
        if (validateInput(trackingNumber)) {
            sendRequest(trackingNumber);
        } else {
            displayError("Invalid tracking number");
        }
    });
});

function validateInput(trackingNumber) {
    // Validate tracking number input
    if (trackingNumber.trim() === "") {
        return false;
    }
    // Add more validation criteria if needed
    return true;
}

function sendRequest(trackingNumber) {
    // Send AJAX request to backend API
    $.ajax({
        url: "/api/userData",
        method: "GET",
        data: { trackingNumber: trackingNumber },
        success: function(response) {
            displayUserData(response);
        },
        error: function(error) {
            displayError("Error occurred while fetching user data");
            console.log("Error:", error);
        }
    });
}

function displayUserData(userData) {
    // Display user data in the sidebar
    var formattedData = formatUserData(userData);
    $(".sidebar").html(formattedData);
}

function formatUserData(userData) {
    // Format user data for display
    var formattedData = "<ul>";
    for (var key in userData) {
        formattedData += "<li><strong>" + key + ":</strong> " + userData[key] + "</li>";
    }
    formattedData += "</ul>";
    return formattedData;
}

function displayError(errorMessage) {
    // Display error message in the sidebar
    $(".sidebar").html("<p class='error'>" + errorMessage + "</p>");
}
