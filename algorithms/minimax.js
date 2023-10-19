let stack = [];

function minimax(graph, initialNode){
    let found = false;
    stack.unshift(initialNode);
    
    while(!found){
        const neihgbors = graph.successors(initialNode);
        console.log(neihgbors);
        for(const neighbor of neihgbors){
            const weight = graph.edge(initialNode, neighbor);
            if(weight){
                console.log(`Peso de la arista ${initialNode} -> ${neighbor}:`, weight);
            }else{
                console.log('No hay peso asignado');
                stack.unshift(neighbor);
            }
        }
        console.log(stack)
        found = true;
    }
}

module.exports = { minimax }

/*
const weightAB = graph.edge(firstNode, secondNode);
console.log(`Peso de la arista ${firstNode} -> ${secondNode}:`, weightAB);
//3 > null = true; 3 < null = false; 
console.log(3 < null)
*/
