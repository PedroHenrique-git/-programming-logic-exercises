/*

Faça um programa para calcular o MMC (mínimo múltiplo comum) entre dois números.

“Sejam a e b dois ou mais números naturais não nulos temos que MMC(a, b) . MDC(a, b) = a . b.”

Invertendo as contas, temos MMC = a . b / MDC

*/

function mmc(number1: number, number2: number): void {
  let resto = 0;
  const realNumber1 = number1;
  const realNumber2 = number2;

  do {
    resto = number1 % number2;

    number1 = number2;
    number2 = resto;
  } while (resto !== 0);

  console.log(`${(realNumber1 * realNumber2) / number1}`);
}
mmc(12, 20);
