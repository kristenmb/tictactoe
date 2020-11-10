class Game {
  constructor() {
    this.playerOne = new Player('one', '🦜');;
    this.playerTwo = new Player('two', '🌺');
    this.activePlayer = this.playerOne;
    //waitingplayer??
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
    if (this.activePlayer === this.playerOne) {
      this.activePlayer = this.playerTwo;
    } else {
      this.activePlayer = this.playerOne;
    };
  }

  updatePlayerBoard() {
    game.activePlayer.board[`${event.target.id}`] = parseInt(`${event.target.id}`);
  }

  checkWinConditions() {
    for (var i = 0; i < this.winConditions.length; i++) {
      var a = this.winConditions[i][0];
      var b = this.winConditions[i][1];
      var c = this.winConditions[i][2];
      if (this.activePlayer.board.includes(a) && this.activePlayer.board.includes(b) && this.activePlayer.board.includes(c)) {
        this.activePlayer.wins++;
        this.clickCount = 0
        this.playerOne.saveWinsToStorage();
        this.playerTwo.saveWinsToStorage();
        this.activePlayer.winner = true;
        // setTimeout(resetGameboard, 1000)
        // this.resetGame();
      }
    }
  }

  checkDrawConditions() {
    if(this.clickCount === 9) {
      this.clickCount = 0;
      this.activePlayer.draw = true;
    }
  }

  resetGame() {
  this.playerOne.board = [];
  this.playerOne.draw = false;
  this.playerOne.winner = false;
  this.playerTwo.board = [];
  this.playerTwo.draw = false;
  this.playerTwo.winner = false;
}

}
