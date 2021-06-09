const div1 = document.getElementById('top')
const div2 = document.getElementById('bottom')
const firstName = document.getElementById('firstname')
const secondName = document.getElementById('secondname')


const button = document.createElement('button')
button.innerText = 'Find Match'
div1.appendChild(button)



const getData = async () => {

try{
  const fvalue = firstName.value
  const svalue = secondName.value

  const response = await fetch (`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fvalue}&sname=${svalue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7ea3bba4femshe5fbca7638aac73p143dabjsn9df29e5ddd31",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
  }
})
  const data =  await response.json()
  console.log(data)
  div2.innerHTML = ''


  const names = document.createElement('h1')
  names.innerText = `${data.fname} + ${data.sname}`
  div2.appendChild(names)

  const percent = document.createElement('h1')
  percent.innerText = `${data.percentage}% match`
  div2.appendChild(percent)

  const comment = document.createElement('h1')
  comment.innerText = data.result
  div2.appendChild(comment)




}
 catch (error) {
   console.log(error);
 }
}





const showFirstName = () => {

  const fname = document.getElementById('fname')
  const fnamevalue = document.createElement('span')
  fname.innerHTML = ''
  fnamevalue.innerText = firstName.value
  fname.appendChild(fnamevalue)

}

const showSecondName = () => {

  const sname = document.getElementById('sname')
  const snamevalue = document.createElement('span')

  sname.innerHTML = '';
  snamevalue.innerText = secondName.value
  sname.appendChild(snamevalue)




}




button.addEventListener("click", getData )
firstName.addEventListener("input", showFirstName )
secondName.addEventListener("input", showSecondName)
