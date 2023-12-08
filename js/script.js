// js/script.js
$(document).ready(function() {
    // Handle login form submission
    $('.login-form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        // Call backend API to validate login credentials
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // Handle successful login
                alert('Login successful');
            },
            error: function(error) {
                // Handle login error
                alert('Login failed');
            }
        });
    });

    // Handle ticket form submission
    $('.ticket-form').submit(function(event) {
        event.preventDefault();
        var ticketContent = $('#ticket-content').val();
        var ticketImage = $('#ticket-image').val();
        // Call backend API to submit ticket
        $.ajax({
            url: '/api/submit-ticket',
            method: 'POST',
            data: {
                content: ticketContent,
                image: ticketImage
            },
            success: function(response) {
                // Handle successful ticket submission
                alert('Ticket submitted successfully');
            },
            error: function(error) {
                // Handle ticket submission error
                alert('Ticket submission failed');
            }
        });
    });

    // Handle ticket list retrieval
    function getTicketList() {
        // Call backend API to retrieve ticket list
        $.ajax({
            url: '/api/get-ticket-list',
            method: 'GET',
            success: function(response) {
                // Handle successful ticket list retrieval
                console.log(response);
            },
            error: function(error) {
                // Handle ticket list retrieval error
                console.log(error);
            }
        });
    }

    // Call getTicketList function on page load
    getTicketList();
});
