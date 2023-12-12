const readline = require('readline');
const { dfsMethod } = require('../algorithms/dfs');
const { bfsMethod } = require('../algorithms/bfs');
const { defineGraph, astartGraph } = require('../modules/defineGraph')
const { minimaxMethod } = require('../algorithms/minimax');
const { alphaBetaMethod } = require('../algorithms/alphabeta')
const { idsMethod } = require('../algorithms/ids')
const { astarMethod } = require('../algorithms/astar')
const { ucsMethod } = require('../algorithms/ucs')
const {localBeamMethod } = require('../algorithms/localbeamsearch')
const { greddyMethod } = require('../algorithms/greddy')
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
    const options = [1,2,3,4,5,6,7,8,9,10];
    const algorithms = ['DFS','BFS','Minimax', 'Alpha Beta', 'DFS limitado', 'IDS', 'A*', 'UCS', 'Local Beam Search', 'Greddy'];
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
            dfsMethod(graphWithout,'A','I', Infinity);
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
        case 5: 
            dfsMethod(graphWithout, 'A', 'I', 5)
            break;
        case 6:
            idsMethod(graphWithout, 'A', 'I')
            break;
        
        case 7: 
            astarMethod(astartGraph(), 'S', 'G3')
            break;
        
        case 8:
            ucsMethod()
            break;

        case 9:
            localBeamMethod()
            break;
        
        case 10:
            greddyMethod()
            break;

        default:
            console.log('No está dentro de la lista');
            break;
    }
}

module.exports = {
    menu
}