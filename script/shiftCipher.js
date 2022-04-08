const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function shiftCipher() {
  var text = plainText.value.toUpperCase();
  var cipherKey = Number(key.value);
  var cipherValue = "";
  for (let i = 0; i < text.length; i++) {
    let decryptCode;
    for (let j = 0; j < alphabets.length; j++) {
      if (text[i] == alphabets[j]) {
        decryptCode = j + cipherKey;
        if (decryptCode < 0) {
          decryptCode += 26;
        }
        decryptCode = decryptCode % 26;
        break;
      }
    }
    cipherValue = cipherValue + alphabets[decryptCode];
  }
  cipherText[0].innerHTML = "<h3>" + cipherValue + "</h3>";
}

submit.addEventListener("click", () => {
  shiftCipher();
});
