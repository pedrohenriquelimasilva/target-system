function numberContainsFibonacci(number) {
  let isFibonacci = false
  let index = 1
  let lastIndex = 1

  while (number >= index) {
    if (number == index) {
      isFibonacci = true
      break
    }

    const tempIndex = index

    index += lastIndex
    lastIndex = tempIndex
  }

  return console.log(
    `o numero ${isFibonacci ? '' : 'não '}está presente na sequencia fibonacci`
  )
}

numberContainsFibonacci(12)
