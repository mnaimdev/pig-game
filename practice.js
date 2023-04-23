// pig game
'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0Score = document.querySelector('#current--0');
const current1Score = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');


let currentScore, playing, scores, activePlayer;

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

function init() {
    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];
}

init();

btnRoll.addEventListener('click', () => {
    
    if (playing) {
        // generate score
        let randomScore = Math.trunc(Math.random() * 6 + 1);

        // show dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${randomScore}.png`;

        if (randomScore !== 1) {
            currentScore += randomScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch player
            switchPlayer();
        }

        }

});


btnHold.addEventListener('click', () => {
    if (playing) {
        // store two value
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] > 20) {
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing = false;
        } else {
            switchPlayer();
        }

    }
});


btnNew.addEventListener('click', init);