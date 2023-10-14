const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER _WINS";

let gameIsRunning =  false;

const getPlayerChoice = function() {
  const selection = prompt("Rock paper or scissors?").toUpperCase();
  console.log(selection);
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("Not a valid choice. We chose rock for you");
    return DEFAULT_USER_CHOICE;
  } 
    return selection;
  
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if(randomValue < 0.34 ){
    return ROCK;
  } else if (randomValue < 0.67){
    return PAPER;
  } else{
    return SCISSORS;
  }
}

const getWinner = (cChoice, pChoice) => {
  if(pChoice === cChoice){
    return RESULT_DRAW;
  } else if(pChoice === ROCK && cChoice === PAPER ||
     pChoice === PAPER && cChoice === SCISSORS ||
     pChoice === SCISSORS && cChoice === ROCK){
    return RESULT_COMPUTER_WINS;
  } else {
    return RESULT_PLAYER_WINS;
  }
  
}

startGameBtn.addEventListener("click", function() {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log("the players selection is " + playerSelection);
  
  console.log("the computer's selection is " + computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, the computer picked ${computerSelection}, therefore `;
  if(winner === RESULT_DRAW){
    message = message + "it's a draw.";
  } else if(winner === RESULT_PLAYER_WINS){
    message = message + "you won.";
  } else{
    message = message + "you lost.";
  }

  alert(message);
  gameIsRunning = false;
});



// const getPlayerChoice = function() {
//   const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
//   if (
//     selection !== ROCK &&
//     selection !== PAPER &&
//     selection !== SCISSORS
//   ) {
//     alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
//     return DEFAULT_USER_CHOICE;
//   }
//   return selection;
// };

// startGameBtn.addEventListener('click', function() {
//   console.log('Game is starting...');
//   const playerSelection = getPlayerChoice();
//   console.log(playerSelection);
// });
