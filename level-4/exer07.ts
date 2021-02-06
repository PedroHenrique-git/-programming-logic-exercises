/*

Faça um programa para comparar se duas strings são iguais.

Comentários: este é mais um exercício para exercitarmos laços de repetição.
Esta série referem-se as strings pois,
sabemos que em C as strings se assemelham a um vetor (char string[]).

*/

function compareString(string1: string, string2: string):boolean {
  let val = false;
  for (let i = 0; i < string1.length; i += 1) {
    for (let j = 0; j < string2.length; j += 1) {
      if (string1[i] === string2[j]) {
        val = true;
      } else {
        val = false;
      }
    }
  }

  return val;
}

console.log(compareString('ab', 'ab'));
