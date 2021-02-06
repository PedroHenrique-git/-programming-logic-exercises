/*

Faça um programa para identificar se um número é primo.

Lembre-se que número primo, é um número natural,
maior que 1, apenas divisível por si próprio e pela unidade.

*/

function isPrimo(number: number):boolean {
  const divisores:number[] = [];
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      divisores.push(i);
    }
  }

  if (divisores.length === 2) return true;
  return false;
}

console.log(isPrimo(257));
