"use strict";
let body = document.body;
let formRandom = document.getElementById("form-random");
let enterBtn = document.getElementById("enter-btn");
let randomSpan = document.getElementById("random-span");
let attemptSpan = document.getElementById("attempt-span");
let resultSpan = document.getElementById("result-span");
let restartBtn = document.getElementById("restart-btn");

let attempts = 3;
formRandom.addEventListener("submit", function (event) {
  event.preventDefault();
  let oneNum = formRandom.start.value;
  let lastNum = formRandom.last.value;
  let guesesNum = formRandom.gueses.value;
  let randomNum = Math.round(
    Math.random() * (lastNum - oneNum) + Number(oneNum)
  );
  randomSpan.textContent = randomNum;
  if (Number(guesesNum) === Number(randomNum)) {
    resultSpan.textContent = "You Win!";
    // let Winsound = new Audio("./sound/winSound.mp3");
    // Winsound.play();
    return;
  }
  attempts--;
  attemptSpan.textContent = attempts;
  if (attempts === 0) {
    resultSpan.textContent = "Game Over !";
    // let gameOver = new Audio("./sound/gameOver.mp3");
    // gameOver.play();
    enterBtn.disabled = true;
  }
});
