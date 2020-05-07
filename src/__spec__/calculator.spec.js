import {Calculator} from '../calculator'

describe('MultiplyOperation', () => {
  it('given two positive numbers should calculate a multiplication', () => {
    // ARRANGE
    const expected = 10
    const calculator = new Calculator()

    // ACT
    const result = calculator.multiply(5, 2)

    //ASSERT
    expect(result).toBe(expected)
  })
})
