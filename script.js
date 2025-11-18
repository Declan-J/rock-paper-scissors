let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const roundWinnerDiv = document.querySelector("#roundWinner");
const scoreDiv = document.querySelector("#runningScore");
roundsPlayedDiv = document.querySelector("#roundsPlayed");
const finalWinnerMessageDiv = document.querySelector("#finalWinnerMessage");
const humanChoiceDiv = document.querySelector("#humanChoice") 
const cpuChoiceDiv = document.querySelector("#cpuChoice")

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

// PLAY A ROUND

// HUMAN CHOICE
const choices = document.querySelectorAll("button")
let result = "";
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    result = play_round(choice.textContent.toLocaleLowerCase(), getComputerChoice());
  });
});

function play_round(humanChoice, computerChoice) {
  humanChoiceDiv.textContent = `Human played: ${humanChoice}`;
  cpuChoiceDiv.textContent = `CPU played: ${computerChoice}`;

  // HUMAN WINS
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    checkRoundWinner("human")

    //CPU WINS
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    checkRoundWinner("cpu");
  }

  // DRAW
  else {
    checkRoundWinner("draw");
  }
}

// SHOW SCORE
function showScore() {
  roundsPlayedDiv.textContent = `Round: ${roundsPlayed}`
  scoreDiv.textContent = `Human: ${humanScore} - CPU ${computerScore}`
}

function checkRoundWinner(result) {
  switch (result) {
    case "human":
      roundWinnerDiv.textContent = "Winner: Human";
      humanScore++;
      roundsPlayed++;
      showScore();
      break;

    case "cpu":
      roundWinnerDiv.textContent = "Winner: CPU";
      computerScore++
      roundsPlayed++;
      showScore();
      break;

    case "draw":
      roundWinnerDiv.textContent = "It's a Draw!";
      roundsPlayed++;
      showScore();
      break;

    default:
      break;
  }
  if (roundsPlayed == 5)
    checkGameWinner();
}

//CHECK WINNER
function checkGameWinner() {
  if (humanScore > computerScore)
    finalWinnerMessageDiv.textContent = "The Player wins the game! Well Done!";
  else if (computerScore > humanScore)
    finalWinnerMessageDiv.textContent = "The Computer wins the game! Better luck next time...";
  else if (humanScore === computerScore)
    finalWinnerMessageDiv.textContent = "The game's all tied up!";
}