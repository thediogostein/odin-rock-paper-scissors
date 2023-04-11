function getComputerChoice() {
  let handSignals = ["Rock", "Paper", "Scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return handSignals[randomIndex];
}

console.log(getComputerChoice());
