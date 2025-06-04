function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    let round = function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let answer;
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                answer = "Try again! You both chose rock";
            }
            else if (computerChoice === "paper") {
                answer = "You lose! Paper beats rock";
                computerScore++;
            }
            else {
                answer = "You win! Rock beats scissors";
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                answer = "You win! Paper beats rock";
                humanScore++;
            }
            else if (computerChoice === "paper") {
                answer = "Try again! You both chose paper";
            }
            else {
                answer = "You lose! Scissors beats paper";
                computerScore++;
            }
        }
        else {
            if (computerChoice === "rock") {
                answer = "You lose! Rock beats scissors";
                computerScore++;
            }
            else if (computerChoice === "paper") {
                answer = "You win! Scissors beats paper";
                humanScore++;
            }
            else {
                answer = "Try again! You both chose scissors";
            }
        }
        console.log(answer);
        console.log("Human score: ", humanScore);
        console.log("Computer score: ", computerScore);
        return answer;
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        round(humanSelection, computerSelection);
    }
}

function getComputerChoice() {
    let x = Math.random();
    let result;
    if (x < 1/3) result = "rock";
    else if (x < 2/3) result = "paper";
    else result = "scissors";
    console.log("Computer choice: ", result);
    return result;
}

function getHumanChoice() {
    let choice = prompt("rock, paper, scissors?");
    console.log(choice);
    return choice;
}