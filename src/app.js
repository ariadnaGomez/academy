// eslint-disable-next-line import/no-mutable-exports
export let counter = 0

export function increment() {
  counter++
  document.getElementById('counter').innerHTML = counter
}

window.increment = increment
