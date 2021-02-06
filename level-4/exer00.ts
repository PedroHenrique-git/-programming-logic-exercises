/*

Escreva um algoritmo para carregar um vetor
com os números de 1 (inclusive) a 5 (inclusive) em ordem crescente.

*/

function loadArray(array: number[]): Array<number> {
  for (let i = 0; i < 5; i += 1) {
    array[i] = i + 1;
  }

  return array;
}

console.log(loadArray([]));
