/* Singleton implementation in JS
After the first object is created, it will
return additional references to itself
*/

let obj = (function() {
  let objInstance; // Private variable
  function create() {
    // Private function to create methods and properties
    let _isRunning = false;
    let start = function() {
      _isRunning = true;
    };
    let stop = function() {
      _isRunning = false;
    };
    let currentState = function() {
      return _isRunning;
    };
    return {
      start: start,
      stop: stop,
      currentState: currentState
    };
  }
  return {
    getInstance: function() {
      if (!objInstance) {
        objInstance = create();
      }
      return objInstance;
    }
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

obj1.start();
console.log(obj1.currentState());
console.log(obj2.currentState());
