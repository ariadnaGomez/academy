export class MultiplyOperation {
  constructor(multiplicand, multiplier) {
    this.multiplicand = multiplicand
    this.multiplier = multiplier
    this.result = 0
  }

  execute() {
    while (this.multiplier > 0) {
      this.result = this.result + this.multiplicand
      this.multiplier = this.multiplier - 1
    }
  }
}
