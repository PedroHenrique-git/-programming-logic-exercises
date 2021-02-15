/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

export const isPrime = (n:number): boolean => {
  let div = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      div += 1;
    }
  }
  if (div === 2) return true;
  return false;
};

let sum = 0;

for (let i = 1; i < 2000000; i += 1) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum);
