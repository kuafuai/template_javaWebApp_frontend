<!DOCTYPE html>
<html>
<head>
  <title>Asset Registration</title>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
</head>
<body>
  <div class="ui container">
    <h1>Asset Registration</h1>
    <form id="assetForm" class="ui form">
      <div class="field">
        <label>Asset Number</label>
        <input type="text" name="assetNumber" required>
      </div>
      <div class="field">
        <label>Name</label>
        <input type="text" name="name" required>
      </div>
      <div class="field">
        <label>Specifications</label>
        <input type="text" name="specifications" required>
      </div>
      <div class="field">
        <label>Purchase Date</label>
        <input type="date" name="purchaseDate" required>
      </div>
      <div class="field">
        <label>Purchase Price</label>
        <input type="number" name="purchasePrice" required>
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
    <div id="result" class="ui message hidden"></div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
  <script>
    // Function to handle form submission
    function submitForm(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get the form data
      var assetNumber = $("input[name='assetNumber']").val();
      var name = $("input[name='name']").val();
      var specifications = $("input[name='specifications']").val();
      var purchaseDate = $("input[name='purchaseDate']").val();
      var purchasePrice = $("input[name='purchasePrice']").val();

      // Create the request body
      var requestBody = {
        asset_number: assetNumber,
        name: name,
        specifications: specifications,
        purchase_date: purchaseDate,
        purchase_price: purchasePrice
      };

      // Send a POST request to the backend API
      $.ajax({
        url: "/api/asset",
        type: "POST",
        data: JSON.stringify(requestBody),
        contentType: "application/json",
        success: function(response) {
          // Display the success message
          $("#result").removeClass("hidden error").addClass("success").text("Asset registration successful.");
        },
        error: function(xhr, status, error) {
          // Display the error message
          $("#result").removeClass("hidden success").addClass("error").text("Asset registration failed.");
        }
      });
    }

    // Attach the submitForm function to the form's submit event
    $("#assetForm").submit(submitForm);
  </script>
</body>
</html>
