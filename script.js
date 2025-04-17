function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    return x === 0 ? "rock" :
        x === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("What is your choice please?", "").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let game = 0; game < 5; game++) {
        console.log("Playing round", game + 1);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Cumulative score is", humanScore, "-", computerScore);
    }
    console.log("Game over")

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice, "vs", computerChoice);

        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("Bravo, you win!");
            humanScore += 1;

        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log("Oh no, you lost :(");
            computerScore += 1;
        
        } else {
            console.log("Drama - draw!");
        }
    }
}

playGame();