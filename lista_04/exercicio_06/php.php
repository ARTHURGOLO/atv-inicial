<?php


function areaRetangulo($base, $altura) {
    
    $area = ($base * $altura) / 2;
    return $area;
}


$base = 10; 
$altura = 5; 


$areaCalculada = areaRetangulo($base, $altura);


echo sprintf("A area do retangulo eh %.3f", $areaCalculada);