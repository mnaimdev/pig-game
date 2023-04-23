// pig game //
'use strict';

// selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');

const current0Score = document.querySelector('#current--0');
const current1Score = document.querySelector('#current--1');


// set initial
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let currentScore = 0;
let activePlayer = 0;
let playingState = true;

const scores = [0, 0];



function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// handle event
btnRoll.addEventListener('click', () => {
   if (playingState) {
     // generate random
     let dice = Math.trunc(Math.random() * 6 + 1);
    
     // show dice
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`;
 
     // if dice 0 : switch player
 
     if (dice !== 1) {
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     } else {
         // switch player
         
         switchPlayer();
 
     }
   }
    
});


btnHold.addEventListener('click', () => {

    if (playingState) {
        scores[activePlayer] += currentScore;

        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] > 20) {
            // winner
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            playingState = false;
        }

        else {
            // switch player
            switchPlayer();
        }
    }

});