/*

Dados 3 valores quaisquer (a, b e c)
representando as medidas dos lados de um triângulo,
faça um algoritmo para descobrir se formam ou não um triângulo.

Saiba que para formar um
triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

‘a’, ‘b’, e ‘c’ devem formam um triângulo, a função retorna true
se as medidas não formam um triângulo, a função retorna false
Utilize programação orientada a objetos.

*/

class Triangulo {
  constructor(public a: number, public b: number, public c:number) {}

  isTriangulo():boolean {
    if (
      this.a < (this.b + this.c)
        && this.b < (this.a + this.c)
        && this.c < (this.b + this.a)
    ) return true;
    return false;
  }
}
const tr = new Triangulo(3, 4, 5);
console.log(tr.isTriangulo());
