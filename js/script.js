// Handle button click event
document.getElementById("startButton").addEventListener("click", function() {
    // Send GET request to backend API
    getWeather("cityName");
});

// Function to send GET request to backend API
function getWeather(city) {
    $.ajax({
        url: "http://localhost:8080/api/getWeather",
        type: "GET",
        data: {
            city: city
        },
        success: function(response) {
            // Handle response from backend API
            sendWeather(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

// Function to send POST request to backend API to save callback record
function saveCallbackRecord(record) {
    $.ajax({
        url: "http://localhost:8080/api/saveCallbackRecord",
        type: "POST",
        data: JSON.stringify(record),
        contentType: "application/json",
        success: function(response) {
            console.log("Callback record saved successfully");
        },
        error: function(error) {
            console.log(error);
        }
    });
}

// Function to send POST request to backend API to send weather information to WeChat bot
function sendWeather(weather) {
    $.ajax({
        url: "http://localhost:8080/api/sendWeather",
        type: "POST",
        data: JSON.stringify(weather),
        contentType: "application/json",
        success: function(response) {
            console.log("Weather sent to WeChat bot successfully");
            // Save callback record
            saveCallbackRecord({
                callbackTime: new Date().toISOString(),
                callbackData: JSON.stringify(weather)
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
}
