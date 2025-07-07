// COMPUTER CHOICE
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
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

// HUMAN CHOICE
function getHumanChoice() {
  return prompt("Rock, Paper, or Scissor?");
}

// PLAY A ROUND
function play_round(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);

  // HUMAN WINS
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Winner: Player");
    return "human";

    //CPU WINS
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Winner: Computer");
    return "cpu";
  }

  // DRAW
  else {
    console.log("It's a Draw!");
    return "draw";
  }
}

// MAIN GAME LOOP
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();
    result = play_round(humanChoice, computerChoice);

    if (result === "human") humanScore++;
    else if (result === "cpu") computerScore++;
    roundsPlayed++;
  }

  if (humanScore > computerScore)
    console.log("The Player wins the game! Well Done!");
  else if (computerScore > humanScore) console.log("The Computer wins the game! Better luck next time...");
  else console.log("The game's all tied up!")
}

playGame();
