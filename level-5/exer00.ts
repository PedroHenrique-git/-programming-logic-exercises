/*

Seu objetivo é fazer uma classe denominada Calc com um método que retorne o dobro de um número.

*/

class Calc {
  constructor(public number: number) {}

  double(): number {
    return this.number * 2;
  }
}

const calc = new Calc(2);
console.log(calc.double());
