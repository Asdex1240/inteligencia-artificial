function minimax(graph){
    console.log(graph.edges());
}

/*
const graphlib = require("graphlib");

// Crear un nuevo grafo dirigido
const graph = new graphlib.Graph({ directed: true });

// Agregar nodos al grafo
graph.setNode("A");
graph.setNode("B");

// Agregar aristas con pesos iniciales
graph.setEdge("A", "B", 5);

// Función para actualizar el peso de una arista
function updateEdgeWeight(from, to, newWeight) {
  if (graph.hasEdge(from, to)) {
    // Obtener el peso antes de la actualización
    const oldWeight = graph.edge(from, to);
    console.log(`Antes - El peso de la arista ${from} -> ${to} es: ${oldWeight}`);

    // Actualizar el peso
    graph.setEdge(from, to, newWeight);

    // Obtener el peso después de la actualización
    const updatedWeight = graph.edge(from, to);
    console.log(`Después - El peso de la arista ${from} -> ${to} es: ${updatedWeight}`);
  } else {
    // La arista no existe, puedes manejarlo como desees
    console.log(`La arista de ${from} a ${to} no existe en el grafo.`);
  }
}

// Cambiar el peso de una arista
updateEdgeWeight("A", "B", 8);
*/

module.exports = { minimax }

