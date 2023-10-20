let stack = [];
let path = [];
let visited = new Map();
let depth = 0;

function dfsMethod(graph, initialNode, finalNode){
    console.log(`Iniciamos en el nodo ${initialNode}`);
    stack.push(initialNode);
    visited.set(initialNode, depth);
    routes(graph, finalNode);

}

function routes(graph, finalNode){
    let found = false
    while(!found){
        if(stack.length > 0){
            let selectedNode = stack.shift();
            path.push(`${selectedNode} ->`);
            if(selectedNode == finalNode){
                const depthFinalNode = visited.get(finalNode)
                console.log('Nodo Encontrado');
                console.log(`Ruta: ${path}`);
                console.log('Profundidad: ', depthFinalNode)
                depth = 0;
                found = true;
            }else{
                const successors = graph.successors(selectedNode);
                console.log({successors, stack});

                if(visited.has(selectedNode)){
                    depth = visited.get(selectedNode) + 1;
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
