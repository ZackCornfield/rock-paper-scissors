const choices = ['rock', 'paper', 'scissors']; // Array of choices
let humanScore = 0;
let computerScore = 0;
let currentRound = 0; // Track the current round
const maxRounds = 5;  // Maximum number of rounds

document.getElementById('rock').addEventListener('click', () => playRound('rock'));  // Add event listener to rock button
document.getElementById('paper').addEventListener('click', () => playRound('paper')); // Add event listener to paper button
document.getElementById('scissors').addEventListener('click', () => playRound('scissors')); // Add event listener to scissors button
document.getElementById('reset').addEventListener('click', reset); // Add event listener to reset button

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);  // Random number between 0 and 2
  return choices[randomIndex];  // Return the choice that corresponds to the random number
}

function playRound(humanChoice) {
    if (currentRound >= maxRounds) {
        document.getElementById('winner').textContent = "Game Over! Refresh the page to play again.";
        return;
    }

    const computerChoice = getComputerChoice();  // Get computer choice 
    const result = determineWinner(humanChoice, computerChoice);  // Determine the winner   
    currentRound++; // Increment the round counter

    // Update UI
    document.getElementById('human-choice').textContent = `Your choice: ${humanChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
    document.getElementById('winner').textContent = result;
    document.getElementById('human-score').textContent = `Your Score: ${humanScore}`;
    document.getElementById('computer-score').textContent = `Computer's Score: ${computerScore}`;
    document.getElementById('round-info').textContent = `Round: ${currentRound} / ${maxRounds}`;

    // Check if the game is over
    if (currentRound === maxRounds) {
        declareFinalWinner();
    }
}

function determineWinner(human, computer) {
    const winMessage = "You win this round!";
    const loseMessage = "You lose this round!";
    const drawMessage = "This round is a draw!";
  
    if (human === computer) return drawMessage;
  
    if (
      (human === 'rock' && computer === 'scissors') ||
      (human === 'paper' && computer === 'rock') ||
      (human === 'scissors' && computer === 'paper')
    ) {
      humanScore++;
      return winMessage;
    } else {
      computerScore++;
      return loseMessage;
    }
}

function declareFinalWinner() {
    let finalMessage = '';
    if (humanScore > computerScore) {
        finalMessage = "Congratulations! You are the overall winner!";
    } else if (humanScore < computerScore) {
        finalMessage = "Sorry! The computer wins this time.";
    } else {
        finalMessage = "It's a tie game!";
    }
    document.getElementById('winner').textContent = finalMessage;
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    document.getElementById('human-score').textContent = `Your Score: ${humanScore}`;
    document.getElementById('computer-score').textContent = `Computer's Score: ${computerScore}`;
    document.getElementById('round-info').textContent = `Round: ${currentRound} / ${maxRounds}`;
    document.getElementById('winner').textContent = "";
    document.getElementById('human-choice').textContent = "Your choice: ";
    document.getElementById('computer-choice').textContent = "Computer's choice: ";
}