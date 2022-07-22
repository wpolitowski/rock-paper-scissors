function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let winner, description;

    //displaying selected weapon

    const playerDisplay = document.querySelector(".playerSelection");
    const computerDisplay = document.querySelector(".computerSelection");

    playerDisplay.classList.value = 'playerSelection'; //clears previously added classes (selections)
    computerDisplay.classList.value = 'computerSelection'; //same but for computer
    playerDisplay.classList.add(`${playerSelection}`); //adds current selection
    computerDisplay.classList.add(`${computerSelection}`, "flipped"); //adds class with selected image
    //of the weapon and class for flipping it vertically 


    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            winner = 'computer';
        } else if (computerSelection == 'scissors') {
            winner = 'player';
        } else { // rock vs rock
            winner = 'none';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            winner = 'computer';        
        } else if (computerSelection == 'rock') {
            winner = 'player';
        } else { // paper vs paper
            winner = 'none';
        }
    } else { // scissors
        if (computerSelection == 'rock') {
            winner = 'computer';
        } else if (computerSelection == 'paper') {
            winner = 'player';
        } else { // scissors vs scissors
            winner = 'none';
        }
    }

    //displaying comparison sign image
    const comparisonSign = document.querySelector('.resultSign');
    comparisonSign.classList.value = 'resultSign'; // clear previously attached images
    if (winner == 'player') {
        comparisonSign.classList.add('greater');
    } else if (winner == 'computer') {
        comparisonSign.classList.add('less');
    } else {
        comparisonSign.classList.add('equals');
    }
    
    return winner;
}

// function game() {
//     let playerScore = 0, computerScore = 0;
//     for (let i = 0; i < 1; i++) {
//         const playerSelection = playerPlay();
//         const computerSelection = computerPlay();
//         let winner = playRound(playerSelection, computerSelection);
//         if (winner == 'player') playerScore++;
//         else if (winner == 'computer') computerScore++;
//         else if (winner == 'aborted') {
//             return;
//         }
        
//         console.log(`Current score: Player -> %c${playerScore} - ${computerScore} %c<- Computer 
//         `, "font-weight: bold; color: red;", "");
//     }

//     if (playerScore > computerScore) console.log("You win! Congrats! 🥳");
//     else if (playerScore < computerScore) console.log("Unfortunately, computers wins 😓");
//     else console.log ("It's draw. Could have been worse 🤷")
// }

function playerPlay() {
    let playerMove = this.classList[1]; 
    let roundWinner = playRound(playerMove, computerPlay());
    if (roundWinner === 'player') playerScore++;
    else if (roundWinner === 'computer') computerScore++;
    displayScore();
}

function displayScore() {
    descriptionDiv.textContent = '';
    resultDiv.textContent = `Your score: ${playerScore}     Computer score: ${computerScore}`;
    if (playerScore === 3) {
        descriptionDiv.textContent = 'You won the game! Congratulations!';
        playerScore = computerScore = 0;
    } else if (computerScore === 3) {
        descriptionDiv.textContent = 'You lost! Better luck next time!';
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
document.body.prepend(h1); // goes on top

const containerSel = document.querySelector('.containerSelection');
const containerBtns = document.querySelector('.containerButtons');
const descriptionDiv = document.createElement('div');
descriptionDiv.classList.add("result");
document.body.insertBefore(descriptionDiv, containerSel); // this method inserts
//a node before a child (container) of the node (body)

const playerButtons = document.querySelector(".containerButtons > .playerButtons");
const computerButtons = document.querySelector(".containerButtons > .computerButtons");


const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const btnRockComp = document.createElement('button');
const btnPaperComp = document.createElement('button');
const btnScissorsComp = document.createElement('button');

btnRock.classList.add("button", "rock");
btnPaper.classList.add("button", "paper");
btnScissors.classList.add("button", "scissors");
btnRockComp.classList.add("buttonComp", "rock", "flipped");
btnPaperComp.classList.add("buttonComp", "paper", "flipped");
btnScissorsComp.classList.add("buttonComp", "scissors", "flipped");
// buttons need to be appended first in order for querySelectorAll to work
playerButtons.appendChild(btnRock);
playerButtons.appendChild(btnPaper);
playerButtons.appendChild(btnScissors);
computerButtons.appendChild(btnScissorsComp);
computerButtons.appendChild(btnPaperComp)
computerButtons.appendChild(btnRockComp);

const resultDiv = document.createElement('div');
resultDiv.classList.add("result");
document.body.appendChild(resultDiv);



//ROUND/GAME START 
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", playerPlay));

