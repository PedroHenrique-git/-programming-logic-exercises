/*

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/
const arr1: number[] = [];
const multi: number[] = [];
// const arr2 = [];

for (let i = 1; i <= 999; i += 1) {
  arr1.push(i);
}

for (let i = 0; i < arr1.length; i += 1) {
  for (let j = i + 1; j < arr1.length; j += 1) {
    multi.push(arr1[i] * arr1[j]);
    // multi.push(arr1[i] * arr1[j]);
  }
}

let m = 0;

for (let i = 0; i < multi.length; i += 1) {
  const string = String(multi[i]);
  const invertido = string.split('').reverse().join('');

  if (string === invertido) {
    if (Number(string) > m) {
      m = Number(string);
    }
  }
}
console.log(m);
// console.log('array de i: ', arr1);
// console.log('array de j: ', arr2);
