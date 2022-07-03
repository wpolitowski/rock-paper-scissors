function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay() {
    let move = prompt('Choose your weapon - rock, paper or scissors');
    
    if (move == null) {
        return null;
    }

    while (move != 'rock' && move != 'paper' && move != 'scissors') {
        alert('Wrong weapon! Try again');
        move = prompt('Choose your weapon - rock, paper or scissors');
        if (move != null) move = move.toLowerCase();
        else return null;
    }
    return move;
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

    console.log(description);
    return winner;
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
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

let playAgain = 'y';

while (playAgain == 'y') {
    game();
    playAgain = prompt('Do you want to play again? [y/n]');
}

console.log("Thank you for playing rock, paper and scissors!")

