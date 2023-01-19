let win = "";
let winString = "";
const result = document.querySelector("#output");
let scorePlayer = 0, scoreComputer = 0;
let playerCurrentScore = document.querySelector(".playerScore");
let computerCurrentScore = document.querySelector(".computerScore");

function getPlayerChoice() {
    const btn = document.querySelectorAll('.playerChoice>button');
    btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(`player choice is ${button.innerHTML.toLowerCase()}`);
        return button.innerHTML.toLowerCase();
    });
});
}
getPlayerChoice();

//get's the choice from PC
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


//computes one round of RPS
function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            win = "player";
            winString = `You Win! ${playerSelection} beats ${computerSelection}`;
            return (winString);
        } else if (computerSelection === "paper") {
            win = "cpu"
            winString = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return (winString);
        } else {
            win = "tie"
            winString = `It's a Tie! Both chose ${playerSelection}`
            return (winString);
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            win = "player";
            winString = `You Win! ${playerSelection} beats ${computerSelection}`;
            return (winString);
        } else if (computerSelection === "scissors") {
            win = "cpu"
            winString = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return (winString);
        } else {
            win = "tie"
            winString = `It's a Tie! Both chose ${playerSelection}`
            return (winString);
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            win = "player";
            winString = `You Win! ${playerSelection} beats ${computerSelection}`;
            return (winString);
        } else if (computerSelection === "rock") {
            win = "cpu"
            winString = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return (winString);
        } else {
            win = "tie"
            winString = `It's a Tie! Both chose ${playerSelection}`
            return (winString);
        }
    }
}

function game(){
    playerCurrentScore.textContent = scorePlayer;
    computerCurrentScore.textContent = scoreComputer;

    const btn = document.querySelectorAll('.playerChoice>button');
    btn.forEach((button) => {
        button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.innerHTML.toLowerCase();
        console.log(`Player choice is ${playerSelection}`);
        
        let winString = playRound(playerSelection, computerSelection);

        if (win === "player") {
            ++scorePlayer;
            console.log(winString);
            playerCurrentScore.textContent = scorePlayer;
        } else if (win === "cpu") {
            ++scoreComputer;
            console.log(winString);
            computerCurrentScore.textContent = scoreComputer;
        } else if (win === "tie"){
            console.log(winString);
        }
        
        if(scoreComputer === 5){
            //removeDiv.remove();
            result.textContent = "PC Won";
            reloadGame();
            
        } else if (scorePlayer === 5){
            console.log("You Won");
            //removeDiv.remove();
            result.textContent = "You Won";
            reloadGame();
        }
    });
});
}
game();


function reloadGame() {
    const reload = document.querySelector(".reload");
    reload.addEventListener('click', () => {
        result.textContent = "";
        scoreComputer = 0;
        computerCurrentScore.textContent = scoreComputer;

        scorePlayer = 0;
        playerCurrentScore.textContent = scorePlayer;
    })
}