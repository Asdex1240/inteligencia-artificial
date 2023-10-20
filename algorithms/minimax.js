let stack = [];
let path = [];
let visited = new Map();
let depth = 0;

function minimax(graph, initialNode){
    
    stack.push(initialNode);
    visited.set(initialNode, depth);
    routes(graph);
}

function routes(graph){
    let found = false
    while(!found){
        if(stack.length > 0){
            let selectedNode = stack.shift();
            path.push(`${selectedNode} ->`);

            const successors = graph.successors(selectedNode);

            if(visited.has(selectedNode)){
                depth = visited.get(selectedNode) + 1;
            }
            addToMap(successors, depth);

            const weight = checkWeight(graph, selectedNode, successors);
            if(weight){
                console.log(`Hay peso en ${selectedNode} y ${successors}`);
                const bestChoice = visited.get(selectedNode) % 2;
                if(bestChoice == 0){
                    console.log('Aplicar Max')
                }else{
                    console.log('Aplicar Min')
                }
                found = true
            }

            stack = successors.concat(stack);
        }else{
            console.log('Recorrido terminado');
            found = true;
        }
    }
    console.log(`Ruta: ${path}`);
    console.log(`Profundidad: ${depth - 1}`); 
}

function checkWeight(graph, selectedNode, successors){

    if(successors.length == 0){
        return false;
    }
    for(const successor of successors){
        const weight = graph.edge(selectedNode, successor)
        if(!weight || successors.length == 0){
            return false;
        }
    }
    return true;
}

function addToMap(nodes, depth){
    for(const node of nodes){
        if(!visited.has(node)){
            visited.set(node, depth);
        }
    }
}

module.exports = { minimax }
