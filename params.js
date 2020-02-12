let f = function(a, b) {
  if (arguments.length === f.length) {
    console.log("We have a match");
  } else {
    console.log("No match");
  }
};

f(1);
f(1, 2);
f(1, 2, 3);
