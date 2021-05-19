let words = document.getElementById(`words`)
let shiftAmount = document.getElementById(`shiftAmount`)
let leftButton = document.getElementById(`leftButton`)
let rightButton = document.getElementById(`rightButton`)

leftButton.addEventListener(`click`, shiftLeft)
rightButton.addEventListener(`click`, shiftRight)

words.focus()

function shiftLeft() {
  let amount = Number(shiftAmount.value)
  shift(-amount)
}

function shiftRight() {
  let amount = Number(shiftAmount.value)
  shift(amount)
}

function shift(amount) {
  amount = amount % 26
  let output = ``

  for (let char of words.value) {
    let charCode = char.charCodeAt()

    if (charCode >= 65 && charCode <= 90) {
      charCode += amount

      if (charCode < 65) {
        charCode += 26
      } else if (charCode > 90) {
        charCode -= 26
      }

      output += String.fromCharCode(charCode)
    } else if (charCode >= 97 && charCode <= 122) {
      charCode += amount

      if (charCode < 97) {
        charCode += 26
      } else if (charCode > 122) {
        charCode -= 26
      }

      output += String.fromCharCode(charCode)
    } else {
      output += char
    }
  }

  words.value = output
}
