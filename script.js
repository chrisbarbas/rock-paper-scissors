//global variables for the score of game
let playerScore = 0
let computerScore = 0
//variables for text that appears in the DOM
const winner = document.querySelector('#winner');
const selected = document.querySelector('#selected');
const score = document.querySelector('#score');
const gameWinner = document.querySelector('#gameWinner');
//variables for the 3 buttons
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

//rolls for the computer
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return 'rock';
    } else if (random === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// compares computer's roll with player's answer, increases score
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winner.textContent = 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        winner.textContent = 'You win!';
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        winner.textContent = 'Computer wins';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winner.textContent = 'You win!';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        winner.textContent = 'Computer wins';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winner.textContent = 'You win!';
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        winner.textContent = 'Computer wins';
        computerScore++;
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

//used inside of gameOver()
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameWinner.textContent = '';
}

function determineWinner() {
    if (playerScore === 5) {
        gameWinner.textContent = 'You have won the game!';
    } else if (computerScore === 5) {
        gameWinner.textContent = 'Computer has won the game';
    }
}

//sends click to game()
rock.addEventListener('click', () => game('rock'))
paper.addEventListener('click', () => game('paper'))
scissors.addEventListener('click', () => game('scissors'))

//combines everything together
function game(playerSelection) {
    if (gameOver()) {
        resetGame();
    }
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    selected.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    determineWinner();
}