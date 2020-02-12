let numbers = [12, 2, 6, 5, 9, 10, 33];

let difference = (function(arr) {
  // remove dups
  let answers = new Set(arr);
  answers = Array.from(answers).sort((a, b) => b - a);
  return answers[0] - answers[answers.length - 1];
})(numbers);

console.log(difference);
