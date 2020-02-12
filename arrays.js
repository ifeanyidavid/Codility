/* Create an array that is prepopulated with 5 random numbers */

let a1 = Array.from({ length: 5 }, n => Math.floor(Math.random() * 10));
console.log("1", a1);

let a2 = new Array(5).fill(null).map(n => Math.floor(Math.random() * 10));
console.log("2", a2);
