function greedyLocalSearch(graph, start, goal) {
    let currentNode = start;
    let path = [currentNode];
    let totalCost = 0;

    while (currentNode !== goal) {
        let neighbors = graph[currentNode] || {};
        if (Object.keys(neighbors).length === 0) {
            console.log(`No hay camino posible de ${start} a ${goal}.`);
            return { path: [], totalCost: 0 };
        }

        let minNeighbor = Object.keys(neighbors).reduce((a, b) => neighbors[a] < neighbors[b] ? a : b);
        let localCost = neighbors[minNeighbor];

        totalCost += localCost;
        currentNode = minNeighbor;
        path.push(currentNode);
    }

    if (path[path.length - 1] !== goal) {
        console.log(`No hay camino posible de ${start} a ${goal}.`);
        return { path: [], totalCost: 0 };
    }

    return { path, totalCost };
}


function greddyMethod(){
// Grafo de ejemplo en JavaScript
let graph = {
    'A': {'B': 4, 'F': 10},  // Se añade una conexión directa desde 'A' hasta 'F'
    'B': {'D': 7, 'E': 8, 'F': 1},
    'C': {'F': 4, 'E': 1},
    'D': {},
    'E': {'F': 6, 'G': 5},
    'F': {'C': 4, 'E': 6},
    'G': {}
};

// Nodo inicial y objetivo
let startNode = 'A';
let goalNode = 'F';

// Obtener el camino y el costo total utilizando greedy local search
let result = greedyLocalSearch(graph, startNode, goalNode);

// Imprimir el resultado
if (result.path.length > 0) {
    console.log(`Camino: ${result.path.join("->")}`);
    console.log(`Costo Total: ${result.totalCost}`);
}

}

module.exports = {
    greddyMethod
}


