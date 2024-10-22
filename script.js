'use strict';

//Define the secrete number and the max score
let secretNumber = Math.trunc(Math.random() * 20 + 1);
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
    document.querySelector('body').style.backgroundColor = 'rgb(123, 96, 96)';
  } else if (guess === secretNumber) {
    //when player wins
    document.querySelector('.message').textContent = 'Correcto Number...👍';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //Turn the background color to green
    document.querySelector('.number').style.width = '30rem'; //Increase the font size
  } else if (guess !== secretNumber) {
    //when guess is to high or to low
    const number = guess > secretNumber ? true : false;
    testGuess(number);
  }
  if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game!😘';
    document.querySelector('.score').textContent = 0;
  }
});

//When the player click on the Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#545454';
  document.querySelector('.number').style.width = '15rem';
});
