const readline = require('readline');
const { makeGraph} = require('./createGraph')
const { dfsMethod } = require('../algorithms/dfs');
const { bfsMethod } = require('../algorithms/bfs');
const { minimax } = require('../algorithms/minimax');

function menu(){

    const options = message();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese el número del método: ', (selectedMethod) => {
        const method = parseInt(selectedMethod);
        if (options.includes(method)) {
            const graph = defGraph();
            console.clear();
            if(method == 1){
                dfsMethod(graph,'A','C');
            }else if(method == 2){
                bfsMethod(graph, 'A', 'D');
            }else if(method == 3){
                const gameTheoryGraph = 
                minimax(graph);
            }
        } else {
            console.log('Método no válido. Por favor, seleccione un método válido.');
        }

        rl.close();
    });
}

function message(){
    const options = [1,2,3];
    const algorithms = ['DFS','BFS','Minimax'];
    let welcomeMessage = 'Seleccione el algoritmo:  \n';
    for(let i = 0; i<algorithms.length; i++){
        let algorithm = `${i+1}. ${algorithms[i]} \n`;
        welcomeMessage = welcomeMessage + algorithm;
    } 
    console.log(welcomeMessage);
    return options;

}

function defGraph(){
    const nodes = ['A', 'B', 'C', 'D','E','F'];
    const edges = [
        { source: 'A', target: 'B',  },
        { source: 'A', target: 'C',  },
        { source: 'B', target: 'D',  },
        { source: 'B', target: 'E',  },
        { source: 'C', target: 'F',  },
        { source: 'C', target: 'G',  },
    ];
    return makeGraph(nodes, edges);
}


module.exports = {
    menu
}