/*

Crie uma função que retorna a soma de um vetor qualquer

*/

function sumArray(array: number[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([10, 20, 30, 0]));
