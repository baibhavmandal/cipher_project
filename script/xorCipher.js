const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

function xorCipher(input, k) {
  let result = "";
  for (let index = 0; index < input.length; index++) {
    result += String.fromCharCode(
      input.charCodeAt(index) ^ k.charCodeAt(index % k.length)
    );
  }
  cipherText[0].innerHTML = "<h3>" + result + "</h3>";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  var input = plainText.value;
  var k = key.value;
  xorCipher(input, k);
});
