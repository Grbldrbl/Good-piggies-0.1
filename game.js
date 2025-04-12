// Initialize Matter.js
const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

// Select the canvas and create a 2D rendering context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state variables
let gameRunning = false;
let gameObjects = []; // Array to hold game objects like parts, vehicles, etc.

// Function to initialize the game
function initializeGame() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Initialize game objects (e.g., parts, vehicles)
  gameObjects = [
    { x: 100, y: 100, width: 50, height: 50, color: 'green' }, // Example object
    { x: 200, y: 100, width: 50, height: 50, color: 'blue' }   // Another example object
  ];

  // Draw the initial objects
  drawGameObjects();
}

// Function to start the game
function startGame() {
  if (!gameRunning) {
    gameRunning = true;
    console.log('Game started');
    gameLoop();
  }
}

// Function to reset the game
function resetGame() {
  console.log('Game reset');
  gameRunning = false; // Stop the game loop
  initializeGame(); // Reinitialize the game
}

// Function to draw all game objects
function drawGameObjects() {
  gameObjects.forEach(obj => {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  });
}

// Game loop function
function gameLoop() {
  if (!gameRunning) return; // Stop the loop if game is not running

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update game objects (e.g., move them, check collisions, etc.)
  updateGameObjects();

  // Redraw game objects
  drawGameObjects();

  // Call the game loop again
  requestAnimationFrame(gameLoop);
}

// Function to update game objects
function updateGameObjects() {
  // Example: Move objects downwards (gravity simulation)
  gameObjects.forEach(obj => {
    obj.y += 1; // Move down by 1 pixel
    if (obj.y > canvas.height) obj.y = 0; // Wrap around to the top
  });
}

// Add event listeners for the buttons
document.getElementById('playButton').addEventListener('click', startGame);
document.getElementById('resetButton').addEventListener('click', resetGame);

// Initialize the game when the page loads
initializeGame();
