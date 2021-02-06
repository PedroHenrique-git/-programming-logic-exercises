/*

Faça um programa para contar a quantidade de caracteres que ela contem.

Comentário:
Este problema é para praticarmos laços de repetição e introduzirmos o conceito de string.

String é um conjunto de caracteres,
mas seu significado por variar de uma linguagem para outra, como veremos neste artigo.

*/

function contString(string: string):number {
  let sum = 0;
  for (let i = 0; i <= string.length; i += 1) {
    sum = i;
  }
  return sum;
}

console.log('palavra'.length);
console.log(contString('palavra'));
