const { makeGraph} = require('./createGraph')

class Node {
    constructor(value, children = []) {
      this.value = value;
      this.children = children;
    }
}

function defineGraph(type){
    let graph;
    if(type == 'withoutWeigth'){
        graph = defGraph();
    }else if(type == 'withWeigth'){
        graph = defGraphWeigth()
    }
    return graph;
}

function defGraphWeigth(){
    const nodeA = new Node("A");
    const nodeB = new Node("B");
    const nodeC = new Node("C");
    const nodeD = new Node("D");
    const nodeE = new Node("E")
    //const nodeC = new Node("C", [new Node(1), new Node(9)]);
    nodeA.children = [nodeB, nodeC];
    nodeB.children = [nodeD, nodeE]
    nodeC.children = [new Node(1), new Node(9)]
    nodeD.children = [new Node(5), new Node(3)]
    nodeE.children = [new Node(2), new Node(4)]
    return nodeA
}

function findDepth(node) {
    if (node.children.length === 0) {
      return 1; // Si el nodo no tiene hijos, su profundidad es 1.
    }
  
    let maxChildDepth = 0;
  
    for (const child of node.children) {
      const childDepth = findDepth(child);
      maxChildDepth = Math.max(maxChildDepth, childDepth);
    }
  
    return 1 + maxChildDepth;
  }

function defGraph(){
    const nodes = ['A', 'B', 'C', 'D','E','F'];
    const edges = [
        { source: 'A', target: 'B',  },
        { source: 'A', target: 'C',  },
        { source: 'B', target: 'D',  },
        { source: 'B', target: 'E',  },
        { source: 'C', target: 'F',  },
        { source: 'C', target: 'G',  },
        { source: 'F', target: 'H',  },
        { source: 'F', target: 'I',  },


    ];
    return makeGraph(nodes, edges);
}

function astartGraph(){
    // Definición del grafo [G,H]
    return {
    'S': {'A': [5, 7], 'B': [9, 3], 'D': [6, 6]},
    'A': {'B': [3, 3], 'G1': [9, 0]},
    'B': {'A': [2, 7], 'C': [1, 4]},
    'C': {'S': [6, 4], 'G2': [5, 0], 'F': [7, 6]},
    'D': {'S': [1, 5], 'C': [2, 4], 'E': [2, 5]},
    'E': {'G3': [7, 0]},
    'F': {'G3': [8, 0]},
    'G1': {},
    'G2': {},
    'G3': {}
  };
}

module.exports = {
    defineGraph, findDepth, astartGraph
}