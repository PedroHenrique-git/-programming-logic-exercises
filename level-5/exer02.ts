/*

Seu objetivo é construir uma classe denominada Calc com duas funções.

A primeira função mostrará o antecessor de um número qualquer.

A segunda função mostrará o sucessor de um número qualquer.

*/

export class Calc {
  constructor(public number: number) {}

  successor():number { return this.number + 1; }

  predecessor():number { return this.number - 1; }
}

const calc = new Calc(10);
console.log(calc.successor(), calc.predecessor());
