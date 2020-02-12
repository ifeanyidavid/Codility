let isInt = function(num) {
  return !isNaN(num) && parseInt(num) === num;
};

console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.0, isInt(1.0));
