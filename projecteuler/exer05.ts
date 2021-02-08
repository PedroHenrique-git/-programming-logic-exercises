/*

https://projecteuler.net/problem=6

*/
let sum1 = 0;
let sum2 = 0;
let res = 0;
for (let i = 1; i <= 100; i += 1) {
  sum1 += i ** 2;
}

for (let i = 1; i <= 100; i += 1) {
  sum2 += i;
}

res = (sum2 ** 2) - sum1;
console.log(res);
