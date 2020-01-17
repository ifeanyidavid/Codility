const A = [1, 3];

function solution(A) {
  if (Array.isArray(A)) {
    const totalSumValues = [];
    if (A.length == 0) return 0;
    if (A.length == 1) return A[0];
    for (let i = 1; i < A.length; i++) {
      const tempArray = [...A];

      const splitTempArray = tempArray.splice(0, i);

      const tempArraySum = arraySum(tempArray);
      const splitTempArraySum = arraySum(splitTempArray);

      const arraySumDifference = Math.abs(splitTempArraySum - tempArraySum);

      totalSumValues.push(arraySumDifference);
    }
    return getMinValueFromArray(totalSumValues);
  } else {
    return "Invalid arguments";
  }
}

function arraySum(A) {
  return A.reduce(function(acc, curr) {
    acc += curr;
    return acc;
  }, 0);
}

function getMinValueFromArray(A) {
  return A.reduce((min, v) => (min <= v ? min : v), Infinity);
}

console.log(solution(A));
