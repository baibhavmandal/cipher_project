const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function to remove duplicates in a string
function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

// encrypt code

function encryptCipher(input, k) {
  input = input.toUpperCase();
  k = k.toUpperCase();

  var removeDuplicates = removeDuplicateCharacters(k + input);
  var result = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      result += " ";
      continue;
    }

    result += removeDuplicates[input.charCodeAt(i) - 65];
  }

  cipherText[0].innerHTML = "<h3>" + result + "</h3>";
}

// dcrypt code

function dcryptCipher(input, k) {
  input = input.toUpperCase();
  k = k.toUpperCase();

  var decodekey = removeDuplicateCharacters(k + text);
  var result = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      result += " ";
      continue;
    }

    result += text[decodekey.indexOf(input[i])];
  }

  cipherText[1].innerHTML = "<h3>" + result + "</h3>";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  var input = plainText.value;
  var k = key.value;
  encryptCipher(input, k);
  dcryptCipher(input, k);
});
