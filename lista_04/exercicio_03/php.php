<?php

function ehPar($numero) {
    if ($numero % 2 == 0) {
        return 1; 
    } else {
        return 0; 
    }
}


function main() { 
    $numero = readline("Digite um número inteiro: ");

    
    $resultado = ehPar($numero);

    
    if ($resultado == 1) {
        echo "O número $numero é par.\n";
    } else {
        echo "O número $numero é ímpar.\n";
    }
}


main();
?>