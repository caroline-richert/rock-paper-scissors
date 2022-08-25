// Functions to generate a radom Itemchoice by the Computer
function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    const index = getRandomIndex(0, 2);
    return choices[index];
}

//Saving the Itemselections of Player and Computer
const playerSelection = "rock";
const computerSelection = getComputerChoice()

//Playing a Round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return -1
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return -1
    } else {
        return -1
    }
}

// Storing the Result of playRound
const result = playRound(playerSelection, computerSelection);

// Displays the Result of playRound
function gameResult () {
    if (result === 1) {
        return "Yayy, you won!";
    } else if (result === -1) {
        return "Sorry Bro!";
    } else {
        return "It's a tie!";
    }
}


// Playing a Game of 5 Rounds with the Results displayed
function game () {
    // soll 5x die Funktion playRound und danach gameResult aufrufen
    // soll nach 5 Runden "The End!" anzeigen

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(gameResult());
    }
    console.log("The End!")
}


// Code for a Scoreboard
let playerScore = 0;
let compScore = 0;

function keepScore() {
    if (result === 1) {
        return playerScore ++;
    } else if (result === -1) {
        return compScore ++;
    } else {
    }
    // wenn Comp gewinnt -> compScore ++
    // wenn unentschieden -> nichts passiert
    // hört auf, sobald 5 Runden gespielt sind
}
