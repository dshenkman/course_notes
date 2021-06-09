// const http = require('http');
//
// const server = http.createServer((req,res) => {
//   // console.log(req.method);
//   // console.log(req.headers);
//   // console.log(req.url);
//   // res.end('hi....')
//   res.setHeader('Content-Type', 'application/json');
//   let user = {
//     name:'Daniella'
//   }
//   // res.end('<h1>hi</hi>');
//   res.end(JSON.stringify(user))
//
// });
//
// server.listen(3000);

const exp = require('express');
const bp = require('body-parser');

const app = exp();

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))

// parse application/json
app.use(bp.json())

app.use('/', exp.static(__dirname+'/public'));

app.route('/login')
  .get((req,res) => {
    console.log(req.query);

    let obj = {
      message:'ok'
    }
    res.send(obj)
  })
  .post((req,res) => {
    console.log(req.body);
    res.send({message:'from post method'})
  })

  app.get('/user/:id', (req,res) => {
    console.log(req.params);
    res.send('hello user id:' + req.params.id)
  })
//
//
// //
// // app.get('/', (req,res) => {
// //   res.send('<h1>Home Page</h1>')
// // })
// //
// // app.get('/login', (req,res) => {
// //   console.log(req.query);
// //   res.send('login get')
// // })
// // app.post('/login', (req,res) => {
// //   console.log(req.body);
// //   res.send('login post')
// //
// // })
//
app.listen(3000)
