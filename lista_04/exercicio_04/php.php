<?php
function buscaMaiorValor($valor1, $valor2, $valor3) {
    
    $maior = $valor1;
    if ($valor2 > $maior) {
        $maior = $valor2;
    }
    if ($valor3 > $maior) {
        $maior = $valor3;
    }
    return $maior;
}


$valor1 = 10;
$valor2 = 5;
$valor3 = 8;

$maiorValor = buscaMaiorValor($valor1, $valor2, $valor3);


echo "O maior valor informado foi $maiorValor\n";
?>