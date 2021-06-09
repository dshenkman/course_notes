const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js')

const app = exp()
app.use(cors())

app.get('/getCountries', (req,res) => {
  DB.getCountries()
  .then(countries => {
    res.send(countries)
  })
  .catch(e => {
    res.send({message:e})
  })
})




app.set('port', 9000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);


})
