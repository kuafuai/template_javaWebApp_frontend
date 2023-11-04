$(document).ready(function() {
  // Initialize the game
  var game = new SnakeGame();

  // Listen for player's direction key input
  $(document).keydown(function(event) {
    // Get the key code of the pressed key
    var keyCode = event.which || event.keyCode;

    // Update the player's direction based on the key code
    game.updateDirection(keyCode);
  });
});

// SnakeGame class
function SnakeGame() {
  // Game area element
  this.gameArea = $('#game-area');

  // Game state
  this.gameState = {
    snakePosition: [],
    foodPosition: null
  };

  // Initialize the game
  this.init();
}

// Initialize the game
SnakeGame.prototype.init = function() {
  // Create the game grid
  this.createGrid();

  // Generate the initial snake position
  this.generateSnakePosition();

  // Generate the initial food position
  this.generateFoodPosition();

  // Render the game state
  this.renderGameState();
};

// Create the game grid
SnakeGame.prototype.createGrid = function() {
  // Clear the game area
  this.gameArea.empty();

  // Calculate the number of rows and columns based on the game area size
  var gridSize = 20;
  var numRows = this.gameArea.height() / gridSize;
  var numCols = this.gameArea.width() / gridSize;

  // Create the grid cells
  for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {
      var cell = $('<div class="grid-cell"></div>');
      cell.css({
        width: gridSize + 'px',
        height: gridSize + 'px'
      });
      this.gameArea.append(cell);
    }
  }
};

// Generate the initial snake position
SnakeGame.prototype.generateSnakePosition = function() {
  // Set the initial snake position
  var initialPosition = { row: 10, col: 10 };
  this.gameState.snakePosition.push(initialPosition);
};

// Generate the initial food position
SnakeGame.prototype.generateFoodPosition = function() {
  // Generate a random position for the food within the game area
  var gridSize = 20;
  var numRows = this.gameArea.height() / gridSize;
  var numCols = this.gameArea.width() / gridSize;
  var foodPosition = {
    row: Math.floor(Math.random() * numRows),
    col: Math.floor(Math.random() * numCols)
  };

  // Set the food position
  this.gameState.foodPosition = foodPosition;
};

// Update the player's direction
SnakeGame.prototype.updateDirection = function(keyCode) {
  // Update the direction based on the key code
  // TODO: Implement the logic to update the direction based on the key code
};

// Render the game state
SnakeGame.prototype.renderGameState = function() {
  // Clear the game area
  $('.grid-cell').removeClass('snake food');

  // Render the snake
  var gridSize = 20;
  var numCols = this.gameArea.width() / gridSize;
  for (var i = 0; i < this.gameState.snakePosition.length; i++) {
    var position = this.gameState.snakePosition[i];
    var cell = $('.grid-cell').eq(position.row * numCols + position.col);
    cell.addClass('snake');
  }

  // Render the food
  var foodCell = $('.grid-cell').eq(this.gameState.foodPosition.row * numCols + this.gameState.foodPosition.col);
  foodCell.addClass('food');
};
