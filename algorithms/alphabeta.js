const { findDepth } = require('../modules/defineGraph')

function alphaBetaMethod(node) {
  const alpha = -Infinity;
  const beta = Infinity;
  const depth = findDepth(node)
  const bestValue = alphaBeta(node, depth, alpha, beta, true, alpha, beta);
  console.log("Mejor valor encontrado: " + bestValue);
}

function alphaBeta(node, depth, alpha, beta, maximizingPlayer, alphaOriginal, betaOriginal) {
  if (depth === 0 || node.children.length === 0) {
      console.log({nodoHoja: node.value});
      return node.value;
  }

  if (maximizingPlayer) {
      let value = -Infinity;
      for (const child of node.children) {
          console.log("Maximizando");
          value = Math.max(value, alphaBeta(child, depth - 1, alpha, beta, false, alphaOriginal, betaOriginal));
          alpha = Math.max(alpha, value);
          console.log({alpha, beta});
          if (alpha >= beta) {
              console.log("Poda beta: ", beta);
              break; // Poda beta
          }
      }
      return value;
  } else {
      let value = Infinity;
      for (const child of node.children) {
          console.log("Minimizando");
          value = Math.min(value, alphaBeta(child, depth - 1, alpha, beta, true, alphaOriginal, betaOriginal));
          beta = Math.min(beta, value);
          console.log({alpha, beta});
          if (alpha >= beta) {
              console.log("Poda alfa: ", alpha);
              break; // Poda alfa
          }
      }
      return value;
  }
}

module.exports = { alphaBetaMethod }
