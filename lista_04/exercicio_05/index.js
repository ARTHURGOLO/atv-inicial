function areaQuadrado(base, altura) {
    
    var area = base * altura;
    return area;  
}


function main() {
    var base = 5;     
    var altura = 3;  

    
    var resultado = areaQuadrado(base, altura);

    
    console.log(`A area do quadrado eh ${resultado.toFixed(3)}`);
}


main();