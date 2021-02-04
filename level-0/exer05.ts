/*

Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.

*/

function totalDays(months: number):string {
    return `${months * 30} days`;
}

console.log(totalDays(7));