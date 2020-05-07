import {MultiplyOperation} from 'multiplyOperation'

export class Calculator {
  constructor() {
    this.screen = 0
  }

  multiply(multiplicand, multiplier) {
    const operation = new MultiplyOperation(multiplicand, multiplier)
    operation.execute()
    this.screen = operation.result
    return operation.result
  }
}
