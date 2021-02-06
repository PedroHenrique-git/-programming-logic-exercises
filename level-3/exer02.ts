/*

Faça um programa para calcular o MDC (máximo divisor comum) entre dois números.

Aconselho a utilizar o método de divisões sucessivas, pois você verá que a forma como costumamos
resolver problemas matemáticos na mão nem sempre é o melhor caminho quando estamos codificando.

*/

function mdc(number1: number, number2:number): void {
  let resto = 0;
  do {
    resto = number1 % number2;

    number1 = number2;
    number2 = resto;
  } while (resto !== 0);
  console.log(number1);
}
mdc(20, 24);
