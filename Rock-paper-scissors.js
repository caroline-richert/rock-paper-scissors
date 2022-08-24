// Functions to generate a radom Itemchoice by the Computer

function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CHOICES = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const index = getRandomIndex(0, 2);

    return CHOICES[index];
}
console.log(getComputerChoice());

//Playing a Round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    // your code here!
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));