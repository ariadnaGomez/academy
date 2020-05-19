export class Game {

  constructor() {
    this.plays = []
    this.score = 0;
    this.turns = 20;
    this.states = {
      pending: 0,
      inProgress:  1
    }
    this.currentPlay = {
      status: this.states.pending,
      bowls: 10,
      first: 0,
      last: 0,
      bonus: 0
    };
  }

  play() {
    return this.currentPlay
  }

  getCurrentPlay() {
    return this.currentPlay
  }

  resetCurrentPlay() {
    this.currentPlay = {
      status: this.states.pending,
      bowls: 10,
      first: 0,
      last: 0,
      bonus: 0
    };
  }

  getScore() {
    return this.score;
  }
}
