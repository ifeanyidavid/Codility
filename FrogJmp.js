function solution(X, Y, D) {
  if (isInteger(X) && isInteger(Y) && isInteger(D)) {
    if (
      isWithinRange(1, 1000000000, X, X) &&
      isWithinRange(1, 1000000000, Y, Y) &&
      isWithinRange(1, 1000000000, D, D)
    ) {
      let totalDistance = 0;
      let jumpCount = 0;
      while (totalDistance <= Y) {
        jumpCount += 1;
        if (totalDistance == 0) {
          totalDistance += X + D;
        } else {
          totalDistance += D;
        }
      }
      return jumpCount;
    }
  }
}

function isInteger(V) {
  return Number.isInteger(V);
}

function isWithinRange(minRange, maxRange, minValue, maxValue) {
  return minValue >= minRange && maxValue <= maxRange;
}

const X = 10;
const Y = 85;
const D = 30;

console.log(solution(X, Y, D));
