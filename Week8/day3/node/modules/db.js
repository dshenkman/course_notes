const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'dvdrental'
  }
})

const getCountries = () => {
  return db.select('*').from('country')
}
// getCountries()
// .then(data => {
//   console.log(data);
// })

module.exports = {
  getCountries
}
