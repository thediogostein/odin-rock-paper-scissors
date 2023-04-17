const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
let scorePlayer = 0;
let scoreComputer = 0;

btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  game();
});

btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  game();
});

btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  game();
});

function getComputerChoice() {
  let handSignals = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return handSignals[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "tie";
    } else if (computerSelection == "paper") {
      return "loss";
    } else {
      return "win";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return "tie";
    } else if (computerSelection == "scissors") {
      return "loss";
    } else {
      return "win";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "scissors") {
      return "tie";
    } else if (computerSelection == "rock") {
      return "loss";
    } else {
      return "win";
    }
  }
}

function game() {
  const computerSelection = getComputerChoice();

  if (playRound(playerSelection, computerSelection) == "win") {
    scorePlayer++;
    score.innerText = `You: ${scorePlayer}\nComputer: ${scoreComputer}`;
    result.innerText = `You Win. ${playerSelection} beats ${computerSelection}`;
  } else if (playRound(playerSelection, computerSelection) == "loss") {
    scoreComputer++;
    score.innerText = `You: ${scorePlayer}\nComputer: ${scoreComputer}`;
    result.innerText = `You Lose. ${computerSelection} beats ${playerSelection}`;
  } else {
    result.innerText = `It's a tie`;
    score.innerText = `You: ${scorePlayer}\nComputer: ${scoreComputer}`;
  }

  if (scorePlayer === 5) {
    winner.innerText = "Player is the winner";
  } else if (scoreComputer === 5) {
    winner.innerText = "Computer is the winner";
  } else if (scorePlayer === 5 && scoreComputer === 5) {
    winner.innerText = "It's a tie";
  }
}
