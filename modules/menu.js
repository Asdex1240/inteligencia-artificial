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
            const graph = defineGraph('withoutWeigth');
            console.clear();
            if(method == 1){
                dfsMethod(graph,'A','I');
            }else if(method == 2){
                bfsMethod(graph, 'A', 'I');
            }else if(method == 3){
                minimaxMethod(defineGraph('withWeigth'));
            }else if(method == 4){
                alphaBetaMethod(defineGraph('withWeigth'))
            }
        } else {
            console.log('Método no válido. Por favor, seleccione un método válido.');
        }

        rl.close();
    });
}

function message(){
    const options = [1,2,3,4];
    const algorithms = ['DFS','BFS','Minimax', 'Alpha Beta', 'A*'];
    let welcomeMessage = 'Seleccione el algoritmo:  \n';
    for(let i = 0; i<algorithms.length; i++){
        let algorithm = `${i+1}. ${algorithms[i]} \n`;
        welcomeMessage = welcomeMessage + algorithm;
    } 
    console.log(welcomeMessage);
    return options;

}

module.exports = {
    menu
}