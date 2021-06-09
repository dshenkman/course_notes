// const root = document.getElementById('root')
// const button = document.createElement('button')
// button.innerText = 'Click Here'
// root.appendChild(button)
//
// const button2 = document.createElement('button')
// button2.innerText = 'Async'
// root.appendChild(button2)
//
// const input = document.createElement('input')
// input.setAttribute ('type', 'text')
// input.setAttribute('id', 'input')
// root.appendChild(input)
//
// const button3 = document.createElement('button')
// button3.innerText = 'Filter'
// root.appendChild(button3)
//
// const button4 = document.createElement('button')
// button4.innerText = 'Sort By Age'
// root.appendChild(button4)
//
// const button5 = document.createElement('button')
// button5.innerText = 'Sort By Name'
// root.appendChild(button5)


const getData = () => {
fetch('https://zivuch.github.io/employees.json')
  .then(response => response.json())
  .then(data => console.log(data.employees))
  .catch(err => {
    console.log(err);
  })

}
//
// const useAsync = async () => {
//   try{
//     const response = await fetch ('https://zivuch.github.io/employees.json')
//     const data =  await response.json()
//     console.log(data.employees);
//
//     return data.employees
//  }
//    catch (error) {
//      console.log(error);
//    }
//
//  };
//
//
//  const filterData = async () => {
//
//    let employees = await useAsync()
//    const input = document.getElementById('input').value
//    const filter = employees.filter(item => {
//      return item.firstName.toLowerCase().includes(input.toLowerCase())
//
//    })
//
// console.log(filter);
//
//
//  }
//
//  const sortByAge = async () => {
//    let employees = await useAsync()
//    let sort = employees.sort((a,b) => {
//      console.log(a);
//      console.log(b);
//      return a.age - b.age;
//    });
//      console.log(sort);
//
//  }
//
//  const sortByName = async () => {
//    let employees = await useAsync()
//    employees.sort((a, b) => {
//      let nameA = a.firstName.toUpperCase();
//      let nameB = b.firstName.toUpperCase();
//      if (nameA < nameB) {
//        return 1;
//      } if (nameA > nameB) {
//        return -1;
//      }
//      return 0;
// })
// console.log(employees);
// }
//
//  button.addEventListener("click", getData)
//  button2.addEventListener("click", useAsync)
//  button3.addEventListener("click", filterData)
//  button4.addEventListener("click", sortByAge)
//  button5.addEventListener("click", sortByName)
