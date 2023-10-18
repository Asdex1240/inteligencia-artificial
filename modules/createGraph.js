const graphlib = require('graphlib');


function makeGraph(nodes, edges){
    const graph = new graphlib.Graph({directed: true});
    
    nodes.forEach(node => graph.setNode(node));
    edges.forEach(edge => {
        const {source, target, weight} = edge;
        graph.setEdge(source, target, weight)
    })

    return graph;
}

function gameTheoryGraph(numNodes){
    
}

module.exports = {
    makeGraph
  };