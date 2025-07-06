// GET COMPUTER CHOICE
function getComputerChoice() {

  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "Rock"
      break;
    case 1: return "Paper"
      break;
    case 2: return "Scissors"
      break;
    default: return console.error("Computer has generated an invalid value");
      break;
  }
}

console.log(getComputerChoice());