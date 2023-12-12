class Node {
    constructor(state, heuristic) {
        this.state = state;
        this.heuristic = heuristic;
    }
}

function localBeamSearch(graph, start, goal, beamWidth, maxIterations) {
    let currentStates = [new Node(start, heuristic(graph, start, goal))];
    
    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let nextStates = [];
        
        for (let state of currentStates) {
            if (state.state === goal) {
                console.log(`¡Objetivo alcanzado! Estado actual: ${state.state}`);
                return;
            }

            let successors = graph[state.state] || {};
            let possibleStates = Object.keys(successors);

            for (let nextState of possibleStates) {
                let heuristicValue = heuristic(graph, nextState, goal);
                let nextStateNode = new Node(nextState, heuristicValue);
                nextStates.push(nextStateNode);
            }
        }

        nextStates.sort((a, b) => a.heuristic - b.heuristic);
        currentStates = nextStates.slice(0, beamWidth);
        console.log(`Iteración ${iteration + 1}: ${currentStates.map(node => node.state)}`);
    }

    console.log("Alcanzado el número máximo de iteraciones sin llegar al objetivo.");
}

function heuristic(graph, current, goal) {
    if (!graph[current] || !graph[goal]) {
        return Infinity;
    }
    return graph[current][goal] || Infinity;
}

// Grafo proporcionado
let graph = {
    'A': { 'B': 3, 'C': 5 },
    'B': { 'A': 2, 'D': 4, 'E': 7, 'F': 2 },
    'C': { 'A': 6, 'F': 3 },
    'D': { 'B': 8 },
    'E': { 'B': 5, 'F': 6 },
    'F': { 'C': 4, 'E': 1, 'G': 4 },
    'G': {}
};

// Parámetros
let startState = 'A';
let goalState = 'G';
let beamWidth = 3;
let maxIterations = 5;

// Ejecutar Búsqueda Local en Haz

function localBeamMethod(){
    localBeamSearch(graph, startState, goalState, beamWidth, maxIterations);

}

module.exports = {
    localBeamMethod
}