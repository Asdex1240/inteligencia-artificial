let stack = [];
let path = [];
function minimax(graph, initialNode){
    stack.push(initialNode);
    routes(graph, 'G' )
}

function routes(graph, finalNode){
    let found = false
    while(!found){
        if(stack.length > 0){
            let firstNode = stack.shift();
            path.push(`${firstNode} ->`);
            if(firstNode == finalNode){
                console.log('Nodo Encontrado');
                console.log('Ruta: ', path);
                found = true;
            }else{
                const successors = graph.successors(firstNode);
                //console.log({firstNode, stack} )
                stack = successors.concat(stack);
            }

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
