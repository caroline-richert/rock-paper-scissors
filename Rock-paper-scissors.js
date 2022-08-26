// Variables for for a Scoreboard
let playerScore = 0;
let compScore = 0;
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

function win() {
    playerScore++;
}

function lose() {
    
}

function draw() {
    
}

function game (playerSelection) {
    const computerSelection = getComputerChoice();
    switch(playerSelection + computerSelection) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
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