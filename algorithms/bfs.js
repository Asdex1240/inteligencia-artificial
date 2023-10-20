let path = [];

function bfsMethod(graph, initialNode, finalNode){
    console.log(`Iniciamos en el nodo ${initialNode}`);
    let queues = [initialNode]; 
    routes(graph, queues, finalNode)
}

function routes(graph, queues, finalNode){
    let found = false
    while(!found){
        if(queues.length > 0 ){
            let firstNode = queues.shift();
            path.push(`${firstNode} ->`);
            if(firstNode !== finalNode){
                sucessors = graph.successors(firstNode)
                queues = queues.concat(sucessors)
                console.log({sucessors, queues})
                //console.log(`Nodo Actual: ${firstNode}, nodo a encontrar: ${finalNode}`);
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