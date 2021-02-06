/*

Seu objetivo é construir uma classe denominada
Area que calcule tanto a área quadrada (primeiro método) como a área cúbica (segundo método).

Utilize programação orientada a objetos.

*/

class Area {
  constructor(public lado: number) {}

  quadrada(): number {
    return this.lado * this.lado;
  }

  cubica(): number {
    return this.lado * this.lado * this.lado;
  }
}

const area = new Area(10);
console.log(area.quadrada(), area.cubica());
