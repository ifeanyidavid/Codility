function solution1(A) {
  const max = A.length + 1;
  const incompleteSet = new Set(A);
  let missingElement = 0;

  for (let i = 1; i <= max; i++) {
    if (!incompleteSet.has(i)) {
      missingElement = i;
    }
  }
  return missingElement;
}

/* Faster solution */
function solution2(A) {
  if (A.length == 0) return 1;

  const actualSum = A.reduce(function(actualSum, i) {
    return actualSum + i;
  });

  console.log(actualSum);

  const requiredSum = ((A.length + 1) * (A.length + 2)) / 2;

  return requiredSum - actualSum;
}

const A = [2, 3, 1, 5];

console.log(solution1(A));
