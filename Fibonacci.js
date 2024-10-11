const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = 0;
let b = 1;

let fibonacchiNumbers = [a];

for (let i = 1; i < 20; i++) {
    fibonacchiNumbers.push(b);
    let next = a + b;
    a = b;
    b = next;
}

rl.question("Digite um número para verificar se está na sequência: ", function(input) {
    let numero = parseInt(input);

    if (fibonacchiNumbers.includes(numero)){
        console.log("Sequência de Fibonacci: " + fibonacchiNumbers.join(' '));
        console.log("O número " + numero + " está incluído na sequência!!");
    } else {
        console.log("Sequência de Fibonacci: " + fibonacchiNumbers.join(' '));
        console.log("O número " + numero + " não está incluído na sequência.");
    }

    rl.close();
});
