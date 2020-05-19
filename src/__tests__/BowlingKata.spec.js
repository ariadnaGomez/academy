import { Game } from 'Game'

describe('BowlingGame', () => {
  let game, emptyCurrentPlay, states

  beforeEach(() => {
    game = new Game()
    states = {
      pending: 0,
      inProgress:  1
    }
    emptyCurrentPlay = {
      status: states.pending,
      bowls: 10,
      first: 0,
      last: 0,
      bonus: 0
    };
  })

  it('should return an empty play', () => {
    expect(game.getCurrentPlay()).toStrictEqual(emptyCurrentPlay)
  })

})
