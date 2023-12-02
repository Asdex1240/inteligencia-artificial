const PriorityQueue = require('priorityqueuejs');

function astarMethod(graph, startNode, endNode){
    
    
    const results = astar(graph, startNode, endNode);
    const { fDistance, cameFrom, gDistance } = results;
    printResults(fDistance, cameFrom, gDistance, endNode, startNode);
}

function astar(graph, startNode, endNode) {
  // Inicialización de distancias
  const fDistance = {};
  const gDistance = {};
  const cameFrom = {};
  const queue = new PriorityQueue((a, b) => a[0] - b[0]);

  Object.keys(graph).forEach(node => {
    fDistance[node] = Infinity;
    gDistance[node] = Infinity;
    cameFrom[node] = null;
  });

  fDistance[startNode] = 0;
  gDistance[startNode] = 0;
  queue.enq([0, startNode]);

  // Algoritmo A*
  while (!queue.isEmpty()) {
    const [currentFDistance, currentNode] = queue.deq();

    if (currentNode === endNode) {
      console.log(`Encontró el nodo final ${endNode}`);
      return { fDistance, cameFrom, gDistance };
    }

    for (const [nextNode, weights] of Object.entries(graph[currentNode])) {
      const tempGDistance = gDistance[currentNode] + weights[0];

      if (tempGDistance < gDistance[nextNode]) {
        gDistance[nextNode] = tempGDistance;
        const heuristic = weights[1];
        fDistance[nextNode] = tempGDistance + heuristic;
        cameFrom[nextNode] = currentNode;
        queue.enq([fDistance[nextNode], nextNode]);
      }
    }
  }

  return { fDistance, cameFrom, gDistance };
}

function printResults(distances, parents, gDistance, endNode, startNode) {
  const distanceToFinal = distances[endNode];
  const optimalPathToFinal = [];

  // Construye el camino óptimo al nodo final retrocediendo desde el nodo final
  let currentNode = endNode;
  while (currentNode !== startNode) {
    optimalPathToFinal.push(currentNode);
    currentNode = parents[currentNode];
  }
  optimalPathToFinal.push(startNode);
  optimalPathToFinal.reverse();

  // Imprime la distancia, el camino óptimo y el valor total del camino
  console.log(`Distancia a '${endNode}': ${distanceToFinal}`);
  console.log(`Camino óptimo a '${endNode}': ${optimalPathToFinal}`);
  // console.log(`Valor total del camino a '${endNode}': ${gDistance[endNode]}`);
}

module.exports = {
    astarMethod
}