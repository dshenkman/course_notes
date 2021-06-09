const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');


const app = exp()

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

// app.use((req,res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*')
//   next()
// })

// app.use((req,res,next) => {
//   console.log('hello before req and res');
//   next();
// })

app.use('/', exp.static(__dirname+'/public'));

app.get('/showUsers', (req,res) => {
  let userArr = []
  const file = fs.readFileSync('./names.txt');
  let fileStr = file.toString();
  userArr = JSON.parse(fileStr);
  res.send(userArr);

})

app.post('/addUser', (req,res) => {
  console.log(req.body);
  let userArr = []

  const file = fs.readFileSync('./names.txt');
  let fileStr = file.toString();
  userArr = JSON.parse(fileStr)

  console.log(userArr);

  userArr.push(req.body)
  fs.writeFile('./names.txt', JSON.stringify(userArr), err => {
   if(err) {
     console.log(err);
   }

  })
  res.send({message:'ok'})


})

app.get('/checkUsers/:id', (req,res) => {
  // console.log(req.params);
  const file = fs.readFileSync('./names.txt');
  let fileStr = file.toString();
  arr = JSON.parse(fileStr)

  let filter = arr.filter(item => {
    return item.name === req.params.id
  })
  if(filter.length > 0) {
    res.send({message:'exists'})
  } else {
    res.send({message:'does not exist'})

  }

})


// //ANOTHER method
//
// app.route('/addUser')
//   .post((req,res) => {
//     console.log(req.body);
//     res.send({message:'ok'})
//
//
//   })



// app.listen(5000)

//ANOTHER WAY:

app.set('port', 5000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);


})
