// Function to retrieve purchase plans from the database
function getPurchasePlans() {
  try {
    // Database query to retrieve purchase plans
    const query = 'SELECT * FROM purchase_plans';
  
    // Execute query and return purchase plans
    const purchasePlans = db.execute(query);
    return purchasePlans;
  } catch (error) {
    // Handle any potential errors that may occur during the execution of the query
    console.error('Error retrieving purchase plans:', error);
    throw error;
  }
}

// Export the getPurchasePlans function
module.exports = {
  getPurchasePlans
};
