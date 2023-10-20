let stack = [];
let path = [];
let visited = {};

function dfsMethod(graph, initialNode, finalNode){
    console.log(`Iniciamos en el nodo ${initialNode}`);
    stack.push(initialNode);
    visited[initialNode] = 0;
    console.log(visited)
    routes(graph, finalNode);
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
                console.log(`Profundidad del nodo ${finalNode}:`, visited[finalNode]);
                found = true;
            }else{
                const successors = graph.successors(firstNode);
                successors.forEach(successor => {
                    if (!visited[successor]) {
                        stack.push(successor);
                        visited[successor] = visited[firstNode] + 1;
                        console.log({visited})
                    }
                })  
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


/*
// Crear un nuevo grafo dirigido
const graph = new graphlib.Graph({ directed: true });

// Agregar nodos al grafo
graph.setNode('A');
graph.setNode('B');
graph.setNode('C');
graph.setNode('D');

// Agregar aristas (enlaces) con pesos al grafo
graph.setEdge('A', 'B', 5); // Arista de A a B con peso 5
graph.setEdge('B', 'C', 3); // Arista de B a C con peso 3
graph.setEdge('C', 'D', 2); // Arista de C a D con peso 2
graph.setEdge('D', 'A', 1); // Arista de D a A con peso 1

// Obtener el peso de una arista
const weightAB = graph.edge('A', 'B');
console.log('Peso de la arista A -> B:', weightAB);

const graphs = graph.edges();

graphs.forEach((e) => {
    const weigth = graph.edge(e.v, e.w);
    const message = `El peso de ${e.v} hacia ${e.w} es de: ${weigth}`;
    console.log(message)
});

*/