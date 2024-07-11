<?php


function areaCirculo($raio) {
    
    $pi = 3.14159;

    
    $area = $pi * $raio * $raio;

    
    return $area;
}


function main() {
    
    $raio = 5; 

    
    $area = areaCirculo($raio);

    
    printf("A area do circulo eh %.3f", $area);
}


main();

?>