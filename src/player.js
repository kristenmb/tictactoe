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
    localStorage.setItem(`${this.id} wins`, JSON.stringify(this.wins))
  }

  retrieveWinsFromStorage() {
    var retrieved = localStorage.getItem("player-wins");
    var parsedWins = JSON.parse(retrieved);
  }
}


//when player wins save
//onpage reload retrieve.
