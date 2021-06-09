// const compareToTen = (num) => {
//   return new Promise( (resolve,reject) => {
//     if(num > 10){
//       resolve('The number is greater than 10')
//     }
//     else{
//       reject('The number is less than 10')
//     }
//   })
//   // return p;
// }
// // let myPromise = compareToTen();
// compareToTen(700)
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {

    let cap = arr.map(word => {
      if(typeof word === 'string') {
        return word.toUpperCase()
      } else {
        reject ("All items in this array are not strings")
      }
    })
    resolve(cap)
      })

}

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    if(arr) {
      resolve(arr.sort())
    } else {
      reject("Error")
    }
  })

}
sortWords(arrayOfWords)
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})



makeAllCaps(arrayOfWords)
.then(data => {
  return sortWords(data)
})
.then(sort => {
  console.log(sort);
})
.catch(err => {
  console.log(err);
})
