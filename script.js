function getComputerChoice () {
    let randomStringIndex = Math.floor(Math.random() * 3);
    if (randomStringIndex === 0) {
        console.log("PC choice - Rock");
        return "rock";
    } else if (randomStringIndex === 1){
        console.log("PC Choice  - Paper")
        return "paper";
    } else {
        console.log("PC Choice - Scissors");
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            return ("You Win! Rock beats Scissors");
        } else if (computerSelection === "Paper") {
            return ("You Lose! Paper beats Rock");
        } else {
            return (`It's a Tie! Both chose ${playerSelection}`);
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return ("You Win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
            return ("You Lose! Scissors beats Paper");
        } else {
            return (`It's a Tie! Both chose ${playerSelection}`);
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return ("You Win! Scissors beats Paper");
        } else if (computerSelection === "Rock") {
            return ("You Lose! Rock beats Scissors");
        } else {
            return (`It's a Tie! Both chose ${playerSelection}`);
        }
    }
}

/*console.log(playRound(playerSelection, computerSelection));*/

function game (){
    let scorePlayer = 0, scoreComputer = 0;
    for (i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Your Choice?").toLowerCase();
        console.log(`Player Selection - ${playerSelection}`);
        let winString = playRound(playerSelection, computerSelection);
        if (winString.charAt(4) === 'W') {
            ++scorePlayer;
        } else if (winString.charAt(4) === 'L') {
            ++scoreComputer;
        }
        console.log(`Player - ${scorePlayer}`);
        console.log(`Computer - ${scoreComputer}`);
    }
}
game();