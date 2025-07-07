// GET COMPUTER CHOICE
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return console.error("Computer has generated an invalid value");
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissor?");
}

function play_round() {
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice = getHumanChoice();
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
  console.log(humanChoice);
  console.log(computerChoice);

  // HUMAN WINS
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Winner: Player");
    humanScore++;

    //CPU WINS
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Winner: Computer");
    computerScore++;
  }

  // DRAW
  else console.log("It's a Draw!");
}

// LOGS
console.log(play_round());
