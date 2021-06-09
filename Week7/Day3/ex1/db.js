const knex = require('knex');

const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'postgres',
    password : '12345',
    database : 'dvdrental'
  }
});

// db.select('country_id', 'country').from('country')
// .where('country_id', 99)
// .then(data => {
//   console.log(data);
//   // data.forEach((item, i) => {
//     // console.log(item.country);
//
//   })
//
//
// // })
db('country')
// .where({'country_id': 99})
// .update({'country': 'T123'})
// .insert(
//   [
//     {'country': 'JavaScript'},
//     {'country': 'JavaScript1'},
//     {'country': 'JavaScript2'}
//
//
//   ]
// )
// .del()
.returning('*')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})

// db('country')
// .where({'country': 'Israel'})
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })
