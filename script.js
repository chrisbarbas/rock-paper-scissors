const getComputerChoice = function () {
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random)
    return random === 1 ? 'rock' : random === 2 ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose, paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win, paper beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, scissors beat paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose, rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win, scissors beat paper';
    } else {
        return 'draw';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();






console.log(playRound(playerSelection, computerSelection));

console.log(getComputerChoice());