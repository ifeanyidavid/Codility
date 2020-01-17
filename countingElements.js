function counting(A) {
  let count = new Array(A.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    count[A[i]] += 1;
  }
  return count;
}

const A = [1, 3, 4, 5, 3, 5];

console.log(counting(A));
