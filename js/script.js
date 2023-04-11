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
  let scorePlayer = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Type in (rock, paper, or scissors: ");
    const computerSelection = getComputerChoice();

    if (playRound(playerSelection, computerSelection) == "win") {
      scorePlayer++;
      console.log(`You Win. ${playerSelection} beats ${computerSelection}`);
    } else if (playRound(playerSelection, computerSelection) == "loss") {
      scoreComputer++;
      console.log(`You Lose. ${computerSelection} beats ${playerSelection}`);
    } else {
      console.log(`It's a tie`);
    }

    console.log(
      `Current game: ${playRound(playerSelection, computerSelection)}`
    );
  }

  if (scorePlayer > scoreComputer) {
    console.log("Player is the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer is the winner");
  } else {
    ("It's a tie");
  }
}

game();
