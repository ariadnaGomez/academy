import { counter, increment } from '../app'

describe('Super counter in vanilla js', () => {
  it('should increment by 1 the counter', () => {
    document.body.innerHTML =
      '<span>You clicked </span>' +
      '<span id="counter">0</span>' +
      '<span>times</span>' +
      '<button id="button" onclick="increment();"></button>'

    expect(counter).toEqual(0)
    increment()
    expect(counter).toEqual(1)
  })
})
