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

const results = document.querySelector(".results");
let runningScoreBox = document.querySelector(".runningScore");
let score = document.querySelector(".score");

function playRound(humanChoice, computerChoice) {
  let text = document.createElement("p");

  if (humanChoice === computerChoice) {
    results.appendChild(text);
    text.textContent = `Computer chose ${computerChoice}. TIE: ${computerChoice} = ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    results.appendChild(text);
    humanScore++;
    text.textContent = `Computer chose ${computerChoice}. You Win, ${humanChoice} beats ${computerChoice}!`;
  } else {
    results.appendChild(text);
    computerScore++;
    text.textContent = `Computer chose ${computerChoice}. You Lose, ${computerChoice} beats ${humanChoice}!`;
  }
  runningScoreBox.appendChild(score);
  score.textContent = `Your score: ${humanScore}\nComputer Score: ${computerScore}`;

  if (humanScore === 5) {
    alert(
      `You Win! You scored ${humanScore} and Computer scored ${computerScore}.`
    );
  } else if (computerScore === 5)
    alert(
      `You Lost! You scored ${humanScore} and Computer scored ${computerScore}.`
    );
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore === computerScore) console.log("TIE GAME");
//   else if (humanScore > computerScore)
//     console.log(`You win ${humanScore} to ${computerScore}`);
//   else console.log(`You lose ${computerScore} to ${humanScore}`);
// }

// playGame();
