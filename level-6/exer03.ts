/*

conversor de numeros romanos para decimais

*/

const romano = 'XCIX';
const romanos: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let decimal = 0;
for (let i = 0; i < romano.length; i += 1) {
  if (romanos[romano[i]] < romanos[romano[i + 1]]) {
    decimal -= romanos[romano[i]];
  } else {
    decimal += romanos[romano[i]];
  }
}

console.log('Resultado: ', decimal);
