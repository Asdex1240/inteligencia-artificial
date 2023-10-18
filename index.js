const { makeGraph } = require('./modules/createGraph');
const { dfsMethod } = require('./algorithms/dfs')
const readline = require('readline');

function menu(){
    const options = [1,2,3,4];
    const algorithms = ['DFS','BFS','A*','Minimax'];
    let welcomeMessage = 'Seleccione el algoritmo:  \n';
    for(let i = 0; i<algorithms.length; i++){
        let algorithm = `${i+1}. ${algorithms[i]} \n`;
        welcomeMessage = welcomeMessage + algorithm;
    } 
    console.log(welcomeMessage);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese el número del método: ', (selectedMethod) => {
        const method = parseInt(selectedMethod);
        if (options.includes(method)) {
            if(method == 1){
                const graph = defGraph();
                dfsMethod(graph,'A','C');
            }
        } else {
            console.log('Método no válido. Por favor, seleccione un método válido.');
        }

        rl.close();
    });
}

function main(){
    menu();
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

main();