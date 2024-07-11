<?php
function somaDoisValores($num1, $num2) {
    return $num1 + $num2;
}


if (isset($_GET['num1']) && isset($_GET['num2'])) {
    
    $numero1 = $_GET['num1'];
    $numero2 = $_GET['num2'];
    
    
    $resultado = somaDoisValores($numero1, $numero2);

    
    echo "A soma de $numero1 e $numero2 eh $resultado\n";
} else {
   
    echo "Parâmetros 'num1' e 'num2' não foram fornecidos corretamente.\n";
}
?>