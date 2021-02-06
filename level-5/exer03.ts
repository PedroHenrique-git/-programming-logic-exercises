/*

Faça um programa para calcular o juros simples segundo a fórmula abaixo.

J = C.i.n

*/

class Juros {
  constructor(public C:number, public i: number, public n: number) {}

  calcJuros():number {
    return this.C * (this.i / 100) * this.n;
  }
}

const j = new Juros(16000, 4, 4);
console.log(j.calcJuros());
