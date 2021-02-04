/*

Escreva uma função para cada uma das quatro operações matemáticas simples:

adição,
subtração,
multiplicação e
dividisão

*/

function addition(number1: number, number2: number):number {
    return number1 + number2;
}

function subtraction(number1: number, number2: number):number {
    return number1 - number2;
}

function multiplication(number1: number, number2: number):number {
    return number1 * number2;
}

function division(number1: number, number2: number):number {
    return number1 / number2;
}

console.log("addition: ", addition(10,2));
console.log("subtraction: ", subtraction(10,2));
console.log("multiplication: ", multiplication(10,2));
console.log("division: ", division(10,2));

