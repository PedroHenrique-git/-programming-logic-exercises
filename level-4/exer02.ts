/*

Crie um algoritmo para copiar um vetor (utilize laço de repetição).

Use a nomenclatura vetor1 para o vetor original e vetor2 para o vetor copiado.

*/

function copyArray(array: number[]): number[] {
  const array2: Array<number> = [];

  for (let i = 0; i < array.length; i += 1) {
    array2[i] = array[i];
  }

  return array2;
}

console.log(copyArray([10, 20, 30]));
