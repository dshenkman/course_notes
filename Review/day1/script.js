let root = document.getElementById('root')
const info = []



// create elements
const elements = () => {
  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'input')
  root.appendChild(input)
  let button = document.createElement('button')
  root.appendChild(button)
  button.innerText= "Submit"
  button.addEventListener('click', function() {
      submit()
})

}

elements()


const submit = () => {

  const input1 = document.getElementById('input')
  info.push(input1.value);

  const newArray = info.map(item => {
    return `Item: ${item}`
  })


  showData(newArray)



}

const showData = (array) => {
  const div = document.createElement('div')


  for (let i = 0; i < array.length; i++) {

    root.appendChild(div)
    div.innerText= array[i]
  }

}

//
// const cars = [
//   {brand:'Porshe', price:'1000000'},
//   {brand:'Audi', price:'500000'},
//   {brand:'Toyota', price:'250000'},
// ]
//
//
//
// const newCars = cars.map(item => {
//
//   return {...item, pricePlusVat: item.price * 1.17  }
//   })
//
// console.log(cars);
// console.log(newCars);






// const newCars = [
//   {brand:'Porshe', price:'1000000',pricePlusVat:'1170000'},
//   {brand:'Audi', price:'500000',pricePlusVat:'570000'},
//   {brand:'Toyota', price:'250000',pricePlusVat:'320000'},
// ]
