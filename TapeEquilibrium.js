const A = [1, 2, 3, 4, 5];

// Slower solution
function solution1(A) {
  if (Array.isArray(A)) {
    const totalSumValues = [];
    const N = A.length;
    const minRange = 2;
    const maxRange = 100000;

    if (isWithinRange(minRange, maxRange, N, N)) {
      if (N == 0) return 0;
      if (N == 1) return A[0];

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

function isWithinRange(minRange, maxRange, minValue, maxValue) {
  return minValue >= minRange && maxValue <= maxRange;
}

// Faster solution
function solution2(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  var sum1 = 0;
  var sum2 = A.reduce(function(acc, i) {
    return acc + i;
  });

  var minDiff = Number.POSITIVE_INFINITY;

  for (var p = 0; p < A.length - 1; p++) {
    sum1 += A[p];
    sum2 -= A[p];

    var diff = sum2 - sum1;
    minDiff = Math.min(minDiff, Math.abs(diff));
  }

  return minDiff;
}
