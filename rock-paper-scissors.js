
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random();
    console.log("Random value x:", x);
    if (x < 1/3) return "rock";
    else if (x < 2/3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("rock, paper, scissors?");
    console.log(choice);
    return choice;
}