// Variables for for a Scoreboard
let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_p = document.querySelector(".result");
let playerItem_span = document.querySelector(".playerItem");
let compItem_span = document.querySelector(".compItem");

//Variables for buttons
const btn_rock = document.getElementById("rock");
const btn_paper = document.getElementById("paper");
const btn_scissors = document.getElementById("scissors");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function items(playerSelection, computerSelection) {
    playerItem_span.innerHTML = playerSelection;
    compItem_span.innerHTML = computerSelection;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    items(playerSelection, computerSelection);
    result_p.innerHTML = `Yay! You've won!`;
    document.getElementById(playerSelection).classList.add('green-glow');
    setTimeout(() => document.getElementById(playerSelection).classList.remove('green-glow'), 300);
}

function lose(playerSelection, computerSelection) {
    compScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    items(playerSelection, computerSelection);
    result_p.innerHTML = "Sorry Bro. Try again!";
    document.getElementById(playerSelection).classList.add('red-glow');
    setTimeout(() => document.getElementById(playerSelection).classList.remove('red-glow'), 300);

}

function draw(playerSelection, computerSelection) {
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    items(playerSelection, computerSelection);
    result_p.innerHTML = "DRAW!";
    document.getElementById(playerSelection).classList.add('gray-glow');
    setTimeout(() => document.getElementById(playerSelection).classList.remove('gray-glow'), 300);

}

function game (playerSelection) {
    computerSelection = getComputerChoice();
    switch(playerSelection + computerSelection) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(playerSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerSelection, computerSelection);
            break;
    }
}

function main () {
    btn_rock.addEventListener('click', () => game("rock"));
    btn_paper.addEventListener('click', () => game("paper"));
    btn_scissors.addEventListener('click', () => game("scissors"));
}

//for (let i = 0; i < 5; i++) {
    // Hier weitermachen.... 5 Rounds -> Then display win, lose or tie!
 //}

main();