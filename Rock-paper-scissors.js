// Functions to generate a radom Itemchoice by the Computer

function getSign() {
    return Math.floor((Math.random() * 3) + 1)
}


function getComputerChoice () {
    const numberRPS = getSign();
    if (numberRPS === 1) {
        console.log("Rock");
    } else if (numberRPS === 2) {
        console.log("Paper");
    }   else {
        console.log("Scissors");
    }
}

//Palying a Round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));