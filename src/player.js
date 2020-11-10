class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.winner = false;
    this.draw = false;
    this.board = [
      '', '', '',
      '', '', '',
      '', '', '',
    ];
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.id} wins`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.id} wins`));
  }
}
