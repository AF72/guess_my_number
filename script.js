'use strict';

function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

//Display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Define the secrete number and the max score
let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

//The next peace of code check the logic of the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#545454';
  if (!guess || guess > 20) {
    displayMessage('❓ Yuo need to write a number between 1 and 20 ❓');

    document.querySelector('body').style.backgroundColor = 'rgb(123, 96, 96)';
  } else if (guess === secretNumber) {
    //when player wins
    displayMessage('Correcto Number...👍');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //Turn the background color to green
    document.querySelector('.number').style.width = '30rem'; //Increase the font size
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    //when guess is to high or to low
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!😘');

      document.querySelector('.score').textContent = 0;
    }
  }
});

//When the player click on the Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#545454';
  document.querySelector('.number').style.width = '15rem';
});
