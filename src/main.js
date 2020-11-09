var gameboardGrid = document.querySelector('.grid')
var gamePlayDisplay = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');
var playerOneWinDisplay = document.querySelector('.one-wins');
var playerTwoWinDisplay = document.querySelector('.two-wins');

gameboardGrid.addEventListener('click', addMark);


var player1 = new Player('one', '🦜');
var player2 = new Player('two', '🌺');
var game = new Game(player1, player2);



function addMark() {
  var boxClicked = event.target;
  //&& boxclicked hasn't been clicked....
  //click on box adds a class or value in an object ... check if "clicked" is there if not click it.
  if (boxClicked.innerHTML === '') {
    boxClicked.innerHTML = `${game.activePlayer.token}`;
  }
  updatePlayer();
  manageGamePlay();
}

function updatePlayer() {
  game.activePlayer.board[`${event.target.id}`] = parseInt(`${event.target.id}`);
}

function manageGamePlay() {
  game.clickCount++;
  game.checkWinConditions();
  player1.saveWinsToStorage();
  player2.saveWinsToStorage();
  game.checkDrawConditions();
  game.switchPlayer();
}
