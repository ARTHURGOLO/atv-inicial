
function converteFahrenheitParaCelsius(tempFahrenheit) {
    
    let tempCelsius = (5/9) * (tempFahrenheit - 32);
    return tempCelsius;
}


function main() {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite a temperatura em Fahrenheit: ', (fahrenheit) => {
        
        let tempF = parseFloat(fahrenheit);

        
        let tempC = converteFahrenheitParaCelsius(tempF);

        
        console.log(`${tempF}F eh equivalente a ${tempC.toFixed(2)}C`);

        readline.close();
    });
}


main();