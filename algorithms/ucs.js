class Node {
    constructor(state, cost, parent = null) {
        this.state = state;
        this.cost = cost;
        this.parent = parent;
    }
}

function ucs(graph, start, goal) {
    let visited = new Set();
    let priorityQueue = [];

    let startNode = new Node(start, 0);
    priorityQueue.push(startNode);

    while (priorityQueue.length > 0) {
        let currentNode = priorityQueue.shift();

        if (currentNode.state === goal) {
            let finalPath = [];
            let cost = currentNode.cost;
            while (currentNode) {
                finalPath.unshift(currentNode.state);
                currentNode = currentNode.parent;
            }
            return { path: finalPath, cost: cost };
        }

        if (!visited.has(currentNode.state)) {
            visited.add(currentNode.state);

            for (let neighbor in graph[currentNode.state]) {
                let cost = graph[currentNode.state][neighbor];
                let newCost = currentNode.cost + cost;
                let neighborNode = new Node(neighbor, newCost, currentNode);

                priorityQueue.push(neighborNode);
                priorityQueue.sort((a, b) => a.cost - b.cost);
            }
        }
    }

    return { path: null, cost: null };
}

function findShortestPath(weightedGraph, startNode, goalNode) {
    let result = ucs(weightedGraph, startNode, goalNode);

    if (result.path) {
        console.log(`\nCamino encontrado de ${startNode} a ${goalNode}: ${result.path}`);
        console.log(`Costo total: ${result.cost}`);
    } else {
        console.log(`\nNo hay camino de ${startNode} a ${goalNode}`);
    }
}

// Ejemplo de grafo ponderado en JavaScript
let weightedGraph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 5, 'D': 7, 'E': 8, 'F': 1 },
    'C': { 'A': 2, 'F': 4 },
    'D': { 'B': 7 },
    'E': { 'B': 8, 'F': 6 },
    'F': { 'C': 4, 'E': 6 }
};

// Nodo de inicio y nodo objetivo
let startNode = 'A';
let goalNode = 'F';

// Llamada a la función findShortestPath

function ucsMethod(){
    findShortestPath(weightedGraph, startNode, goalNode);
}

module.exports = {
    ucsMethod
}

