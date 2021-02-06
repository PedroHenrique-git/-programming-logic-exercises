/*

Utilizando o conceito de recursão, faça um algoritmo que some os dígitos de 1 até n, por exemplo:

add(5) = 15 = 1 + 2 + 3 + 4 + 5
add(4) = 10 = 1 + 2 + 3 + 4
add(3) =  6 = 1 + 2 + 3

*/

function add(number: number): number {
  let sum = 0;
  if (number !== 0) {
    sum += add(number - 1);
  }
  return sum;
}
console.log(add(5));
