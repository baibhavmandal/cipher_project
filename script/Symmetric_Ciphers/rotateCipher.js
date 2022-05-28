const submit = document.getElementById("submit");
const plainText = document.getElementById("plainText");
const key = document.getElementById("key");
const cipherText = document.getElementsByClassName("cipherText");

// encrypt code

function encryptCipher(input, k) {
  var result = "";
  var arr = Array.from(input);
  var store = "";
  for (let i = 0; i < k; i++) {
    var temp = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
      store = arr[j];
      arr[j] = temp;
      temp = store;
    }
    console.log(arr);
  }
  result = arr;
  console.log(typeof arr);
  cipherText[0].innerHTML = "<h3>" + result + "</h3>";
}

// dcrypt code

function dcryptCipher() {
  var result = "";
  var arr = Array.from(input);
  var store = "";
  for (let i = 0; i < k; i++) {
    var temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j >= 0; j--) {
      store = arr[j];
      arr[j] = temp;
      temp = store;
    }
    console.log(arr);
  }
  result = arr;
  console.log(typeof arr);
  cipherText[1].innerHTML = "<h3>" + result + "</h3>";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  var input = plainText.value;
  var k = key.value;
  encryptCipher(input, k);
  dcryptCipher(input, k);
});
