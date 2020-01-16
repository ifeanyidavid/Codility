function solution(X, Y, D) {
  if (isInteger(X) && isInteger(Y) && isInteger(D)) {
    if (
      isWithinRange(1, 1000000000, X, X) &&
      isWithinRange(1, 1000000000, Y, Y) &&
      isWithinRange(1, 1000000000, D, D)
    ) {
      let totalDistance = 0;
      let jumpCount = 0;

      while (totalDistance < Y) {
        if (totalDistance == 0) {
          totalDistance += X + D;
          jumpCount += 1;
        } else {
          totalDistance += D;
          jumpCount += 1;
        }
      }
      if (jumpCount == 1) {
        return 0;
      } else {
        return jumpCount;
      }
    }
  }
}

function isInteger(V) {
  return Number.isInteger(V);
}

function isWithinRange(minRange, maxRange, minValue, maxValue) {
  return minValue >= minRange && maxValue <= maxRange;
}

const X = 3;
const Y = 999111321;
const D = 7;

console.log(solution(X, Y, D));

function solutionR(X, Y, D) {}
