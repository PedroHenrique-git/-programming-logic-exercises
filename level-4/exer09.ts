/*

Faça um programa que inverta uma string, exemplo: “animal” em “lamina”.

*/

function invertString(string: string): string {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
}

console.log(invertString('animal'));
