const express = require('express');
const router = express.Router();

// Dummy data for testing
let purchasePlans = [
  { supplier: 'Supplier A', expenditure: 100 },
  { supplier: 'Supplier B', expenditure: 200 },
  { supplier: 'Supplier C', expenditure: 150 }
];

// GET /api/suppliers
router.get('/suppliers', (req, res) => {
  // Retrieve product model and demand time from request query parameters
  const { productModel, demandTime } = req.query;
  
  // Filter purchase plans based on product model and demand time
  let filteredPlans = purchasePlans;
  if (productModel) {
    filteredPlans = filteredPlans.filter(plan => plan.productModel === productModel);
  }
  if (demandTime) {
    filteredPlans = filteredPlans.filter(plan => plan.demandTime === demandTime);
  }
  
  // Sort purchase plans by expenditure amount
  filteredPlans.sort((a, b) => a.expenditure - b.expenditure);
  
  res.json({ purchasePlans: filteredPlans });
});

// POST /api/suppliers
router.post('/suppliers', (req, res) => {
  // Retrieve supplier information from request body
  const { name, type } = req.body;
  
  // Add supplier to the database
  const supplier = { name, type };
  // TODO: Implement logic to add supplier to the database
  
  res.json({ supplier });
});

// PUT /api/suppliers/:supplierId
router.put('/suppliers/:supplierId', (req, res) => {
  // Retrieve supplier ID and updated information from request parameters and body
  const { supplierId } = req.params;
  const { name, type } = req.body;
  
  // Update supplier in the database
  const supplier = { id: supplierId, name, type };
  // TODO: Implement logic to update supplier in the database
  
  res.json({ supplier });
});

// DELETE /api/suppliers/:supplierId
router.delete('/suppliers/:supplierId', (req, res) => {
  // Retrieve supplier ID from request parameters
  const { supplierId } = req.params;
  
  // Delete supplier from the database
  // TODO: Implement logic to delete supplier from the database
  
  res.sendStatus(200);
});

module.exports = router;