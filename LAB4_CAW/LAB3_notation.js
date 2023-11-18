function mean(scores) {
  let sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

module.exports = mean;
