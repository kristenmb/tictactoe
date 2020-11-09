class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.activePlayer = player1;
    this.clickCount = 0;
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  switchPlayer() {
    if (this.activePlayer === player1) {
      this.activePlayer = player2;
    } else {
      this.activePlayer = player1;
    };
    gamePlayDisplay.innerText = `It's ${this.activePlayer.token}'s turn`
  }

  checkWinConditions() {
    for (var i = 0; i < this.winConditions.length; i++) {
      var a = this.winConditions[i][0];
      var b = this.winConditions[i][1];
      var c = this.winConditions[i][2];
      if (this.activePlayer.board.includes(a) && this.activePlayer.board.includes(b) && this.activePlayer.board.includes(c)) {
        gamePlayDisplay.innerText = `${this.activePlayer.token} wins!`
        console.log('winner');
        this.activePlayer.wins++;
        this.clickCount = 0
        // setTimeout(this.displayWinner, 500);
        setTimeout(this.resetGameboard, 1000);
      }
    }
  }

  checkDrawConditions() {
    if(this.clickCount === 9) {
      this.clickCount = 0;
      gamePlayDisplay.innerText = `It's a draw!`;
      setTimeout(this.resetGameboard, 1000);
    }
  }

  displayWinner() {
    gamePlayDisplay.innerText = `${game.activePlayer.token} wins!`
  }

  resetGameboard() {
    playerOneWinDisplay.innerText = player1.wins;
    playerTwoWinDisplay.innerText = player2.wins;
    for(var i = 0; i <boxes.length; i++) {
      boxes[i].innerHTML = ''
    }
    player1.board = [];
    player2.board = [];
  }
}
