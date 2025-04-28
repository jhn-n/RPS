actions = ["rock", "paper", "scissors"];

const Buttons = document.querySelector(".buttonContainer");
Buttons.addEventListener("click", (e) => playRound(actions.indexOf(e.target.id), getComputerChoice()));

const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener("click", newGame);

const choicesResult = document.querySelector("#choices");
const roundResult = document.querySelector("#round");
const scoreResults = document.querySelector("#score");
const gameResults = document.querySelector("#game");

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    choicesResult.textContent = `${actions[humanChoice]} vs ${actions[computerChoice]}`;
    const result = (humanChoice - computerChoice) % 3;
    if (result === 1 || result == -2) {
        roundResult.textContent = "Bravo, you win!";
        humanScore += 1;

    } else if (result === 2 || result == -1) {
        roundResult.textContent = "Oh no, you lost :(";
        computerScore += 1;

    } else {
        roundResult.textContent = "High Drama - it's a draw!";
    }

    scoreResults.textContent = `Score is ${humanScore} - ${computerScore}`;

    if (humanScore === 5 && computerScore < 5) {
        gameResults.textContent = "Human hero triumphs!";
    }
    if (computerScore === 5 && humanScore < 5) {
        gameResults.textContent = "Computer overlord triumphs!";
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    scoreResults.textContent = "";
    choicesResult.textContent = "";
    roundResult.textContent = "";
    gameResults.textContent = "";
}







