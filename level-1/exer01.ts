/*

O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:

custo final = custo de fábrica +
              (custo de fábrica * percentual do distribuidor) +
              (custo de fábrica * percentual de impostos)

Considerando os valores abaixo, faça um programa para calcular o custo de fabricação.

Custo de fábrica = 10.000,00
Percentual do distribuidor = 28%
Percentual dos Impostos  = 45%

*/

function calculatesManufacturingCost(cost: number, percentage1: number, percentage2: number):number {
    const p1 = percentage1/100;
    const p2 = percentage2/100;

    return cost + (cost * p1) + (cost * p2);
}

console.log(calculatesManufacturingCost(10000,28,45));