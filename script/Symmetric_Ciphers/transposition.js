const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

function pNext(charCode) {
  var j, k;
  for (let i = charCode.length - 1; i > 0; i--) {
    if (charCode[i] > charCode[i - 1]) {
      j = i;
      break;
    }
  }

  for (let i = 0; i < charCode.length; i++) {
    if (charCode[i] > charCode[j - 1]) {
      k = i;
      break;
    }
  }

  if (j) {
    let temp = charCode[k];
    charCode[k] = charCode[j - 1];
    charCode[j - 1] = temp;

    let start = j;
    let end = charCode.length - 1;

    while (start < end) {
      let tmp = charCode[start];
      charCode[start] = charCode[end];
      charCode[end] = tmp;

      start++;
      end--;
    }
  } else {
    charCode.reverse();
  }

  return charCode;
}

function pBoxCipher(input, k) {
  var result = "";
  var charCode = new Array();

  for (let i = 0; i < input.length; i++) {
    var getChar = input.charCodeAt(i);

    charCode[i] = getChar;
  }

  for (let i = 1; i <= k; i++) {
    charCode = pNext(charCode);
  }

  for (let i = 0; i < charCode.length; i++) {
    result += String.fromCharCode(charCode[i]);
  }

  cipherText[0].innerHTML = "<h3>" + result + "</h3>";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  var input = plainText.value;
  var k = key.value;
  pBoxCipher(input, k);
});
