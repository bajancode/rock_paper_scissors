let computerScore = 0;
let userScore = 0;

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound(0)
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound(1)
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound(2)
});

let gameOutput = document.querySelector("#roundResults");
let userScoreOutput = document.querySelector("#userScore");
let computerScoreOutput = document.querySelector("#computerScore");

function getRandomInt(max) {
  const randomNumber = Math.floor(Math.random() * Math.floor(max));
  return randomNumber;
}

function computerPlay() {
  const random = getRandomInt(3);
  return random;
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();



if (playerSelection === computerSelection) {
  gameOutput.textContent = "Tie! You both rock!";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textcontent = "Computer Score: " + computerScore;
}
else if (playerSelection === 0 && computerSelection === 2) {
  userScore++;
gameOutput.textContent = "Rock beats Scissors! You win this round!";
userScoreOutput.textContent = "Your Score: " + userScore;
computerScoreOuput.textContent = "Computer Score: " + computerScore; 

 } 
 else if (playerSelection == 1 && computerSelection == 0) {
  userScore++;
  gameOutput.textContent = "Paper beats Rock! You win this round!";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textContent = "Computer Score: " + computerScore;

} else if (playerSelection == 2 && computerSelection == 1) {
  userScore++;
  gameOutput.textContent = "Scissors beats Paper! You win this round!";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textContent = "Computer Score: " + computerScore;

} else if (computerSelection == 0 && playerSelection == 2) {
  computerScore++;
  gameOutput.textContent = "Rock beats Scissors! You lost this round.";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textContent = "Computer Score: " + computerScore;

} else if (computerSelection == 1 && playerSelection == 0) {
  computerScore++;
  gameOutput.textContent = "Paper beats Rock! You lost this round.";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textContent = "Computer Score: " + computerScore;

} else if (computerSelection == 2 && playerSelection == 1) {
  computerScore++;
  gameOutput.textContent = "Scissors beats Paper! You lost this round.";
  userScoreOutput.textContent = "Your Score: " + userScore;
  computerScoreOutput.textContent = "Computer Score: " + computerScore;
} 

checkWinner(userScore, computerScore);


}

 function checkWinner(userScore, computerScore) {
	if (userScore === 5) {
		alert("Congratulations! You won!");
		
	} else if (computerScore === 5) {
		alert("Game over! You lost to the computer");
			}
}


