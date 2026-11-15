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


function playRound(humanChoise, computerChoise) {
    if ((humanChoise === "paper" && computerChoise === "rock") || (humanChoise === "rock" && computerChoise === "scissors") || (humanChoise === "scissors" && computerChoise === "paper")) {
        res.innerText = `You won! \n${humanChoise} beats ${computerChoise}!`;
        humanScore += 1;
    }
    else if (humanChoise === computerChoise) {
       res.innerText = "It's a draw \n\n";
    }
    else {
        res.innerText = `You lose! \n${computerChoise} beats ${humanChoise}!`;
        computerScore += 1;
    }
    score.innerText = `Player: ${humanScore} \nComputer: ${computerScore}`;
    if (humanScore === 5) {
        res.innerText = "";
        score.innerText = "Player has 5 points \n Player wins the game";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        res.innerText = "";
        score.innerText = "Computer has 5 points \n Computer wins the game";
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener('click',() => playRound('rock', getComputerChoise()));
const paper = document.querySelector("#paper");
paper.addEventListener('click',() => playRound('paper', getComputerChoise()));
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click',() => playRound('scissors', getComputerChoise()));
const res = document.querySelector("#res");
const score = document.querySelector("#score");