const readline = require('readline');
const { dfsMethod } = require('../algorithms/dfs');
const { bfsMethod } = require('../algorithms/bfs');
const { defineGraph } = require('../modules/defineGraph')
const { minimaxMethod } = require('../algorithms/minimax');
const { alphaBetaMethod } = require('../algorithms/alphabeta')

function menu(){

    const options = message();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese el número del método: ', (selectedMethod) => {
        const method = parseInt(selectedMethod);
        if (options.includes(method)) {
            console.clear();
            methods(method)
        } else {
            console.log('Método no válido. Por favor, seleccione un método válido.');
        }

        rl.close();
    });
}

function message(){
    const options = [1,2,3,4,5];
    const algorithms = ['DFS','BFS','Minimax', 'Alpha Beta', 'A*'];
    let welcomeMessage = 'Seleccione el algoritmo:  \n';
    for(let i = 0; i<algorithms.length; i++){
        let algorithm = `${i+1}. ${algorithms[i]} \n`;
        welcomeMessage = welcomeMessage + algorithm;
    } 
    console.log(welcomeMessage);
    return options;

}

function methods(method){
    const graphWithout = defineGraph('withoutWeigth');
    const graphWith = defineGraph('withWeigth');
    switch (method) {
        case 1:
            dfsMethod(graphWithout,'A','I');
            break;
        case 2:
            bfsMethod(graphWithout,'A','I');
            break;
        case 3:
            minimaxMethod(graphWith)
            break;
        case 4:
            alphaBetaMethod(graphWith)
            break;
        default:
            break;
    }
}

module.exports = {
    menu
}