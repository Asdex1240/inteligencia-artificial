let stack = [];
let path = [];
let visited = {};

function minimax(graph, initialNode){
    stack.push(initialNode);
    routes(graph)
}

function routes(graph, finalNode){
    let found = false
    while(!found){
        if(stack.length > 0){
            let firstNode = stack.shift();
            path.push(`${firstNode} ->`);
            const successors = graph.successors(firstNode);
            stack = successors.concat(stack);

        }else{
            console.log('Nodo no encontrado en el grafo');
            found = true;
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