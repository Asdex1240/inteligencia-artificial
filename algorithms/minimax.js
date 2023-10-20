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
            stack = successors.concat(stack);
        }else{
            console.log('Recorrido terminado');
            found = true;
        }
    }
    console.log(`Ruta: ${path}`);
    console.log(`Profundidad: ${depth}`); 
}

function addToMap(nodes, depth){
    for(const node of nodes){
        if(!visited.has(node)){
            visited.set(node, depth);
        }
    }
}

module.exports = { minimax }

/*
const weightAB = graph.edge(firstNode, secondNode);
console.log(`Peso de la arista ${firstNode} -> ${secondNode}:`, weightAB);
//3 > null = true; 3 < null = false; 
console.log(3 < null)

           const weight = graph.edge(initialNode, neighbor);
            if(weight){
                console.log(`Peso de la arista ${initialNode} -> ${neighbor}:`, weight);
            }else{
                console.log('No hay peso asignado');
                stack.unshift(neighbor);
*/