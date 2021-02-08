/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/
export let a = 3;
let b = 4;
let c = 5;
let soma = 0;
while (true) {
  if (a < b && b < c) {
    // eslint-disable-next-line no-unused-expressions
    const d = (a ** 2) + (b ** 2) == c ** 2;
    soma = a + b + c;
    if (d && soma == 1000) {
      console.log(soma);
      break;
    } else {
      a = b;
      b = c;
      c += 1;
    }
  }
}
