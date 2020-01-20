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

function sort(A) {
  return Array.from(new Set(A.sort()));
}

function findMissingElements(A) {
  return sort(A).reduce(function(acc, cur, ind, arr) {
    var diff = cur - arr[ind - 1];
    if (diff > 1) {
      var i = 1;
      while (i < diff) {
        acc.push(arr[ind - 1] + i);
        i++;
      }
    }
    return acc;
  }, []);
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
        const A_Copy = [...A];
        const missingElements = findMissingElements(A_Copy);
        if (missingElements.length > 0) {
          return -1;
        } else {
          if (A.indexOf(X) !== -1) {
            console.log(A.indexOf(X));
            console.log(A);

            return A.indexOf(X);
          } else {
            return -1;
          }
        }
      } else {
        return -1;
      }
    }
  }
}

const A = [1, 3, 1, 4, 2, 3, 5, 4];
const X = 5;

console.log(solution(X, A));
