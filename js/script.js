$(document).ready(function() {
    // Fetch data from backend API
    $.ajax({
        url: "backend-api-url",
        method: "GET",
        success: function(response) {
            // Populate the content sections with the retrieved data
            $("main section:eq(0) p").text(response.introduction);
            $("main section:eq(1) p").text(response.history);
            $("main section:eq(2) p").text(response.productionProcess);
            $("main section:eq(3) p").text(response.characteristics);
            $("main section:eq(4) p").text(response.services);
        },
        error: function() {
            console.log("Failed to fetch data from the backend API.");
        }
    });

    // Reservation button click event
    $("#reservationButton").click(function() {
        // Navigate to the reservation page
        window.location.href = "reservation.html";
    });
});
