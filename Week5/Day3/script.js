
let next = 0

function fetchData() {


let search = document.getElementById("search").value;
let limit = document.getElementById('limit').value;


console.log(limit);
let xhr = new XMLHttpRequest();


 let url = `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${next}`
 xhr.open("GET", url)
 xhr.responseType = "json";
 xhr.send();


 xhr.onload = function() {
   createImages(xhr.response.data);


 }

 next = next + Number(limit);





 // getmore = limit ++
 // console.log(getmore);
 //
 //    `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${getmore}`
};




function createImages(arr) {
  let root = document.getElementById('root');
  root.innerHTML = "";
  arr.forEach((item, i) => {
    let img = document.createElement('img');
    img.setAttribute('src', item.images.fixed_height_small.url)
    root.appendChild(img)


  });

}

function deleteAll() {
  let root = document.getElementById('root');
  console.log(root);
  root.innerHTML = "";

}

function nextImages() {
  fetchData()
}
