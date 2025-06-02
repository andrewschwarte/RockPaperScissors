function getComputerChoice() {
  let result = Math.random(0, 1);
  if (result <= 0.33) return "rock";
  else if (result <= 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let answer = prompt("Rock, Paper, or Scissors? ");
  return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`Your Choice: ${humanChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Paper!");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You Lose! Paper beats Rock!");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You Lose! Rock beats Paper!");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You Lose! Paper beats Rock!");
    computerScore++;
  } else console.log("DRAW");

  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
