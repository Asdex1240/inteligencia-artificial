function minimax(graph){
    const firstNode = 'A';
    const secondNode = 'B';
    if(graph.hasEdge(firstNode, secondNode)){
        const weightAB = graph.edge(firstNode, secondNode);
        console.log(`Peso de la arista ${firstNode} -> ${secondNode}:`, weightAB);
        //3 > null = true; 3 < null = false; 
        console.log(3 < null)
    }else{
        console.log('No están unidos :(')
    }
}

module.exports = { minimax }

