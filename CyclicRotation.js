function cyclicRotation(array, k) {
  if (Number.isInteger(k) && Array.isArray(array)) {
    if (k > 0 && k <= 100 && array.length > 0 && array.length <= 100) {
      const minValue = Math.min.apply(null, array);
      const maxValue = Math.max.apply(null, array);
      if (minValue >= -1000 && maxValue <= 1000) {
        let cyclicArray = [];
        if (array.length == k) return array;
        for (let i = 0; i < k; i++) {
          // Pop last element of the array
          let lastElement = array.pop();
          // Add the popped value to the begining of the array
          arr.unshift(lastElement);
          cyclicArray = array;
        }
        return cyclicArray;
      }
      return array;
    }
    return array;
  }
  return "Invalid arguments";
}

const arr = [-4];
console.log(cyclicRotation(arr, 0));
