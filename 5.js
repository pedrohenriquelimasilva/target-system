function reverteString(string) {
  const newString = string
    .split('')
    .map((_, index, allLetter) => {
      const length = allLetter.length - 1
      return allLetter[length - index]
    })
    .join('')

  return console.log(newString)
}

reverteString('PEDRAOOOOOO')
