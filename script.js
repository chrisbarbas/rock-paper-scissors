//rolls for computer
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

//compares computer's roll with player's answer, increases score
function playRound(playerSelection, computerSelection) {
    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);
    if (playerSelection == computerSelection) {
        console.log("It's a tie")
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors')
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock')
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock')
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper')
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats Paper')
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors')
        computerScore++;
    }
}

//runs playRound until first to 5 + prompts user
function game() {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt('Type rock paper or scissors', 'rock').toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Player's score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
        //first to 5 wins
        if (playerScore === 5) {
            console.log('PLAYER WON!!!')
        } else if (computerScore === 5) {
            console.log('COMPUTER WON!!!')
        }
    }
}

let playerScore = 0;
let computerScore = 0;
game();