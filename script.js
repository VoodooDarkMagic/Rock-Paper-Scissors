let win = "";
let winString = "";
const result = document.querySelector("#output");
let scorePlayer = 0, scoreComputer = 0;



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
    let playerCurrentScore = document.querySelector(".playerScore");
    playerCurrentScore.textContent = scorePlayer;

    let computerCurrentScore = document.querySelector(".computerScore");
    computerCurrentScore.textContent = scoreComputer;

    const removeDiv = document.querySelector(".playerChoice");

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
            const buttons = document.querySelector(".choices")
            removeDiv.remove();
            result.textContent = "PC Won";
            reloadGame();
            return;
        } else if (scorePlayer === 5){
            console.log("You Won");
            const buttons = document.querySelector(".choices")
            removeDiv.remove();
            result.textContent = "You Won";
            reloadGame();
            return;
        }
    });
});
}
game();


function reloadGame() {
   
    const container = document.querySelector('.choices')
    const addDiv = document.createElement('div')
    addDiv.classList.add('playerChoice');
    container.appendChild(addDiv);

    const subContainer = document.querySelector('.playerChoice');
    const reload = document.querySelector(".reload");
    reload.addEventListener('click', () => {
        const rockButton = document.createElement('button');
        rockButton.textContent = "Rock";
        rockButton.setAttribute("id","rock");
        subContainer.appendChild(rockButton);

        const paperButton = document.createElement('button');
        paperButton.textContent = "Paper";
        subContainer.appendChild(paperButton);

        const scissorsButton = document.createElement('button');
        scissorsButton.textContent = "Scissor";
        subContainer.appendChild(scissorsButton);

        result.textContent = "";
        
        scoreComputer = 0;
        let computerCurrentScore = document.querySelector(".computerScore");
        computerCurrentScore.textContent = scoreComputer;
        

        scorePlayer = 0;
        let playerCurrentScore = document.querySelector(".playerScore");
        playerCurrentScore.textContent = scorePlayer;
        game();
    })
}
 
