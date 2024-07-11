function areaCirculo(raio) {
    const pi = 3.14159;
    const area = pi * raio * raio;
    return area;
}


let raio = 5;
let resultado = areaCirculo(raio);

console.log(`A area do circulo eh ${resultado.toFixed(3)}`);