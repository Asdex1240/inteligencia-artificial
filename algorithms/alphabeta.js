function alphaBetaMethod(node, depth){

    const alpha = -Infinity
    const beta = Infinity;
    
    const bestValue = alphaBeta(node, depth, alpha, beta, true);
    console.log("Mejor valor encontrado: " + bestValue);
}

function alphaBeta(node, depth, alpha, beta, maximizingPlayer) {
    if (depth === 0 || node.children.length === 0) {
      return node.value;
    }
  
    if (maximizingPlayer) {
      let value = -Infinity;
      for (const child of node.children) {
        console.log("Maximizando")
        value = Math.max(value, alphaBeta(child, depth - 1, alpha, beta, false));
        alpha = Math.max(alpha, value);
        console.log({value, alpha})
        if (alpha >= beta) {
            console.log("Poda de beta")
          break; // Poda beta
        }
      }
      return value;
    } else {
      let value = Infinity;
      for (const child of node.children) {
        console.log("Minimizando")
        value = Math.min(value, alphaBeta(child, depth - 1, alpha, beta, true));
        beta = Math.min(beta, value);
        console.log({value, beta})
        if (alpha >= beta) {
            console.log("Realizamos poda de alfa")
          break; // Poda alfa
        }
      }
      return value;
    }
  }

module.exports = { alphaBetaMethod }

  
  
  
  