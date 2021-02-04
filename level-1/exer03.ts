/*

Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:

salário  = 1.000,00
reajuste = 15%,

*/

function readjustmentCalc(sal: number, readjustment: number):number {
  return (sal * (readjustment / 100));
}

console.log(readjustmentCalc(1000, 15));
