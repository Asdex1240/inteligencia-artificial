let stack = [];
let path = [];

function dfsMethod(graph, initialNode, finalNode){
    console.log(`Iniciamos en el nodo ${initialNode} hasta ${finalNode}`);
    stack.push(initialNode);
    routes(graph, finalNode);

}

function routes(graph, finalNode){
    let found = false
    while(!found){
        if(stack.length > 0){
            let selectedNode = stack.shift();
            path.push(`${selectedNode} ->`);
            if(selectedNode == finalNode){
                console.log('Nodo Encontrado');
                console.log(`Ruta: ${path}`);
                found = true;
            }else{
                const successors = graph.successors(selectedNode);
                stack = successors.concat(stack);
                console.log({selectedNode, successors, stack});
            }
        }else{
            console.log('Nodo no encontrado en el grafo');
            found = true;
        }
    }   
}

module.exports = {
    dfsMethod
}
