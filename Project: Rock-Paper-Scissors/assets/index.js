function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return "rock";
  } else if (x === 1) {
    return "paper";
  } else return "scissors";
}
let playerScore = 0;
let computerScore = 0;

console.log("WELCOME TO RPS GAME!");

function startGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Computer Choice: ${computerSelection}`);
    console.log("DRAW!! GO AGAIN...");
    return;
  } else if (playerSelection === "rock") {
    console.log(`Computer Choice: ${computerSelection}`);
    if (computerSelection === "scissors") {
      playerScore += 1;
      return console.log("Rock beats Scissors: YOU WON!");
    } else {
      computerScore += 1;
      return console.log("Paper beats Rock: YOU LOSE!");
    }
  } else if (playerSelection === "scissors") {
    console.log(`Computer Choice: ${computerSelection}`);
    if (computerSelection === "rock") {
      computerScore += 1;
      return console.log("Rock beats Scissors: YOU LOSE!");
    } else {
      playerScore += 1;
      return console.log("Scissors beats Paper: YOU WON!");
    }
  } else {
    console.log(`Computer Choice: ${computerSelection}`);
    if (computerSelection === "rock") {
      playerScore += 1;
      return console.log("Paper beats Rock: YOU WON!");
    } else {
      computerScore += 1;
      return console.log("Scissors beats Paper: YOU LOSE!");
    }
  }
}

while (true) {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Choose: Rock, Paper or Scissors: ");
  playerSelection.toLowerCase();
  startGame(playerSelection, computerSelection);
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  if (playerScore >= 3 || computerScore >= 3) {
    if (playerScore >= 3) {
      console.log("WINNER WINNER CHICKEN DINNER!!");
      break;
    } else {
      console.log("BETTER LUCK NEXT TIME!");
      break;
    }
  }
}
