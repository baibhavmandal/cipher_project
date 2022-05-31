const p = 13; // we need to use large prime number on the order of 300 decimal digits practically
const g = 4; // a random number
const x = 4000; // a large random number is needed to be chosen by sender
const y = 5000; // a large random number is needed to be  chosen by reciver

// here ideal number are taken for convinence

// function to caluclate g ^ x mod p or g ^ y mod p

function mod(m, n) {
  return m - n * Math.floor(m / n);
}

function PowerMod(x, p, N) {
  // Compute x^p mod N
  var A = 1;
  var m = p;
  var t = x;

  while (m > 0) {
    k = Math.floor(m / 2);
    r = m - 2 * k;
    if (r == 1) A = mod(A * t, N);
    t = mod(t * t, N);
    m = k;
  }
  return A;
}

var r1 = PowerMod(g, x, p);
var r2 = PowerMod(g, y, p);

var k1 = PowerMod(r2, x, p);
var k2 = PowerMod(r1, y, p);

function verify(k1, k2) {
  if (k1 === k2) return true;
  else return false;
}

console.log(verify(k1, k2));
