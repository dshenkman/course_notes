


const getData = async () => {

try{

  const response = await fetch ('https://zivuch.github.io/yogaapi.json')
  const data =  await response.json()
  console.log(data)
  return data




}
 catch (error) {
   console.log(error);
 }
}

let yoga = []

const getYoga = async () => {
  yoga = await getData()
  createSelect(yoga)
  createCards(yoga)
  // createFilter(yoga)

}

 const createSelect = (array) => {

  const div1 = document.getElementById('top')

  let button1 = document.createElement('select')
  button1.addEventListener("click", createFilter(yoga))
  let option1 = document.createElement('option')
  button1.appendChild(option1)
  option1.innerText = "Select Sanskrit Name..."

  for (var i = 0; i < array.length; i++) {

  let option2 = document.createElement('option')
  button1.appendChild(option2)
  button1.setAttribute('id', 'button1')

  option2.innerText= array[i].sanskrit_name
  }

  div1.appendChild(button1)


  let button2 = document.createElement('select')
  let optionHead = document.createElement('option')
  button2.appendChild(optionHead)
  button2.setAttribute('id', 'button2')
  optionHead.innerText = "Select English Name..."

  for (var i = 0; i < array.length; i++) {

  let optionNames = document.createElement('option')
  button2.appendChild(optionNames)
  optionNames.innerText= array[i].english_name
  }

  div1.appendChild(button2)

  }


  const createCards = (array) => {

  for (var i = 0; i < array.length; i++) {

    const div2 = document.getElementById('bottom')
    const card = document.createElement("div");

    card.setAttribute('id', 'cardId')
    div2.appendChild(card)

    const image = document.createElement("img")
    image.setAttribute('id', 'image')
    image.src = array[i].img_url
    card.appendChild(image)

    const sName = document.createElement('p')
    sName.setAttribute('id', "sName")
    sName.innerText = array[i].sanskrit_name
    card.appendChild(sName)

    const eName = document.createElement('p')
    eName.setAttribute('id', "eName")
    eName.innerText = array[i].english_name
    card.appendChild(eName)

  }

}

getYoga()

const createFilter = (array) => {

  for (let i = 0; i < array.length; i++) {
//
    let {english_name} = array[i]
    console.log(english_name);
    var card = document.getElementById("cardId");



//
}
}

// const result = yoga.filter(createFilter)
