const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

// encrypt code

function encryptCipher(input, k) {
  var result = "";
  for (let i = 0; i < input.length; i++) {
    let cipherValue1 = input.charCodeAt(i);
    k = k % 26;
    cipherValue1 += k;
    let cipherValue2 = String.fromCharCode(cipherValue1);
    result = result + cipherValue2;
  }
  cipherText[0].innerHTML = "<h3>" + result + "</h3>";
}

// decrypt code

function decryptCipher(input, k) {
  var result = "";
  for (let i = 0; i < input.length; i++) {
    let cipherValue1 = input.charCodeAt(i);
    k = k % 26;
    cipherValue1 -= k;
    let cipherValue2 = String.fromCharCode(cipherValue1);
    result = result + cipherValue2;
  }
  cipherText[1].innerHTML = "<h3>" + result + "</h3>";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  var input = plainText.value;
  var k = Number(key.value);
  encryptCipher(input, k);
  decryptCipher(input, k);
});
