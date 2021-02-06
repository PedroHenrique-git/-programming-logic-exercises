/*

Faça um programa que descubra a quantidade de vogais de uma determinada string.

*/

function qtdVogais(string: string): number {
  const vogais: string[] = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let qtd = 0;
  for (let i = 0; i < vogais.length; i += 1) {
    for (let j = 0; j < string.length; j += 1) {
      if (string[j] === vogais[i]) {
        qtd += 1;
      }
    }
  }
  return qtd;
}

console.log(qtdVogais('abecedario'));
