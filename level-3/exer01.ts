/*

Faça um programa para somar os dígitos de um inteiro

Sem utilizar recursos de string, ou seja, trabalhe apenas com tipos numéricos.

Somar dígitos significa que dados um número qualquer, exemplo, 2015, devemos somar seus dígitos:

2  +  0 +  1 +  5
O resultado esperado para o número acima seria 8.

*/

function sum(number: number): number {
  let sum = 0;
  while (number !== 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

console.log(sum(2015));
