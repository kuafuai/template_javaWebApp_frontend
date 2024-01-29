<!DOCTYPE html>
<html>
<head>
  <title>Backend Management System</title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
</head>
<body>
  <div class="ui container">
    <h1 class="ui header">Backend Management System</h1>
    <form id="orderForm" class="ui form">
      <div class="field">
        <label>Order Quantity</label>
        <input type="number" name="orderQuantity" required>
      </div>
      <div class="field">
        <label>Dispatcher</label>
        <input type="text" name="dispatcher" required>
      </div>
      <div class="field">
        <label>Dispatch Time</label>
        <input type="text" name="dispatchTime" required>
      </div>
      <div class="field">
        <label>Dispatch Content</label>
        <textarea name="dispatchContent" required></textarea>
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
    <div id="result" class="ui message"></div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#orderForm').submit(function(event) {
        event.preventDefault();

        // Get form data
        var orderQuantity = $('input[name="orderQuantity"]').val();
        var dispatcher = $('input[name="dispatcher"]').val();
        var dispatchTime = $('input[name="dispatchTime"]').val();
        var dispatchContent = $('textarea[name="dispatchContent"]').val();

        // Validate form data
        if (!orderQuantity || !dispatcher || !dispatchTime || !dispatchContent) {
          displayResult(400, 'Please fill out all fields.', null);
          return;
        }

        // Disable submit button and show loading spinner
        var submitButton = $(this).find('button[type="submit"]');
        submitButton.addClass('loading');
        submitButton.prop('disabled', true);

        // Create request body
        var requestBody = {
          orderQuantity: orderQuantity,
          dispatcher: dispatcher,
          dispatchTime: dispatchTime,
          dispatchContent: dispatchContent
        };

        // Send AJAX POST request to backend API
        $.ajax({
          url: '/api/orders',
          type: 'POST',
          data: JSON.stringify(requestBody),
          contentType: 'application/json',
          success: function(response) {
            // Handle successful response
            displayResult(response.statusCode, response.statusMessage, response.orderInfo);
          },
          error: function(xhr, status, error) {
            // Handle error response
            displayResult(xhr.status, error, null);
          },
          complete: function() {
            // Enable submit button and hide loading spinner
            submitButton.removeClass('loading');
            submitButton.prop('disabled', false);
          }
        });
      });

      function displayResult(statusCode, statusMessage, orderInfo) {
        var resultDiv = $('#result');
        resultDiv.empty();

        // Display status code and message
        var statusHeader = $('<div>').addClass('header').text('Status: ' + statusCode);
        var statusMessageDiv = $('<div>').text(statusMessage);
        resultDiv.append(statusHeader).append(statusMessageDiv);

        // Display order information if available
        if (orderInfo) {
          var orderHeader = $('<div>').addClass('header').text('Order Information');
          var orderInfoDiv = $('<div>').text(JSON.stringify(orderInfo));
          resultDiv.append(orderHeader).append(orderInfoDiv);
        }
      }
    });
  </script>
</body>
</html>
