class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.board = [
      '', '', '',
      '', '', '',
      '', '', '',
    ];

  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem("player-wins", stringifiedWins)
  }

  retrieveWinsFromStorage() {
    var retrieved = localStorage.getItem("player-wins");
    var parsedWins = JSON.parse(retrieved);
  }
}


//when player wins save
//onpage reload retrieve.
