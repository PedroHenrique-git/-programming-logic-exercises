/*

Crie duas funções para conversão de temperaturas.

Uma converterá celsius em fahrenheit e a outra fará o inverso.

Saiba que 100c é igual a 212f, veja fórmula:

   C          F - 32
-------  =  ---------
   5            9

*/

function celsiusToFahrenheit(temp: number):number {
  return ((9 * temp) / 5) + 32;
}

console.log('Fahrenheit: ', celsiusToFahrenheit(100));

function FahrenheitToCelsius(temp: number):number {
  return 1.8 * temp + 32;
}

console.log('Celsius: ', FahrenheitToCelsius(212));
