
function somaDoisValores(num1, num2) {
    return num1 + num2;
}


let readlineSync = require('readline-sync');

let num1 = parseInt(readlineSync.question('Digite o primeiro número inteiro: '));
let num2 = parseInt(readlineSync.question('Digite o segundo número inteiro: '));


let resultado = somaDoisValores(num1, num2);


console.log(`A soma de ${num1} e ${num2} eh ${resultado}\n`);