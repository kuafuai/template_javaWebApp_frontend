const express = require('express');
const apiRouter = require('./routes/api');

const app = require('express')();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});