let stack = [];
let path = [];
let visited = new Map();
let depth = 0;

function dfsMethod(graph, initialNode, finalNode, depthLimit){
    console.log(`Iniciamos en el nodo ${initialNode}`);
    stack.push(initialNode);
    visited.set(initialNode, depth);
    routes(graph, finalNode, depthLimit);

}

function routes(graph, finalNode, depthLimit){
    let found = false
    while(!found){
        console.log({depth, depthLimit, comparacion: depth < depthLimit})
        if(stack.length > 0 && depth < depthLimit){
            let firstNode = stack.shift();
            path.push(`${firstNode} ->`);
            if(firstNode == finalNode){
                const depthFinalNode = visited.get(finalNode)
                console.log('Nodo Encontrado');
                console.log(`Ruta: ${path}`);
                console.log('Profundidad: ', depthFinalNode)
                depth = 0;
                found = true;
            }else{
                const successors = graph.successors(firstNode);
                console.log({successors, stack});

                if(visited.has(firstNode)){
                    depth = visited.get(firstNode) + 1;
                }
                addToMap(successors, depth);
                stack = successors.concat(stack);
            }
        }else{
            console.log('Nodo no encontrado en el grafo');
            found = true;
        }
    }   
}

function addToMap(nodes, depth){
    for(const node of nodes){
        if(!visited.has(node)){
            visited.set(node, depth);
        }
    }
}

module.exports = {
    dfsMethod
}