// Express.js setup
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Initialize game state and snake position
let gameState = {}; // TODO: Replace with the actual game state
let snakePosition = {}; // TODO: Replace with the actual snake position

// Endpoint to update the player's direction
app.post('/update-direction', (req, res) => {
  // Get the direction from the request body
  const direction = req.body.direction;

  // Validate the direction
  if (!direction) {
    return res.status(400).json({ error: 'Direction is missing' });
  }

  // Update the player's direction based on the received input
  // TODO: Implement the logic to update the player's direction

  // Send the updated game state and snake position in the response
  res.json({ gameState, snakePosition });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
