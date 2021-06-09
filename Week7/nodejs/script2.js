// function getCurrentDate () {
//   return Date();
// };
//
//
// module.exports = {
//     myDate : getCurrentDate
// }



const a = require('axios');

const getData = async () => {

  try {
    const res = await a.get('https://zivuch.github.io/yogaapi.json')
    return res.data

  } catch (e) {
    console.log(e);
  }

}

module.exports = {

  users: getData

}
