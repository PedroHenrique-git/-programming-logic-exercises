/*

Faça um programa que calcule a sequencia de Fibonacci.

Vamos lembrar o que é o sequencia de Fibonacci?

É uma sequencia de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente (número de Fibonacci) corresponde a soma dos dois anteriores.

A sequência é definida pela fórmula abaixo.

Sequencia de fibonacci

Os primeiros números deste sequencia seria…

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584
Então, podemos utilizar como testes os resultados abaixo.

fib(0) == 0
fib(1) == 1
fib(2) == 1
fib(3) == 2
fib(4) == 3
fib(5) == 5
fib(6) == 8
Agora é com você, não vale ver as respostas!!!!

*/

function fibonacciVersao1(n: number): void {
  let atual = 1;
  let anterior = 0;
  for (let i = 0; i < n; i += 1) {
    atual += anterior;
    anterior = atual - anterior;
    console.log(atual);
  }
}
// console.log(fibonacciVersao1(12));

function fibonacciVersao2(n: number): number {
  if (n < 2) return n;
  return fibonacciVersao2(n - 1) + fibonacciVersao2(n - 2);
}

for (let i = 1; i <= 6; i++) {
  console.log(fibonacciVersao2(i));
}
