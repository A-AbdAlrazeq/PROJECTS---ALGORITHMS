// Recursive Sigma
function rSigma(num) {
  num = parseInt(num);
  if (num > 0) {
    return num + rSigma(num - 1);
  }
  return 0;
}

console.log(rSigma(2.5));

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFact(num) {
  num = parseInt(num);
  if (num > 1) {
    return rFact(num - 1) * num;
  }
  return 1;
}

console.log(rFact(6.5));
