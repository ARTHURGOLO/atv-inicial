<?php

function areaQuadrado($base, $altura) {
    
    $area = $base * $altura;
    return $area;
}


$base = 5;    
$altura = 5;   


$areaDoQuadrado = areaQuadrado($base, $altura);


echo "A area do quadrado eh " . number_format($areaDoQuadrado, 3) . "\n";