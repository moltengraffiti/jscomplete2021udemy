"use strict";

//TODO User hints, i.e. number  too high or low
//TODO Check score can't go past 0, if score >0 , score--. If score = 0, you lost
//Could  also add styling changes on win and lose - red or green input box for eg

const initialStr = "Start guessing...";
const correctNumStr = "Correct Number!";
const wrongNumStr = "Incorrect - Guess again";
const noNumStr = "No number entered, try again";
const outOfBoundsNum = "Number must be between 1 and 20";
let messageText;
let score = 20;
let highScore = 0;
let guessNum = 0;
let targetNum;

generateNumber();

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess, guess);
  guessNum = Number(guess);
  console.log(typeof guessNum, guessNum);

  if (!guess) {
    messageText = noNumStr;
    messageUpdate(messageText);
  } else if (guessNum > 20 || guessNum < 1) {
    messageText = outOfBoundsNum;
    messageUpdate(messageText);
  } else if (guessNum !== targetNum) {
    messageText = wrongNumStr;
    score--;
    messageUpdate(messageText);
    scoreUpdate(score);
    console.log(score);
  } else if (guessNum === targetNum) {
    messageText = correctNumStr;
    console.log(
      `Number guessed, score is ${score} and the highscore is ${highScore}`
    );
    gameWon(score, highScore, messageText);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  messageUpdate(initialStr);
  score = 20;
  scoreUpdate(20);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").style.display = "block";
  document.querySelector(".again").style.display = "none";
  document.querySelector(".guess").value = null;
  generateNumber();
});

function messageUpdate(messageText) {
  document.querySelector(".message").textContent = messageText;
}

function scoreUpdate(score) {
  document.querySelector(".score").textContent = score;
}

function updateHighScore(highscore) {
  document.querySelector(".highscore").textContent = highscore;
}

function gameWon(score, highScore, messageText) {
  if (score > highScore) {
    highScore = score;
    console.log(`Have set highscore ${highScore} to score value`);
    updateHighScore(highScore);
  }
  messageUpdate(messageText);
  document.querySelector(".number").textContent = targetNum;
  document.querySelector(".check").style.display = "none";
  document.querySelector(".again").style.display = "block";
}

function generateNumber() {
  targetNum = Math.floor(Math.random() * 20) + 1;
  console.log(targetNum);
  return targetNum;
}
