function counting(A) {
  let count = new Array(A.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    count[A[i]] += 1;
  }

  return count;
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

const A = [7, 0, 2, 3, 5, 4, 6, 6];

console.log(findMissingElements(A));
