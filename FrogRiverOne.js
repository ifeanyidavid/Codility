function isInteger(V) {
  return Number.isInteger(V);
}

function isWithinRange(minRange, maxRange, minValue, maxValue) {
  return minValue >= minRange && maxValue <= maxRange;
}

function getMaxValueFromArray(A) {
  return A.reduce((max, v) => (max >= v ? max : v), -Infinity);
}

function getMinValueFromArray(A) {
  return A.reduce((min, v) => (min <= v ? min : v), Infinity);
}

function countElements(A) {
  const count = new Array(A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    count[A[i]] += 1;
  }
  console.log(count);

  return count;
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
        if (
          A.length > 1 &&
          getMinValueFromArray(A) === getMaxValueFromArray(A)
        ) {
          return -1;
        }
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

const A = [1, 2, 3, 5, 3, 1];
const X = 5;

console.log(solution(X, A));
