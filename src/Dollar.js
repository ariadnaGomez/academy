export class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier)
  }

  equals(currency) {
    return this.amount === currency.amount
  }
}
