const fs = require('fs');

// read
fs.readFile('./data.txt', (err, data) => {

  if (err) {
    console.log(err);
  }
  else {
    console.log(JSON.parse(data.toString())[0].name);
  }
});


// read readFile
const data = fs.readFileSync('./data.txt')
console.log(data.toString());
console.log('after reading');

// append

let data = {name:"Daniella"}

fs.appendFile('./data.txt', JSON.stringify(data), (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }

})

// write

let data = "2345"
fs.writeFile('./one', data, err => {
 if(err) {
   console.log(err);
 } else {
   console.log(data);
 }

})

// delete

fs.unlink('./one', err=> {
  if (err) {
    console.log(err);
  }
})

// copy

fs.copyFile('./data.txt', './data1', err=> {
  if (err) {
  console.log(err);
}
})
