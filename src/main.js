var game = new Game();
var gamePlayDisplay = document.querySelector('#player');
var boxes = document.querySelectorAll('.box');
var gameboardGrid = document.querySelector('#game-grid');
var playerOneWinDisplay = document.querySelector('#one-wins');
var playerTwoWinDisplay = document.querySelector('#two-wins');
var gameWinner = document.querySelector('#winner');
var resetButton = document.querySelector('#reset');
var factsButton = document.querySelector('#facts');
var mainPage = document.querySelector('#main-page');
var factsPage = document.querySelector('#facts-page');

window.addEventListener('load', beginGame);
gameboardGrid.addEventListener('click', addPlayerMark);
resetButton.addEventListener('click', resetLocalStorage);
factsButton.addEventListener('click', togglePages);

function beginGame() {
  if (localStorage['one wins'] > 0) {
    game.playerOne.retrieveWinsFromStorage();
  }
  if (localStorage['two wins'] > 0) {
    game.playerTwo.retrieveWinsFromStorage();
  }
  playerOneWinDisplay.innerText = game.playerOne.wins || 0;
  playerTwoWinDisplay.innerText = game.playerTwo.wins || 0;
}

function addPlayerMark() {
  var boxClicked = event.target;
  if (boxClicked.innerHTML === '' && !boxClicked.classList.contains("full")) {
    boxClicked.innerHTML = `${game.activePlayer.token}`;
    boxClicked.classList.add("full");
    gameWinner.classList.add('hidden');
    game.clickCount++;
    game.updatePlayerBoard();
    manageGamePlay();
    continueGamePlay();
    changePlayerTurnDisplay();
  }
}

function manageGamePlay() {
  game.checkWinConditions();
  game.checkDrawConditions();
  changePlayerTurnDisplay();
  changeWinStatusDisplay();
}

function changePlayerTurnDisplay() {
  gamePlayDisplay.innerText = `It's ${game.activePlayer.token}'s turn`;
}

function changeWinStatusDisplay() {
  if (game.activePlayer.winner) {
    gameWinner.classList.remove("hidden");
    gameWinner.innerText = `${game.activePlayer.token} wins!`;
    setTimeout(resetGameboard, 1000);
  }
  if (game.activePlayer.draw) {
    gameWinner.classList.remove("hidden");
    gameWinner.innerText = `It's a draw`;
    setTimeout(resetGameboard, 1000);
  }
}

function continueGamePlay() {
  game.switchPlayer();
}

function resetGameboard() {
  playerOneWinDisplay.innerText = game.playerOne.wins;
  playerTwoWinDisplay.innerText = game.playerTwo.wins;
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
    boxes[i].classList.remove('full');
  }
  game.resetGame(game.playerOne);
  game.resetGame(game.playerTwo);
}

function resetLocalStorage() {
  localStorage.clear();
  resetGameboard();
  game.playerOne.wins = 0;
  game.playerTwo.wins = 0;
  playerOneWinDisplay.innerText = 0;
  playerTwoWinDisplay.innerText = 0;
  gameWinner.classList.add('hidden');
}

function togglePages(page) {
  //hide main page
  mainPage.classList.add('hidden');
  //unhide facts page
  factsPage.classList.remove('hidden');

}
