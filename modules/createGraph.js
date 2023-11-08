const graphlib = require('graphlib');


class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function makeGraph(nodes, edges){
    const graph = new graphlib.Graph({directed: true});
    
    nodes.forEach(node => graph.setNode(node));
    edges.forEach(edge => {
        const {source, target, weight} = edge;
        graph.setEdge(source, target, weight)
    })

    return graph;
}

function createGraph(rootValue, adjacencyList, nodeValues) {
  const nodeMap = new Map();

  function buildNode(value) {
    if (nodeMap.has(value)) {
      return nodeMap.get(value);
    }

    const node = new Node(value);
    nodeMap.set(value, node);

    if (adjacencyList[value]) {
      for (const childValue of adjacencyList[value]) {
        const childNode = buildNode(childValue);
        node.children.push(childNode);
      }
    }

    if (nodeValues[value] !== undefined) {
      node.value = nodeValues[value];
    }

    return node;
  }

  return buildNode(rootValue);
}

module.exports = {
    makeGraph, createGraph
};