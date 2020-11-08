class Game {
  constructor(player1, player2) {
    this.playerOne = player1;
    this.playerTwo = player2;
    this.activePlayer = player1;
    this.playerOneMoves = [];
    this.playerTwoMoves = [];
    this.inPlay = true;
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
    //switchplayer every click
    //if activePlayer is 1, change activePlayer to 2, else change to 1.
    gamePlayDisplay.innerText = `It's ${this.activePlayer.token}'s turn`
    //change innterHTML to display "it's ____'s turn"
  }

  checkWinConditions() {
    console.log("not a win")
    //if a win: HOW TO CHECK WIN CONDITIONS???
    //loop through win conditions, check to see if matching boxes have been clicked by same player, if yes - win, if no - switch player.
    // if("win conditions met") {
    // //add win to winning player's wins array-- actual board displayed?
    // playerX.wins.push('win');
    // //change inPlay to false
    // this.inPlay = false;
    // //resetGameboard
    // setTimeout(this.resetGameboard, 1000);
    // //else switchPlayer
    // } else {
    // switchPlayer();
    // }
  }

  checkDrawConditions() {
    if(this.clickCount === 9) {
      this.clickCount = 0;
      gamePlayDisplay.innerText = `It's a draw!`;
      setTimeout(this.resetGameboard, 1000);
    }
  }

  resetGameboard() {
    console.log('timeout')
    //clear all game pieces.
    for(var i = 0; i <boxes.length; i++) {
      boxes[i].innerHTML = ''
    }
    //inPlay = true
    this.inPlay = true;
    //set timeout?

  }
}
