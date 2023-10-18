let path = [];

function bfsMethod(graph, initialNode, finalNode){
    let stack = [initialNode]; 
    routes(graph, stack, finalNode)
}

function routes(graph, stack, finalNode){
    let found = false
    while(!found){
        if(stack.length > 0 ){
            let firstNode = stack.shift();
            path.push(`${firstNode} ->`);
            if(firstNode !== finalNode){
                sucessors = graph.successors(firstNode)
                stack = stack.concat(sucessors)
                console.log(`Nodo Actual: ${firstNode}, nodo a encontrar: ${finalNode}`);
            }else{
                console.log('Nodo Encontrado');
                console.log('Ruta: ', path);
                found = true
            }

        }else{
            console.log('No existe este nodo en el grafo');
            found = true;
        }
  
    }
}
module.exports = {
    bfsMethod
}