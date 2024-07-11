// Definindo a função buscaMaiorValor que recebe três parâmetros
function buscaMaiorValor(valor1, valor2, valor3) {

   
    if (valor2 > maior) {
        maior = valor2;
    }
    
    if (valor3 > maior) {
        maior = valor3;
    }
    
    return maior;
}


function lerValorInteiro(mensagem) {
    
    while (true) {
        let input = prompt(mensagem);
        let numero = parseInt(input);
        
        
        if (!isNaN(numero)) {
            return numero;
        } else {
            alert("Por favor, informe um valor inteiro válido.");
        }
    }
}

let valor1 = lerValorInteiro("Informe o primeiro valor inteiro:");
let valor2 = lerValorInteiro("Informe o segundo valor inteiro:");
let valor3 = lerValorInteiro("Informe o terceiro valor inteiro:");

let maiorValor = buscaMaiorValor(valor1, valor2, valor3);

console.log(`O maior valor informado foi ${maiorValor}`);