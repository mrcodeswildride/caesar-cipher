var wordsInput = document.getElementById("words");

var shiftAmountInput = document.getElementById("shiftAmount");
var shiftLeftButton = document.getElementById("shiftLeft");
var shiftRightButton = document.getElementById("shiftRight");

shiftLeftButton.addEventListener("click", shiftLeft);
shiftRightButton.addEventListener("click", shiftRight);

wordsInput.focus();

function shiftLeft() {
    var amount = parseInt(shiftAmountInput.value, 10);

    if (!isNaN(amount)) {
        shift(-amount);
    }
}

function shiftRight() {
    var amount = parseInt(shiftAmountInput.value, 10);

    if (!isNaN(amount)) {
        shift(amount);
    }
}

function shift(amount) {
    amount = amount % 26;

    var input = wordsInput.value.trim();
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var charCode = input[i].charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
            charCode += amount;

            if (charCode < 65) {
                charCode += 26;
            }
            else if (charCode > 90) {
                charCode -= 26;
            }

            output += String.fromCharCode(charCode);
        }
        else if (charCode >= 97 && charCode <= 122) {
            charCode += amount;

            if (charCode < 97) {
                charCode += 26;
            }
            else if (charCode > 122) {
                charCode -= 26;
            }

            output += String.fromCharCode(charCode);
        }
        else {
            output += input[i];
        }
    }

    wordsInput.value = output;
    wordsInput.focus();
}
