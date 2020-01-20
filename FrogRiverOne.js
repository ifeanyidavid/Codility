function isInteger(V) {
  return Number.isInteger(V);
}

function isWithinRange(minRange, maxRange, minValue, maxValue) {
  return minValue >= minRange && maxValue <= maxRange;
}

function getMaxValueFromArray(A) {
  return A.reduce((max, v) => (max >= v ? max : v), -Infinity);
}

function solution(X, A) {
  if (isInteger(X) && Array.isArray(A)) {
    const minRange = 1;
    const maxRange = 100000;
    const N = A.length;
    if (
      isWithinRange(minRange, maxRange, N, N) &&
      isWithinRange(minRange, maxRange, X, X)
    ) {
      if (getMaxValueFromArray(A) === X) {
        if (A.indexOf(X) !== -1) {
          return A.indexOf(X);
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    }
  }
}

const A = [1];
const X = 1;

console.log(solution(X, A));
