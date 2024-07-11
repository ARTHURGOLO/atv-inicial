
function swap(a, b) {
    console.log(`Valores antes da troca: A = ${a}, B = ${b}`);

    
    let temp = a;
    a = b;
    b = temp;

    console.log(`Valores apos a troca: A = ${a}, B = ${b}`);
}


let numero1 = 5;
let numero2 = 10;

swap(numero1, numero2);