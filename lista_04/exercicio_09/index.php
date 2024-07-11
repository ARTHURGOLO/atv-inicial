<?php


function ehBissexto($ano) {
    if (($ano % 4 == 0 && $ano % 100 != 0) || $ano % 400 == 0) {
        return 1; 
    } else {
        return 0; 
    }
}


if (isset($_GET['ano'])) {
    $ano = $_GET['ano'];
    
   
    if (is_numeric($ano)) {
        
        $resultado = ehBissexto($ano);
        
        
        if ($resultado == 1) {
            echo "O ano $ano eh bissexto";
        } else {
            echo "O ano $ano nao eh bissexto";
        }
    } else {
        echo "Ano informado nao eh valido.";
    }
} else {
    echo "Informe um ano na URL usando o parâmetro 'ano'. Exemplo: ?ano=2024";
}

?>