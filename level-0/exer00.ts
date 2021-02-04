/*

Escreva um algoritmo que armazene o valor 999 na variável a e o valor 555 na variável b.

A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em a passe para b e vice-versa.

*/

let a: number = 999;
let b: number = 555;

console.log(a,b);

let temp: number = a;
a = b;
b = temp;

console.log(a,b,temp);

temp = b;
b = a;
a = temp;

console.log(a,b,temp);


