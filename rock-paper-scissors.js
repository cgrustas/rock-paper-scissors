function playGame() {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

    let humanScore = 0;
    let computerScore = 0;
    let isGameOver = false;

    const results = document.querySelector(".results");
    const answer = document.createElement("div");
    const humanScoreDiv = document.createElement("div");
    const computerScoreDiv = document.createElement("div");
    const winner = document.createElement("div");

    results.appendChild(answer);
    results.appendChild(humanScoreDiv);
    results.appendChild(computerScoreDiv);
    results.appendChild(winner);

    function playRound(humanChoice, computerChoice) {
        if (isGameOver) return;
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                answer.textContent = "Try again! You both chose rock";
            }
            else if (computerChoice === "paper") {
                answer.textContent = "You lose! Paper beats rock";
                computerScore++;
            }
            else {
                answer.textContent = "You win! Rock beats scissors";
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                answer.textContent = "You win! Paper beats rock";
                humanScore++;
            }
            else if (computerChoice === "paper") {
                answer.textContent = "Try again! You both chose paper";
            }
            else {
                answer.textContent = "You lose! Scissors beats paper";
                computerScore++;
            }
        }
        else {
            if (computerChoice === "rock") {
                answer.textContent = "You lose! Rock beats scissors";
                computerScore++;
            }
            else if (computerChoice === "paper") {
                answer.textContent = "You win! Scissors beats paper";
                humanScore++;
            }
            else {
                answer.textContent = "Try again! You both chose scissors";
            }
        }
        humanScoreDiv.textContent = `Human score: ${humanScore}`;
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;

        if (humanScore >= 5) {
            winner.textContent = "You win!";
            isGameOver = true;
        } 
        if (computerScore >= 5) {
            winner.textContent = "Computer wins!";
            isGameOver = true;
        }
    }
}

function getComputerChoice() {
    let x = Math.random();
    let result;
    if (x < 1/3) result = "rock";
    else if (x < 2/3) result = "paper";
    else result = "scissors";
    return result;
}

playGame();