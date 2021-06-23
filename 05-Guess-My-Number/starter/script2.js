"use strict";

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

document.querySelector(".check").addEventListener("click", playGame);

document.querySelector(".again").addEventListener("click", playAgain);

function generateNumber() {
  targetNum = Math.floor(Math.random() * 20) + 1;
  console.log(targetNum);
  return targetNum;
}

function playGame() {
  console.log(`Highscore in the playGame function is: ` + highScore);
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
}

function updateHighScore(highScore) {
  console.log(`Have set highscore ${highScore} to score value`);
  document.querySelector(".highscore").textContent = highScore;
  console.log(`Highscore in the updateHighScore function is: ` + highScore);
}

function gameWon(score, highScore, messageText) {
  console.log(`Highscore at start of gameWon function is: ` + highScore);
  if (score > highScore) {
    highScore = score;
  }
  updateHighScore(highScore);
  messageUpdate(messageText);
  document.querySelector(".number").textContent = targetNum;
  document.querySelector(".check").style.display = "none";
  document.querySelector(".again").style.display = "block";
}

function playAgain() {
  console.log(`Highscore in the playAgain function is: ` + highScore);
  messageUpdate(initialStr);
  score = 20;
  scoreUpdate(20);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").style.display = "block";
  document.querySelector(".again").style.display = "none";
  document.querySelector(".guess").value = null;
  generateNumber();
}

function messageUpdate(messageText) {
  document.querySelector(".message").textContent = messageText;
}

function scoreUpdate(score) {
  document.querySelector(".score").textContent = score;
}
