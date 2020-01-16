/* Constant time - O(1)
There is always a fixed number of operations.
*/
function constant(n) {
  let result = n * n;
  return result;
}

/* Logarithmic time - O(log n) 
The value of n is halved on each iteration of the loop. If n = 2x then log n = x. How long
would the program below take to execute, depending on the input data?
*/
function logarithmic(n) {
  let result = 0;
  while (n > 1) {
    n /= 2;
    result += 1;
  }
  return result;
}

/* Linear time - O(n) 
Note that if the first value of array A is 0 then the program will end immediately. But
remember, when analyzing time complexity we should check for worst cases. The program
will take the longest time to execute if array A does not contain any 0.
*/
function linear(n, A) {
  for (let i = 0; i <= n; i++) {
    if (A[i] == 0) {
      return 0;
    }
  }
  return 1;
}

/* Quadratic time - O(n^2) 
The result of the function equals 1
2 · (n · (n + 1)) = 1
2 · n2 + 1
2 · n (the explanation is in the
exercises). When calculating the complexity we are interested in a term that grows fastest, so
we not only omit constants, but also other terms ( 1
2 · n in this case). Thus we get quadratic
time complexity
*/
function quadratic(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result += 1;
    }
  }
  return result;
}

/* Linear time - O(n+m) */
function linear2(n, m) {
  result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  for (let j = 0; j <= m; j++) {
    result += j;
  }
  return result;
}
