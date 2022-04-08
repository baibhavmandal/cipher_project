const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

function xorCipher() {
  var text = plainText.value.toUpperCase();
  var cipherKey = Number(key.value);
  var cipherValue = "";
  for (let i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    var element;
    element = charCode ^ cipherKey;
    cipherValue += element;
  }
  cipherText[0].innerHTML = "<h3>" + cipherValue + "</h3>";
}

submit.addEventListener("click", () => {
  xorCipher();
});
