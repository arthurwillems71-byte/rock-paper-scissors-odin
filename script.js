function getComputerChoise() {
    let random = Math.floor(Math.random() * 3) + 1; 
    let computer;
    switch(random) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
    return computer;
    
}

function getHumanChoise() {
    let choise = prompt("Rock, paper or scissors?");
    choise = choise.toLowerCase();
    switch(choise) {
        case "rock":
        case "paper":
        case "scissors":
            return choise;
            break;
    }
}

function playRound(humanChoise, computerChoise) {
    if ((humanChoise === "paper" && computerChoise === "rock") || (humanChoise === "rock" && computerChoise === "scissors") || (humanChoise === "scissors" && computerChoise === "paper")) {
        console.log(`You won!, ${humanChoise} beats ${computerChoise}!`);
        humanScore += 1;
    }
    else if (humanChoise === computerChoise) {
       console.log("It's a draw") 
    }
    else {
        console.log(`You lose!, ${computerChoise} beats ${humanChoise}!`);
        computerScore += 1;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoise();
const computerSelection = getComputerChoise();

playRound(humanSelection, computerSelection);

