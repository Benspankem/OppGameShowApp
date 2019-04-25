/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Faith"),
            new Phrase("Hard Work"), 
            new Phrase("Determination"),
            new Phrase("Marathon"),
            new Phrase("Persistent")
        ]
        this.activePhrase = null;
    }

 // Selects random phrase from phrases property
getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
};
// Hide the start menu and display the random phrase onto the screen
startGame() {
    document.getElementById('overlay').style.visibility = 'hidden';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
};
// Check to see if all the letters are matched, if so, the game is won
checkForWin() {
    const hides = document.querySelectorAll('.hide');
    if (hides.length === 0) {
        return true;
    } else {
        return false
    }
};
// Each miss will remove a heart, when theres a total of 5 miss, the game is over
removeLife() {
this.missed += 1;
const hearts = document.querySelectorAll('img');
for (let i = 0; i < this.missed; i++) {
    hearts[i].src = "images/lostHeart.png";
}
if (this.missed === 5) {
    this.gameOver(false);
    }
};

// Bring the start menu back and display a text message if the game is won or lost, then the game will reset
gameOver(gameWon) {
    const gameOverMessage = document.getElementById('game-over-message');
    const overLay = document.getElementById('overlay');
    if (gameWon === true) {da
      gameOverMessage.innerHTML = "Great job, you win!";
      overLay.className = "win";
      overLay.style.visibility = 'visible';
    } else {
      gameOverMessage.innerHTML = "Sorry, you lost!";
      overLay.className = "lose";
      overLay.style.visibility = 'visible';
    }
    this.resetGame();
  };
/**  Allow each button to be pressed once before being disabled, then it will see if the button matches any of the letter in the phrase,
    it will add the class "wrong" or "chosen" depending if it found a match or not, if its wrong then it will remove a life, 
    if theres a match it will check to see if you had won the game yet **/
  handleInteraction(button) {
    button.disabled = true;
    if (!this.activePhrase.phrase.includes(button.textContent)) {
      button.className = "wrong";
      this.removeLife();
    } else {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    }
  };
  // This will reset the game back to the start of the game
  resetGame() {
    this.missed = 0;
    document.querySelector('ul').innerHTML = " ";
    const keys = document.querySelectorAll('button');
    keys.forEach(key => {
      key.disabled = false;
      key.className = "key";
    });
    const heartImages = document.querySelectorAll('img');
    heartImages.forEach(image => {
      image.src = "images/liveHeart.png";
    });
  };

}
