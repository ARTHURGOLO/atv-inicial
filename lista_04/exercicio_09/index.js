function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um ano: ', (anoStr) => {
    const ano = parseInt(anoStr);

    if (isNaN(ano)) {
        console.log('Por favor, digite um ano válido.');
    } else {
        if (ehBissexto(ano)) {
            console.log(`O ano ${ano} eh bissexto`);
        } else {
            console.log(`O ano ${ano} nao eh bissexto`);
        }
    }

    readline.close();
});