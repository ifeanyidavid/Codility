(function f1() {
  var a = 1,
    b = 1;
  var x = (y = 2);
})();
(function f2() {
  let j = 1,
    k = 1;
  let r = (s = 2);
})();

//what are the values for a, b, x, y, j, k, r, s in the global scope?
//which of these variables will exist on the window/global object?
console.log(global.s);
