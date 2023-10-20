const { makeGraph, gameTheoryGraph} = require('./createGraph')

function defineGraph(type){
    let graph;
    if(type == 'withoutWeigth'){
        graph = defGraph();
    }else if(type == 'withWeigth'){
        graph = defGraphWeigth()
    }
    return graph;
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

function defGraphWeigth(){
    const nodes = ['A', 'B', 'C', 'D','E','F'];
    const edges = [
        { source: 'A', target: 'B',  weigth: null },
        { source: 'A', target: 'C',  weigth: null },
        { source: 'B', target: 'D',  weigth: 3 },
        { source: 'B', target: 'E',  weigth: 4 },
        { source: 'C', target: 'F',  weigth: 5 },
        { source: 'C', target: 'G',  weigth: 6 },
    ];
    return gameTheoryGraph(nodes, edges);
}

module.exports = {
    defineGraph
}