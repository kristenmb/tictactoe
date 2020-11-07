class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.activePlayer = player1;
    this.playerOneMoves = [];
    this.playerTwoMoves = [];
    this.inPlay = true;
    
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
    //switchplayer every click
    //if activePlayer is 1, change activePlayer to 2, else change to 1.
    gamePlayDisplay.innerText = `It's ${this.activePlayer}'s turn'`
    //change innterHTML to display "it's ____'s turn"
  }

  checkWinConditions() {
    //if a win: HOW TO CHECK WIN CONDITIONS???
    //loop through win conditions, check to see if matching boxes have been clicked by same player, if yes - win, if no - switch player.
    if("win conditions met") {
    //add win to winning player's wins array-- actual board displayed?
    playerX.wins.push('win');
    //change inPlay to false
    this.inPlay = false;
    //resetGameboard
    resetGameboard();
    //else switchPlayer
    } else {
    switchPlayer();
    }
  }

  checkDrawConditions() {
    //if draw conditions met, resetGameboard
    //all boxes clicked, no win conditions met.
    if("its a draw") {
      gamePlayDisplay.innerText = `It's a draw!`;
      resetGameboard();
    }
  }

  resetGameboard() {
    //clear all game pieces.
    //inPlay = true
    this.inPlay = true;
    //
  }
}
