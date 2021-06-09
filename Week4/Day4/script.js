/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/

// let s = " the quick brown fox jumps over the lazy dog"
// //
// // let pangram = s (item => {
// //
// //  if (item.includes("a")) {
// //    return "pangram"
// //  }   else {
// //    return "not a pangram"
// //  }
// // })
// //
// // console.log(pangram);
//
// let  pangrams = string => {
//
// if(string.includes("abcdefghijklmnopqrstuvwxyz")) {
//   return "pangram"
// } else {
//   return "not a pangram"
// }
//
// }
//
// console.log(pangrams(s));



const population5 = {
  tokyo: 1,
  delhi: 4,
  shanghai: 3,
  datetime:{
    time:5,
    date:6
  }
}


const {tokyo, delhi, shanghai, datetime:{time,date} } = population5


console.log(tokyo, delhi, shanghai, time, date);
