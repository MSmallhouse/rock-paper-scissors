function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function capitalizeFirstLetter(word) {
    word = word.toLowerCase();
    let firstLetter = word[0].toUpperCase();
    word = word.slice(1);
    return firstLetter + word;
}

function updateScore() {
    const score = document.querySelector('.score');
    if (playerScore === 5) {
        score.textContent = `Player Wins! Refresh to play again`
    }
    if (computerScore === 5) {
        score.textContent = `Computer Wins! Refresh to play again`
    }
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function youWin(computerSelection, playerSelection, result) {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    updateScore();
}

function youLose(computerSelection, playerSelection, result) {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    updateScore();
}

function playSingleRound(playerSelection) {
    const result = document.querySelector('.result');
    const computerSelection = getComputerChoice();
    playerSelection = capitalizeFirstLetter(playerSelection);
    if (playerSelection === computerSelection) {
        result.textContent = 'Roll Again!';
    }
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') youLose(computerSelection, playerSelection, result); 
        if (computerSelection === 'Scissors') youWin(computerSelection, playerSelection, result);
    }
    if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') youLose(computerSelection, playerSelection, result); 
        if (computerSelection === 'Rock') youWin(computerSelection, playerSelection, result);
    }
    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') youLose(computerSelection, playerSelection, result); 
        if (computerSelection === 'Paper') youWin(computerSelection, playerSelection, result);
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
rock.addEventListener('click', () => playSingleRound('Rock'))
paper.addEventListener('click', () => playSingleRound('Paper'))
scissors.addEventListener('click', () => playSingleRound('Scissors'))