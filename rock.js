const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultText = document.getElementById("result-text");
const scoreBoard = document.getElementById("scoreboard");

let computerSelection = getComputerSelection();
let playerScore = 0;
let computerScore = 0;

function displayWinImage() {
  const display = document.getElementById("display");
  const img = document.createElement("img");

  img.src = "you win.png";
  img.style.width = "400px";
  img.style.height = "400px";
  img.id = "winImage";
  display.appendChild(img);
}

function displayLoseImage() {
  const display = document.getElementById("display");
  const img = document.createElement("img");

  img.src = "you-lose.webp";
  img.style.width = "400px";
  img.style.height = "400px";
  img.id = "loseImage";
  display.appendChild(img);
}

function gameOver() {
  const winImage = document.getElementById("winImage");
  const loseImage = document.getElementById("loseImage");
  if (winImage) {
    winImage.remove();
  } else if (loseImage) {
    loseImage.remove();
  }

  if (playerScore === 5) {
    displayWinImage();
    resultText.innerHTML = "You have won the game!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    displayLoseImage();
    resultText.innerHTML = "You have lost the game!";
    playerScore = 0;
    computerScore = 0;
  }
  return;
}

function determineWinner(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "tie";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "loss";
  } else {
    return "win";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = determineWinner(playerSelection, computerSelection);
  if (result === "win") {
    resultText.innerHTML = "You win!";
    playerScore++;
  } else if (result === "loss") {
    resultText.innerHTML = "You lose!";
    computerScore++;
  } else {
    resultText.innerHTML = "It was a tie! Try again";
  }
}

function startGame(playerSelection) {
  let computerSelection = getComputerSelection();
  playRound(playerSelection, computerSelection);
  scoreBoard.innerHTML = `Computer score: ${computerScore} Player Score: ${playerScore}`;
  gameOver();
}

function getComputerSelection() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      break;
  }
}
