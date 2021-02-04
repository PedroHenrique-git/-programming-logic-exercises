/*

Faça um programa para calcular o juros simples segundo a fórmula abaixo.

J = C.i.n

*/

function simpleInterest(C: number, i: number, n: number):number {
    return (C * (i/100) * n);
}

console.log(simpleInterest(16000,4,4));