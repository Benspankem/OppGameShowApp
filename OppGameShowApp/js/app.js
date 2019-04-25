/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const startButton = document.getElementById('btn__reset')
const keys = document.querySelectorAll('.key');

// Add a click event handler to the start button to begin the game
startButton.addEventListener('click', function() {
  game.startGame()});
// Add a click event handler to each key in the game to see if theres a match or not 
keys.forEach(key => {
  key.addEventListener('click', function() {
    game.handleInteraction(key);
  });
});
