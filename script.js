'use strict';

//Define the secrete number and the smax score
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(secretNumber);

//The next peace of code check the logic of the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '❓ Yuo need to write a number between 1 and 20 ❓';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correcto Number...👍';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!😘';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Number Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!😘';
      document.querySelector('.score').textContent = 0;
    }
  }
});
