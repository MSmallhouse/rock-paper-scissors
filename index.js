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

function playSingleRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = capitalizeFirstLetter(playerSelection);
    if (playerSelection === computerSelection) {
        return 'Roll Again!'
    }
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection === 'Scissors') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection === 'Rock') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection === 'Paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}

function game() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    rock.addEventListener('click', () => playSingleRound('Rock'))
    paper.addEventListener('click', () => playSingleRound('Paper'))
    scissors.addEventListener('click', () => playSingleRound('Scissors'))

    //let result = playSingleRound(playerSelection, getComputerChoice());

    /*while (result.includes('Roll Again')) {
        result = playSingleRound(playerSelection, getComputerChoice());
    }
    console.log(result);

    if (result.includes('Win')) {
        playerScore += 1;
    }*/

}

game();