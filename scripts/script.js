function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let winner, description;

    if (playerSelection == null) {
        winner = 'aborted';
        description = 'Game aborted, you lose!';
    } else {
        
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                winner = 'computer';
                description = 'Paper beats rock! Point for the computer 😔';
            } else if (computerSelection == 'scissors') {
                winner = 'player';
                description = 'Rock beats scissors! Point for you! 😎';
            } else { // rock vs rock
                winner = 'none';
                description = 'Rock equals rock';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                winner = 'computer';
                description = 'Scissors beat paper! Point for the computer 😔'
            
            } else if (computerSelection == 'rock') {
                winner = 'player';
                description = 'Paper beats rock! Point for you! 😎';
            } else { // paper vs paper
                winner = 'none';
                description = 'Paper equals paper';
            }
        } else { // scissors
            if (computerSelection == 'rock') {
                winner = 'computer';
                description = 'Rock beats scissors! Point for the computer 😔';
            } else if (computerSelection == 'paper') {
                winner = 'player';
                description = 'Scissors beat paper! Point for you! 😎';
            } else { // scissors vs scissors
                winner = 'none';
                description = 'Scissors equal scissors';
            }
        }
    }

    descriptionDiv.textContent = description;
    return winner;
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 1; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        if (winner == 'player') playerScore++;
        else if (winner == 'computer') computerScore++;
        else if (winner == 'aborted') {
            return;
        }
        
        console.log(`Current score: Player -> %c${playerScore} - ${computerScore} %c<- Computer 
        `, "font-weight: bold; color: red;", "");
    }

    if (playerScore > computerScore) console.log("You win! Congrats! 🥳");
    else if (playerScore < computerScore) console.log("Unfortunately, computers wins 😓");
    else console.log ("It's draw. Could have been worse 🤷")
}

function playerPlay() {
    let playerMove = this.classList[1]; 
    let roundWinner = playRound(playerMove, computerPlay());
    if (roundWinner === 'player') playerScore++;
    else if (roundWinner === 'computer') computerScore++;
    displayScore();
}

function displayScore() {
    resultDiv.textContent = `Your score: ${playerScore}     Computer score: ${computerScore}`;
    if (playerScore === 3) {
        resultDiv.textContent = 'You won the game! Congratulations!';
        playerScore = computerScore = 0;
    } else if (computerScore === 3) {
        resultDiv.textContent = 'You lost! Better luck next time!';
        playerScore = computerScore = 0;
    }

}
// let playAgain = 'y';

// while (playAgain == 'y') {
//     game();
//     playAgain = prompt('Do you want to play again? [y/n]');
// }

let playerScore = 0,
    computerScore = 0;

    
//DOM Manipulation//  

const h1 = document.createElement('h1');
h1.classList.add('heading');
h1.textContent = 'Rock Paper Scissors';
document.body.appendChild(h1);

const descriptionDiv = document.createElement('div');
descriptionDiv.classList.add("result");
document.body.appendChild(descriptionDiv);


const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.classList.add("button", "rock");
btnPaper.classList.add("button", "paper");
btnScissors.classList.add("button", "scissors");
// buttons need to be appended first in order for querySelectorAll to work
document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);


const resultDiv = document.createElement('div');
resultDiv.classList.add("result");
document.body.appendChild(resultDiv);



//ROUND/GAME START 
const buttons = document.querySelectorAll(".button")
buttons.forEach(button => button.addEventListener("click", playerPlay));

