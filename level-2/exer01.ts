/*

Crie uma função que descubra se um valor é positivo ou negativo
(considere o valor zero como positivo)

*/

function isPositive(number: number):boolean {
  if (number >= 0) return true;
  return false;
}

console.log(isPositive(-1));
