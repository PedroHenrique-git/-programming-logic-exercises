/*

Utilizando funções,
faça um programa que calcule as raízes da equação do 2 grau conforme a fórmula de Bhaskara.

Lembrando:

ax(2) + bx + c = 0

delta = (Δ = b2 - 4.a.c)
x1    = ( (-b + √Δ)/2a)
x2    = ( (-b - √Δ)/2a)

*/

function Bhaskara(a: number, b: number, c: number): {x1: number, x2: number} {
  const delta = (b ** 2) - (4 * a * c);
  if (delta > 0) {
    const x1 = ((-(b) + Math.sqrt(delta)) / (2 * a));
    const x2 = ((-(b) - Math.sqrt(delta)) / (2 * a));
    return { x1, x2 };
  }
  return { x1: 0, x2: 0 };
}

console.log(Bhaskara(1, 0, -16));
