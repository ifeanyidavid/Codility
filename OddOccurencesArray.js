function solution(A) {
  let occurences, unpairedElements;
  const N = A.length;
  // Check if array length is odd
  if (isOdd(N) && N >= 1 && N <= 1000000) {
    const minValue = getMinValueFromArray(A);
    const maxValue = getMaxValueFromArray(A);
    if (minValue >= 1 && maxValue <= 1000000000) {
      // Count the number of occurences of each element
      occurences = getElementsOccurences(A);

      // Return elements with odd occurences
      unpairedElements = getOddElementsCount(occurences);
      console.log(unpairedElements);

      return parseInt(unpairedElements[0]);
    }
    return "Invalid arguments";
  } else {
    return "Invalid arguments";
  }
}

function isOdd(number) {
  return number % 2;
}

function getElementsOccurences(A) {
  return A.reduce(function(acc, curr) {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
}

function getOddElementsCount(obj) {
  const oddGroup = [];
  for (el in obj) {
    if (isOdd(obj[el])) {
      oddGroup.push(el);
    }
  }
  return oddGroup;
}

function getMaxValueFromArray(A) {
  //   return Math.max.apply(null, A); // Not efficient
  return A.reduce((max, v) => (max >= v ? max : v), -Infinity);
}

function getMinValueFromArray(A) {
  //   return Math.min.apply(null, A); Not efficient
  return A.reduce((min, v) => (min <= v ? min : v), Infinity);
}

const A = [9, 3, 9, 3, 9, 7, 8];

console.log(solution(A));

