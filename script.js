// GET COMPUTER CHOICE
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return console.error("Computer has generated an invalid value");
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissor?");
}

function play_round() {
  let humanScore = "0";
  let computerScore = "0";

  let humanChoice = getHumanChoice();
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
  console.log(humanChoice);
  console.log(computerChoice);
}

// LOGS
console.log(play_round())
