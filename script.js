$(document).ready(function() {
  // Listen for changes in product model and demand time input fields
  $('#product-model-input, #demand-time-input').on('change', function() {
    // Get user input of product model and demand time
    var productModel = $('#product-model-input').val();
    var demandTime = $('#demand-time-input').val();
    
    // Send GET request to backend API /purchase-plans with product model and demand time as parameters
    $.get('/purchase-plans', { productModel: productModel, demandTime: demandTime })
      .done(function(response) {
        // Parse and sort purchase plan list data from backend response
        var purchasePlans = response.purchasePlans;
        purchasePlans.sort(function(a, b) {
          return a.expenditure - b.expenditure;
        });
        
        // Render sorted purchase plan list to the page
        renderPurchasePlanList(purchasePlans);
      })
      .fail(function(error) {
        // Handle error in the GET request
        console.error('Error:', error);
        // Display error message to the user
        $('#error-message').text('Error retrieving purchase plans. Please try again later.');
      });
  });
  
  // Listen for click events on sort button
  $('#sort-button').on('click', function() {
    // Get purchase plan list data from the page
    var purchasePlans = getPurchasePlanListData();
    
    // Sort purchase plan list by expenditure
    purchasePlans.sort(function(a, b) {
      return a.expenditure - b.expenditure;
    });
    
    // Render sorted purchase plan list to the page
    renderPurchasePlanList(purchasePlans);
  });
  
  // Listen for click events on add and edit buttons
  $('#add-button, #edit-button').on('click', function() {
    // Show dialog for user to input supplier information
    showDialog();
  });
  
  // Function to render purchase plan list to the page
  function renderPurchasePlanList(purchasePlans) {
    // Clear existing purchase plan list
    $('#purchase-plan-list').empty();
    
    // Iterate through purchase plans and append them to the list
    for (var i = 0; i < purchasePlans.length; i++) {
      var purchasePlan = purchasePlans[i];
      var listItem = $('<div class="item"></div>');
      listItem.text(purchasePlan.productModel + ' - ' + purchasePlan.expenditure);
      $('#purchase-plan-list').append(listItem);
    }
  }
  
  // Function to get purchase plan list data from the page
  function getPurchasePlanListData() {
    var purchasePlans = [];
    $('#purchase-plan-list .item').each(function() {
      var purchasePlanData = $(this).text().split(' - ');
      var purchasePlan = {
        productModel: purchasePlanData[0],
        expenditure: parseFloat(purchasePlanData[1])
      };
      purchasePlans.push(purchasePlan);
    });
    return purchasePlans;
  }
  
  // Function to show dialog for user to input supplier information
  function showDialog() {
    // Show dialog code here
  }
});
