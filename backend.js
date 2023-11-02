// Import necessary modules and initialize express app
const express = require('express');
const app = express();

// Define endpoint for GET request to /purchase-plans
app.get('/purchase-plans', async (req, res) => {
  try {
    // Get product model and demand time from request query parameters
    const productModel = req.query.productModel;
    const demandTime = req.query.demandTime;
    
    // Check if product model and demand time are provided
    if (!productModel || !demandTime) {
      return res.status(400).json({ error: 'Product model and demand time are required' });
    }
    
    // Retrieve purchase plans from the database based on product model and demand time
    const purchasePlans = await db.getPurchasePlans(productModel, demandTime);
    
    // Sort purchase plans based on expenditure
    const sortedPurchasePlans = purchasePlans.sort((a, b) => {
      return a.expenditure - b.expenditure;
    });
    
    // Send sorted purchase plans as response
    res.json({ purchasePlans: sortedPurchasePlans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
