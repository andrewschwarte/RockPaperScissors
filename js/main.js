function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let answer = prompt("Rock, Paper, or Scissors?");
  return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`TIE: ${computerChoice} = ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win, ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else {
    console.log(`You Lose, ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
  console.log(`Your score: ${humanScore}\nComputer Score ${computerScore}`);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore === computerScore) console.log("TIE GAME");
  else if (humanScore > computerScore)
    console.log(`You win ${humanScore} to ${computerScore}`);
  else console.log(`You lose ${computerScore} to ${humanScore}`);
}

playGame();
