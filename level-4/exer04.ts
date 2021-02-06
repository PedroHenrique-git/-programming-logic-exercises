/*

Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.

*/

function repeated(array: number[]): void {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        console.log(array[i], array[j]);
      }
    }
  }
}

console.log(repeated([1, 2, 2, 4, 5, 2]));
