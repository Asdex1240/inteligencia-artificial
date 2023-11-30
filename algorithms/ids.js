function idsMethod(graph, initialNode, finalNode) {
    console.log('Estás en el IDS');   
    const result = depthLimitedSearch(graph, initialNode, finalNode);
    if (result.found) {
        console.log('Nodo encontrado');
        console.log('Ruta:', result.path.join(' -> '));
        return;
    }
    console.log('Nodo no encontrado.');
  }
  
  function depthLimitedSearch(graph, currentNode, finalNode) {
    let explored = [];
    let frontier = [{ node: currentNode, path: [currentNode] }];
  
    while (frontier.length > 0) {
      const { node, path } = frontier.pop();
  
      if (!explored.includes(node)) {
        explored.push(node);
  
        if (node === finalNode) {
          return { found: true, path };
        }
  
        
          const successors = graph.successors(node) || [];
          const newPaths = successors.map(s => ({ node: s, path: path.concat(s) }));
          frontier = frontier.concat(newPaths.filter(({ node }) => !explored.includes(node)));
  
          // Agregar impresiones para mostrar el estado en cada iteración
          console.log('Explored:', explored);
          console.log('Frontier:', frontier.map(({ node }) => node));
          
        
      }
    }
    return { found: false };
  }
  


module.exports = {
    idsMethod
}