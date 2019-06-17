/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         // Make phrase lowercase
        this.phrase = phrase.toLowerCase();
     }

    // Create & Display phrase on game board//
    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const phraseLi = document.createElement('li');
            const letter = this.phrase[i];
            phraseLi.textContent = letter;
            phraseLi.className = `hide letter ${letter}`;
            if (letter === " ") {
                phraseLi.className = 'space';
            }
            phraseUl.appendChild(phraseLi);
        }
    };

    // Check if letter is in the phrase
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };
    //Search through the list for a matching letter, if found we replace the class from "hide" to "show"
    showMatchedLetter(letter) {
        const letterLis = document.querySelectorAll('li');
        letterLis.forEach(function(li) {
            if (li.textContent === letter) {
                li.classList.remove('hide');
                li.classList.add('show');
            }
        })
    };

 }


