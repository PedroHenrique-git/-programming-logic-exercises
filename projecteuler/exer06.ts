/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/
const t = 10001;
function isPrime(number: number): number {
  let d = 0;
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) d += 1;
  }
  return d;
}
let p = 0;
const primes = [];
while (true) {
  p += 1;
  if (isPrime(p) === 2) {
    primes.push(p);

    if (primes.length === t) {
      break;
    }
  }
}

console.log(primes[primes.length - 1]);
