$(document).ready(function() {
  // Event listener for product model input change
  $('#product-model-input').on('change', function() {
    // Get the updated product model value
    var productModel = $(this).val();
    
    // Send request to backend API to get purchase plans
    $.get('/api/suppliers', { productModel: productModel })
      .done(function(response) {
        // Handle successful response
        var purchasePlans = response.purchasePlans;
        
        // Sort purchase plans by expenditure amount
        purchasePlans.sort(function(a, b) {
          return a.expenditure - b.expenditure;
        });
        
        // Display supplier information and purchase plans
        displayPurchasePlans(purchasePlans);
      })
      .fail(function() {
        // Handle failed response
        console.error('Failed to get purchase plans');
        alert('Failed to get purchase plans. Please try again later.');
      });
  });
  
  // Event listener for demand time input change
  $('#demand-time-input').on('change', function() {
    // Get the updated demand time value
    var demandTime = $(this).val();
    
    // Send request to backend API to get purchase plans
    $.get('/api/suppliers', { demandTime: demandTime })
      .done(function(response) {
        // Handle successful response
        var purchasePlans = response.purchasePlans;
        
        // Sort purchase plans by expenditure amount
        purchasePlans.sort(function(a, b) {
          return a.expenditure - b.expenditure;
        });
        
        // Display supplier information and purchase plans
        displayPurchasePlans(purchasePlans);
      })
      .fail(function() {
        // Handle failed response
        console.error('Failed to get purchase plans');
        alert('Failed to get purchase plans. Please try again later.');
      });
  });
  
  // Function to display supplier information and purchase plans
  function displayPurchasePlans(purchasePlans) {
    // Clear existing supplier information and purchase plans
    $('#supplier-info').empty();
    $('#purchase-plans').empty();
    
    // Iterate through each purchase plan
    purchasePlans.forEach(function(purchasePlan) {
      // Create HTML elements for supplier information and purchase plans
      var supplierInfo = $('<div>').text(purchasePlan.supplier);
      var purchasePlanInfo = $('<div>').text(purchasePlan.expenditure);
      
      // Append supplier information and purchase plans to the information display area
      $('#supplier-info').append(supplierInfo);
      $('#purchase-plans').append(purchasePlanInfo);
    });
  }
  
  // Event listener for add supplier button click
  $('#add-supplier-button').on('click', function() {
    // Get the supplier information from user input
    var supplierName = $('#supplier-name-input').val();
    var supplierType = $('#supplier-type-input').val();
    
    // Validate input
    if (supplierName === '' || supplierType === '') {
      alert('Please enter supplier name and type.');
      return;
    }
    
    // Send request to backend API to add supplier
    $.post('/api/suppliers', { name: supplierName, type: supplierType })
      .done(function(response) {
        // Handle successful response
        console.log('Supplier added successfully');
        
        // Update the information display area
        displaySupplierInfo(response.supplier);
      })
      .fail(function() {
        // Handle failed response
        console.error('Failed to add supplier');
        alert('Failed to add supplier. Please try again later.');
      });
  });
  
  // Event listener for update supplier button click
  $('#update-supplier-button').on('click', function() {
    // Get the updated supplier information from user input
    var supplierId = $('#supplier-id-input').val();
    var supplierName = $('#supplier-name-input').val();
    var supplierType = $('#supplier-type-input').val();
    
    // Validate input
    if (supplierId === '' || supplierName === '' || supplierType === '') {
      alert('Please enter supplier ID, name, and type.');
      return;
    }
    
    // Send request to backend API to update supplier
    $.ajax({
      url: '/api/suppliers/' + supplierId,
      type: 'PUT',
      data: { name: supplierName, type: supplierType }
    })
      .done(function(response) {
        // Handle successful response
        console.log('Supplier updated successfully');
        
        // Update the information display area
        displaySupplierInfo(response.supplier);
      })
      .fail(function() {
        // Handle failed response
        console.error('Failed to update supplier');
        alert('Failed to update supplier. Please try again later.');
      });
  });
  
  // Event listener for delete supplier button click
  $('#delete-supplier-button').on('click', function() {
    // Get the supplier ID to be deleted
    var supplierId = $('#supplier-id-input').val();
    
    // Validate input
    if (supplierId === '') {
      alert('Please enter supplier ID.');
      return;
    }
    
    // Send request to backend API to delete supplier
    $.ajax({
      url: '/api/suppliers/' + supplierId,
      type: 'DELETE'
    })
      .done(function() {
        // Handle successful response
        console.log('Supplier deleted successfully');
        
        // Clear the information display area
        $('#supplier-info').empty();
      })
      .fail(function() {
        // Handle failed response
        console.error('Failed to delete supplier');
        alert('Failed to delete supplier. Please try again later.');
      });
  });
});
