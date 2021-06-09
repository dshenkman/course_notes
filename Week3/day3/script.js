

function banner() {

	
let num = 10
let div;

let countdown = setInterval(function() {

	if (num == 0) {
		clearInterval(countdown);
	} else {


		num -- ;

		div = document.getElementById("div")
		console.log(div)
		div.textContent = `The sales end in ${num} seconds!!`

	}


}, 1000);

}

banner()