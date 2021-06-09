// let users = ['eli', 'adam', 'galina', 'ziv'];
//
// const usersEmail = users.map( item => {
//
//   return `${item}@gmail.com`
// })
//
// console.log(usersEmail);
//
//
// let array = [0,1,2,3,5,8]
//
//
// let new_array = array.filter( item => {
//   return item > 3;
//
//
//
// })
//
// console.log(new_array);

//
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//
// const newDragons = dragons.filter(item => {
//
//   return item.includes("Sa");
//
// })
//
// console.log(newDragons);


/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/

let numbers = [2,5,10,100]

let newNumbers = numbers.reduce((total,item) => {
  return total + item

})

console.log(newNumbers);
