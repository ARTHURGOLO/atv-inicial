
function areaRetangulo(base, altura) {
    
    let area = base * altura;
   
    return area;
}


function main() {
    
    let base = 5;
    let altura = 10;

    
    let resultado = areaRetangulo(base, altura);

   
    console.log(`A area do retangulo eh ${resultado.toFixed(3)}`);
}


main();