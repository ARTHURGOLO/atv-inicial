<?php

function converteFahrenheitParaCelsius($fahrenheit) {
    $celsius = (5/9) * ($fahrenheit - 32);
    return $celsius;
}


if (isset($_GET['fahrenheit'])) {
    
    $fahrenheit = $_GET['fahrenheit'];

    
    $celsius = converteFahrenheitParaCelsius($fahrenheit);

   
    echo "{$fahrenheit}F eh equivalente a {$celsius}C";
} else {
 
    echo "Por favor, forneça um valor em Fahrenheit via parâmetro 'fahrenheit'.";
}
?>