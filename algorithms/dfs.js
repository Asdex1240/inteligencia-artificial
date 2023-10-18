let path = []

function dfsMethod(graph, initialNode, finalNode){
    console.log(`Iniciamos en el nodo ${initialNode}`);
    routes(initialNode, graph, finalNode);
}

function routes(node, graph, finalNode){
    console.log(`Nodo actual: ${node}, nodo a encontrar: ${finalNode}`);
    if(node == finalNode){
        path.push(node)
        console.log('Nodo encontrado');
        console.log('Ruta: ',path);
        return 0;
    }else{
        path.push(`${node}->`)
        const neihgbors = graph.successors(node);
        if(neihgbors.length > 0){
            console.log(`Sucesores de ${node}: ${neihgbors}`);
            for(const neighbor of neihgbors){
                const result = routes(neighbor, graph, finalNode);
                if(result == 0){
                    return 0;
                }
            }
        }else{
            console.log(`${node} no tiene sucesores, volvemos a nodo padre de ${node}`);
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