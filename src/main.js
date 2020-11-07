var gameboardGrid = document.querySelector('.grid')

gameboardGrid.addEventListener('click', addMark)


var player1 = new Player('one', '🦜');
var player2 = new Player('two', '🌺');
var game = new Game(player1, player2);

function addMark() {
  var boxClicked = event.target;
  if (boxClicked.innerHTML === '') {
    boxClicked.innerHTML = `${game.activePlayer.token}`
  }
  game.switchPlayer();
}
