"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

const check = document.querySelector(".check");
const again = document.querySelector(".again");
const highscoreContent = document.querySelector(".highscore");

let score = 20;
let highScore = Number(localStorage.getItem("highscore")) || 0;
highscoreContent.textContent = highScore;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("❌ No Number");
  } else if (guess !== secretNumber) {
    displayMessage(`${guess > secretNumber ? "📈 Too high" : "📉 Too low"}`);
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      score = 0;
      document.querySelector(".score").textContent = score;
      displayMessage("You lost the game");
      check.disabled = true;
      document.querySelector(".guess").disabled = true;
    }
  } else {
    displayMessage("🏆 Correct Number");
    document.body.style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highscore", highScore);
      highscoreContent.textContent = highScore;
    }
  }
});

again.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  check.disabled = false;
  document.querySelector(".guess").disabled = false;
});
