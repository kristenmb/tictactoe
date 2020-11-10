var game = new Game();
var gameboardGrid = document.querySelector('#game-grid')
var gamePlayDisplay = document.querySelector('#player');
var boxes = document.querySelectorAll('.box');
var playerOneWinDisplay = document.querySelector('#one-wins');
var playerTwoWinDisplay = document.querySelector('#two-wins');
var gameWinner = document.querySelector('#winner');

window.addEventListener('load', createGame);
gameboardGrid.addEventListener('click', addMark);

function createGame() {
  if(localStorage['one wins'] > 0) {
    game.playerOne.retrieveWinsFromStorage();
  }
  if(localStorage['two wins'] > 0) {
    game.playerTwo.retrieveWinsFromStorage();
  }
  playerOneWinDisplay.innerText = game.playerOne.wins || 0;
  playerTwoWinDisplay.innerText = game.playerTwo.wins || 0;
}

function addMark() {
  var boxClicked = event.target;
  if (boxClicked.innerHTML === '' && !boxClicked.classList.contains("full")) {
    boxClicked.innerHTML = `${game.activePlayer.token}`;
    boxClicked.classList.add("full");
    gameWinner.innerText = '';
    game.clickCount++;
    game.updatePlayerBoard();
    manageGamePlay();
    continueGamePlay();
    changeDisplay();
  }
}

function manageGamePlay() {
  game.checkWinConditions();
  game.checkDrawConditions();
  changeDisplay();
  if (game.activePlayer.winner === true) {
    displayWinner();
    setTimeout(resetGameboard, 1000);
    game.resetGame();
  }
  if (game.activePlayer.draw === true) {
    displayDraw();
    setTimeout(resetGameboard, 1000);
    game.resetGame();
  }
}

function changeDisplay() {
    gamePlayDisplay.innerText = `It's ${game.activePlayer.token}'s turn`;
  }

function displayWinner() {
    gameWinner.innerText = `${game.activePlayer.token} wins!`
  }

function displayDraw() {
    gameWinner.innerText = `It's a draw`
  }

function resetGameboard() {
  playerOneWinDisplay.innerText = game.playerOne.wins;
  playerTwoWinDisplay.innerText = game.playerTwo.wins;
  for(var i = 0; i <boxes.length; i++) {
    boxes[i].innerHTML = ''
    boxes[i].classList.remove("full");
  }
}

function continueGamePlay() {
  game.switchPlayer();
}
