const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const logger = require('morgan');

// Middleware
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
