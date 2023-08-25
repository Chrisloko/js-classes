const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';


const getPlayerChoice = function(){
  const selection = prompt('Rock, paper or Scissors?', '');
  if(selection !== 'Rock' && selection !== 'Paper' && selection !== 'Scissors'){
    alert('Invalid entries! We chose rock for you');
  }

}

const start = function() {
  console.log('Game is starting...');
  getPlayerChoice();
};



startGameBtn.addEventListener('click', start);
