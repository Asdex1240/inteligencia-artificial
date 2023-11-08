
function minimax(node, depth, maximizingPlayer) {
  if (depth === 0 || node.children.length === 0) {
    return node.value;
  }

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    for (const child of node.children) {
      console.log("Maximizar")
      console.log({maxEval, comparar: child.value});
      const eval = minimax(child, depth - 1, false);
      maxEval = Math.max(maxEval, eval);
      console.log({maxEval})
    }
    return maxEval;
    } else {
      let minEval = Infinity;
      for (const child of node.children) {
        console.log("Minimizar:")
        console.log({minEval, comparar: child.value})
        const eval = minimax(child, depth - 1, true);
        minEval = Math.min(minEval, eval);
        console.log({minEval})
      }
      return minEval;
    }
  }
  
  module.exports = {
    minimax
  }