const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("Digite uma string: ", (input) => {
    function contarLetraA(str){
        const normalizado = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        let contador = 0;
        for(let i = 0; i < normalizado.length; i++){
            if(normalizado[i] === 'a'){
                contador++
            }
        }
        return contador;
    }

    const totalA = contarLetraA(input);

    if(totalA > 0){
        console.log(`A letra 'a' aparece ${totalA} vezes na string.`)
    } else {
        console.log("A letra 'a' não foi encontrada na string.")
    }
    rl.close();
});