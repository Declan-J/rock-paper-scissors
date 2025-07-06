// GET COMPUTER CHOICE
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
    default: return console.error("Computer has generated an invalid value");
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissor?");

}

console.log(getComputerChoice());
console.log(getHumanChoice());
