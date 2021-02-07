/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/
let n = 600851475143;

const fatores = [];

while (n % 2 === 0) {
  fatores.push(2);
  n /= 2;
}

let d = 3;
let d2 = 9;

while (d2 <= n) {
  if (n % d === 0) {
    fatores.push(d);
    n /= d;
  } else {
    d += 2;
    d2 = d * d;
  }
}

if (n > 1) {
  fatores.push(n);
}

let maior = 0;
for (let i = 0; i < fatores.length; i += 1) {
  if (fatores[i] > maior) {
    maior = fatores[i];
  }
}
console.log(fatores);
console.log(maior);
