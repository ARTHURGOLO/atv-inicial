
function ehPar(numero) {
    if (numero % 2 === 0) {
        return 1; 
    } else {
        return 0; 
    }
}


function verificarParOuImpar() {
    
    let numero = parseInt(prompt("Digite um número inteiro:"));

    
    let resultado = ehPar(numero);

    
    if (resultado === 1) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}


verificarParOuImpar();