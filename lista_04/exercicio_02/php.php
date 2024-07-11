<?php
function swap(&$a, &$b) {
 
    printf("Valores antes da troca: A = %d, B = %d\n", $a, $b);
    
    
    $temp = $a;
    $a = $b;
    $b = $temp;
    
   
    printf("Valores após a troca: A = %d, B = %d\n", $a, $b);
}


$valor1 = 10;
$valor2 = 20;

swap($valor1, $valor2);


echo "Valores após a troca no programa principal: A = $valor1, B = $valor2\n";
?>