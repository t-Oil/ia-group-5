function generate(number) {
  for (i = 1; i <= number; i++) {
    let show = ''
    for (x = number; x >= i; x--) {
      show += ' '
    }

    for (z = 1; z <= i * 2; z++) {
      show += ((z === 1) || (z === i * 2)) ? i : '*'
    }
    console.log(show)
  }

  for (i = number - 1; i >= 1; i--) {
    let show = ''
    for (x = i; x <= number; x++) {
      show += ' '
    }

    for (z = i * 2; z >= 1; z--) {
      show += ((z === 1) || (z === i * 2)) ? i : '*'
    }
    console.log(show)
  }
}

generate(4)