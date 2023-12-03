$(document).ready(function() {
    // Handle navigation bar clicks
    $('.menu li a').click(function(e) {
        e.preventDefault();
        var sectionId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    });

    // Handle search form submission
    $('#search-form').submit(function(e) {
        e.preventDefault();
        var keyword = $('#search-input').val();
        // Send AJAX request to backend API with keyword
        $.ajax({
            url: '/api/search',
            method: 'GET',
            data: { keyword: keyword },
            success: function(response) {
                // Display search results in the products section
                $('#products').html(response);
            },
            error: function(error) {
                // Display error message
                $('#products').html('Error occurred while searching.');
            }
        });
    });

    // Handle sorting option change
    $('#sort-select').change(function() {
        var sortOption = $(this).val();
        // Send AJAX request to backend API with sortOption
        $.ajax({
            url: '/api/sort',
            method: 'GET',
            data: { sortOption: sortOption },
            success: function(response) {
                // Display sorted products in the products section
                $('#products').html(response);
            },
            error: function(error) {
                // Display error message
                $('#products').html('Error occurred while sorting.');
            }
        });
    });

    // Handle add to cart button click
    $('.add-to-cart').click(function() {
        var productId = $(this).data('id');
        // Send AJAX request to backend API to add product to cart
        $.ajax({
            url: '/api/add-to-cart',
            method: 'POST',
            data: { productId: productId },
            success: function(response) {
                // Update cart section with the added product
                $('#cart').html(response);
            },
            error: function(error) {
                // Display error message
                $('#cart').html('Error occurred while adding to cart.');
            }
        });
    });

    // Handle remove from cart button click
    $('.remove-from-cart').click(function() {
        var productId = $(this).data('id');
        // Send AJAX request to backend API to remove product from cart
        $.ajax({
            url: '/api/remove-from-cart',
            method: 'POST',
            data: { productId: productId },
            success: function(response) {
                // Update cart section without the removed product
                $('#cart').html(response);
            },
            error: function(error) {
                // Display error message
                $('#cart').html('Error occurred while removing from cart.');
            }
        });
    });

    // Handle payment form submission
    $('#payment-form').submit(function(e) {
        e.preventDefault();
        var paymentInfo = {
            // Get payment information from form fields
            cardNumber: $('#card-number').val(),
            cardHolder: $('#card-holder').val(),
            // Add other payment fields as needed
        };
        // Send AJAX request to backend API with paymentInfo
        $.ajax({
            url: '/api/process-payment',
            method: 'POST',
            data: paymentInfo,
            success: function(response) {
                // Process payment and display success/failure message
                if (response.success) {
                    $('#payment-message').html('Payment successful.');
                } else {
                    $('#payment-message').html('Payment failed.');
                }
            },
            error: function(error) {
                // Display error message
                $('#payment-message').html('Error occurred while processing payment.');
            }
        });
    });
});
