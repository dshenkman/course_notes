
// let b = 3, d = b, u = b;
// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u


// console.log(tree);






// line 1 = 4 * 12 * 3 ---- = 144.  now, d=4, b=4
// line 2 = 3 + 4 ----  = 7. now, d=3, b=3
// line 3 = 3*3  = 9
// u=3            3

function makeWorker() {
  let name = "Pete";
  return function() {
    return name;
  };
}
let name = "John";
let work = makeWorker();
work(); // what will it show? Pete