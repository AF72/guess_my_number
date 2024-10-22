'use strict';

//Define the secrete number and the smax score
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(secretNumber);

//Function for guess > secretNumber or guess < secretNumber
function testGuess(params) {
  const stateOfGuess = params ? 'Too High!' : 'Too Low';
  document.querySelector('.message').textContent = `Number ${stateOfGuess}`;
  score--;
  document.querySelector('.score').textContent = score;
}

//The next peace of code check the logic of the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '❓ Yuo need to write a number between 1 and 20 ❓';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correcto Number...👍';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    const number = guess > secretNumber ? true : false;
    testGuess(number);
  }
  if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game!😘';
    document.querySelector('.score').textContent = 0;
  }
});
