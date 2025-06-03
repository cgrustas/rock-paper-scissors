function getComputerChoice() {
    let x = Math.random();
    console.log("Random value x:", x);
    if (x < .33) return "rock";
    else if (x < .66) return "paper";
    else return "scissors";
}