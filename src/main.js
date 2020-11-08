var gameboardGrid = document.querySelector('.grid')
var gamePlayDisplay = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');

gameboardGrid.addEventListener('click', addMark);

var player1 = new Player('one', '🦜');
var player2 = new Player('two', '🌺');
var game = new Game(player1, player2);

function addMark() {
  var boxClicked = event.target;
  if (boxClicked.innerHTML === '') {
    boxClicked.innerHTML = `${game.activePlayer.token}`;
  }

  game.clickCount++;
  game.checkWinConditions();
  game.checkDrawConditions();
  game.switchPlayer();
}

function updateWins() {

}
