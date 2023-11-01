const express = require('express');
const router = express.Router();

// Import the necessary models for database operations
const PurchasePlan = require('../models/purchasePlan');
const Supplier = require('../models/supplier');

// GET /api/suppliers
router.get('/suppliers', async (req, res) => {
  try {
    // Retrieve product model and demand time from request query parameters
    const { productModel, demandTime } = req.query;
  
    // Retrieve and filter purchase plans based on product model and demand time
    const purchasePlans = await PurchasePlan.find({ productModel, demandTime }).sort({ expenditure: 1 });
  
    res.json({ purchasePlans });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/suppliers
router.post('/suppliers', async (req, res) => {
  try {
    // Retrieve supplier information from request body
    const { name, type } = req.body;
  
    // Create a new supplier in the database
    const supplier = await Supplier.create({ name, type });
  
    res.json({ supplier });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/suppliers/:supplierId
router.put('/suppliers/:supplierId', async (req, res) => {
  try {
    // Retrieve supplier ID and updated information from request parameters and body
    const { supplierId } = req.params;
    const { name, type } = req.body;
  
    // Update the supplier in the database
    const supplier = await Supplier.findByIdAndUpdate(supplierId, { name, type }, { new: true });
  
    res.json({ supplier });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/suppliers/:supplierId
router.delete('/suppliers/:supplierId', async (req, res) => {
  try {
    // Retrieve supplier ID from request parameters
    const { supplierId } = req.params;
  
    // Delete the supplier from the database
    await Supplier.findByIdAndDelete(supplierId);
  
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;