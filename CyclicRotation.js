function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
      if (Number.isInteger(K) && Array.isArray(A)) {
        if (K > 0 && K <= 100 && A.length > 0 && A.length <= 100) {
          const minValue = getMinValueFromArray(A);
          const maxValue = getMaxValueFromArray(A);
          
          if(minValue >= -1000 && maxValue <= 1000){
              let cyclicArray = [];
              if (A.length == K) return A;
                  for (let i = 0; i < K; i++) {
                    // Pop last element of the array
                    let lastElement = A.pop();
                    // Add the popped value to the begining of the array
                    A.unshift(lastElement);
                    cyclicArray = A;
                  }
              return cyclicArray;
          }
          return A;
        }
        return A;
    }
}

function getMaxValueFromArray(A){
    return Math.max.apply(null, A)
}

function getMinValueFromArray(A){
   return Math.min.apply(null, A)
}