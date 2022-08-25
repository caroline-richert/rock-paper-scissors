// Variables for for a Scoreboard
const playerScore = 0;
const compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_div = document.querySelector(".result");

//Variables for buttons
const btn_rock = document.getElementById("rock");
const btn_paper = document.getElementById("paper");
const btn_scissors = document.getElementById("scissors");


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game (playerSelection) {
    const computerSelection = getComputerChoice();
    // Hier geht's weiter.
}





function main () {
    btn_rock.addEventListener('click', function() {
        game("rock");
    })
    btn_paper.addEventListener('click', function() {
        game("paper");
    })
    btn_scissors.addEventListener('click', function() {
        game("scissors");
    })
}

main();