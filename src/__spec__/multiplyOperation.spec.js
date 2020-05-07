import {MultiplyOperation} from '../multiplyOperation'

describe('MultiplyOperation', () => {
  it('give two numbers should calculate a multiply operation', () => {
    const multiply = new MultiplyOperation(5, 2)
    multiply.execute()
    expect(multiply.result).toBe(10)
  })
})
