/*
2520 is the smallest number that
can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
export const divisores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const encontrados = [];

function isDivisor(number: number):number {
  let div = 0;
  for (let i = 0; i < divisores.length; i += 1) {
    if (number % divisores[i] === 0) div += 1;
  }
  return div;
}
// console.log(isDivisor(2520));
let num = 1;
while (true) {
  num += 1;
  if (isDivisor(num) === 20) {
    console.log(num);
    break;
  }
}
