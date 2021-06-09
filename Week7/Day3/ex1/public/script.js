const sendData = () => {

  const name = document.getElementById('name').value;
  // console.log(name);
  // let data = {
  //   n:name
  // }

  fetch('http://localhost:5000/addUser', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({name})

  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })

  }

const showData = () => {

  fetch('http://localhost:5000/showUsers', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    createData(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const createData = (arr) => {
  let root = document.getElementById('root');
  arr.forEach(item => {
    let div = document.createElement('div');
    div.innerText = item.name;
    root.appendChild(div)

  });


}

const checkData = () => {
  const name = document.getElementById('name').value;

  fetch(`http://localhost:5000/checkUsers/${name}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // createCheck(data)
  })
  .catch(err => {
    console.log(err);
  })


}

// const createCheck = (arr) => {
//
//   let root2 = document.getElementById('root2')
//   arr.forEach(item => {
//     let div = document.createElement('div');
//     if () {
//       div.innerText = 'yes'
//     } else {
//       div.innerText = 'no'
//     }
//     root.appendChild(div)
//
//   });
// }
