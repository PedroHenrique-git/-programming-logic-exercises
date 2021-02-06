/*

Dado um vetor qualquer sem valores repetidos, descubra qual é o
índice do maior valor e o índice do menor valor.

Repare que eu quero o índice e não o valor daquele índice.

*/

function findIndex(array: number[]): void {
  let maior = array[array.length - 1];
  let menor = array[0];
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      index1 = i;
    }
    if (array[i] < menor) {
      menor = array[i];
      index2 = i;
    }
  }

  console.log('Maior: ', maior, 'Index: ', index1);
  console.log('Menor: ', menor, 'Index: ', index2);
}
findIndex([6, 10, 4, 21, 9]);
